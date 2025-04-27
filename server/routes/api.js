const express = require("express");
const apiRouter = express.Router();
const REDDIT_API = "https://oauth.reddit.com";
apiRouter.get("/me", async (req, res) => {
  const accessToken = req.headers["authorization"].split(" ")[1];
  console.log(accessToken);
  const redditResponse = await fetch("https://oauth.reddit.com/api/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "User-Agent": "your-app-name/0.1 by your-reddit-username",
    },
  });

  if (redditResponse.status === 403) res.status(403).json({});
  const data = await redditResponse.json();
  res.json(data);
});

module.exports = apiRouter;
