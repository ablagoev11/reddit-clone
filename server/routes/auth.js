const express = require("express");
const authRouter = express.Router();
const passport = require("passport");

const setupRedditPassport = require("../auth/redditPassport");

setupRedditPassport().then(() => {
  authRouter.get("/reddit", function (req, res, next) {
    passport.authenticate("reddit", {
      duration: "permanent",
    })(req, res, next);
  });

  authRouter.get(
    "/reddit/callback",
    passport.authenticate("reddit", {
      failureRedirect: "/login",
    }),
    (req, res, next) => {
      const pathname = req.cookies.redirect_path || "/";
      res.cookie("refreshToken", req.user.refreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
        sameSite: "lax",
      });
      res.clearCookie("redirect_path");
      res.redirect(`http://localhost:5173${pathname}`);
      next();
    }
  );
});

authRouter.get("/refresh", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ error: "No refresh token found" });
  }
  const credentials = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response = await fetch("https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to refresh access token");
    }

    res.json({ access_token: data.access_token });
  } catch (error) {
    res.status(500).json({ error: "Failed to refresh token" });
  }
});

module.exports = authRouter;
