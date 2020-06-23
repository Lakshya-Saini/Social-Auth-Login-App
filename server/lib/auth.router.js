const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("./auth.controller");

const googleAuth = passport.authenticate("google", { scope: ["profile"] });
const facebookAuth = passport.authenticate("facebook");
const githubAuth = passport.authenticate("github");

router.get("/google/callback", googleAuth, authController.google);
router.get("/facebook/callback", facebookAuth, authController.facebook);
router.get("/github/callback", githubAuth, authController.github);

router.use((req, res, next) => {
  req.session.socketID = req.query.socketID;
  next();
});

router.get("/google", googleAuth);
router.get("/facebook", facebookAuth);
router.get("/github", githubAuth);

module.exports = router;
