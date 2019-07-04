const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
