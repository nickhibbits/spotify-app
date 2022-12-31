require("dotenv").config();
const express = require("express");
const app = express();

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

const port = 8888;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});

app.get("/login", (req, res) => {
  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
  );
});
