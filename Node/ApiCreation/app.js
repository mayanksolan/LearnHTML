const http = require("http");
const Joi = require("@hapi/joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "Maths" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Chemistry" }
];

app.get("/", (req, res) => {
  res.send("Hello World!!!, You Keep Rocking");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.post("/api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("Name is required and should be minimum 3 characers");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  let course = courses.find(course => {
    return course.id === parseInt(req.params.id);
  });
  if (!course) {
    res.status(404).send("This course with the given id not found");
  } else {
    res.send(course);
  }
});

// app.get("/api/courses/:year/:month", (req, res) => {
//   res.send(req.params);
// });

// app.get("/api/courses/:year/:month", (req, res) => {
//   res.send(req.query);
// });

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}....`);
});
