const passport = require("passport");
require("dotenv").config();
let RedditStrategy;

async function setupRedditPassport() {
  const redditModule = await import("passport-reddit");
  RedditStrategy = redditModule.Strategy;
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  passport.use(
    new RedditStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/reddit/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        if (!profile)
          return done(new Error("No profile returned from Reddit"), null);
        const user = {
          id: profile.id,
          name: profile.name,
          refreshToken,
        };
        return done(null, user);
      }
    )
  );
}
module.exports = setupRedditPassport;
