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

app.post("/contact", (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  //database stuff
  res.status(201).send(`Thank you ${req.body.name}`);
});

app.post("/login", (req, res) => {
  if (!req.header("x-auth-token")) {
    return res.status(400).send("No token");
  }
  if (req.header("x-auth-token") !== "123456") {
    return res.status(401).send("Not Authorized");
  }
  res.send("Logged in");
});

app.put("/post/:id", (req, res) => {
  //database stuff
  res.json({
    id: req.params.id,
    title: req.body.title
  });
});

app.delete("/post/:id", (req, res) => {
  //database stuff
  res.json({
    msg: `Post ${req.params.id} got deleted`
  });
});

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
