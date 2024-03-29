const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const apiRoute = require("./app/routes/apiRoute");

dotenv.config();

const app = express();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    // store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(express.json());
app.use("/api", apiRoute);

app.listen(3000, () => {
  console.log(`Server up and running in port 3000`);
});
