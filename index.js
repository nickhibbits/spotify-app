require("dotenv").config();
const express = require("express");
const app = express();

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

const port = 8888;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
