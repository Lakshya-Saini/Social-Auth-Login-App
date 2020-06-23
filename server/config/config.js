exports.SESSION_SECRET = process.env.SESSION_SECRET;

const providers = ["google", "facebook", "github"];

const callbacks = providers.map((provider) => {
  return process.env.NODE_ENV === "production"
    ? ""
    : process.env.URL + `/${provider}/callback`;
});

const [googleURL, facebookURL, githubURL] = callbacks;

exports.CLIENT_ORIGIN =
  process.env.NODE_ENV === "production" ? "" : process.env.URL;

exports.GOOGLE_CONFIG = {
  clientID: process.env.GOOGLE_KEY,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: googleURL,
};

exports.FACEBOOK_CONFIG = {
  clientID: process.env.FACEBOOK_KEY,
  clientSecret: process.env.FACEBOOK_SECRET,
  profileFields: ["id", "emails", "name", "picture.width(250)"],
  callbackURL: facebookURL,
};

exports.GITHUB_CONFIG = {
  clientID: process.env.GITHUB_KEY,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: githubURL,
};
