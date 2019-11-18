const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(req.body.name);
});

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
