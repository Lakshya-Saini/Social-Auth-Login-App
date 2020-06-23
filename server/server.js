require("dotenv").config();
const express = require("express");
const http = require("http");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const socketio = require("socket.io");
const authRouter = require("./lib/auth.router");
const passportInit = require("./lib/passport.init");
const { SESSION_SECRET, CLIENT_ORIGIN } = require("./config/config");

const app = express();

// Create Server.
const server = http.createServer(app);

// Middleware
app.use(express.json());

app.use(passport.initialize());

passportInit();

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

const io = socketio(server);
app.set("io", io);

app.use("/", authRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`App listening on port ${port}`));
