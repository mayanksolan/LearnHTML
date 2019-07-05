const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://devMays:devColdplay@cluster0-n0rgm.mongodb.net/test?retryWrites=true"
);

var places = [
  {
    name: "Taj Mahal",
    description:
      "The Taj Mahal, meaning 'Crown of the Palaces' is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
    image:
      "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
  },
  {
    name: "Golden Gate Bridge",
    description:
      "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean",
    image:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  },
  {
    name: "Egyptian pyramids",
    description:
      "The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt.",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  },
  {
    name: "Leaning Tower Of Pisa",
    description:
      "The Leaning Tower of Pisa or simply the Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its nearly four-degree lean, the result of an unstable foundation.",
    image:
      "https://images.unsplash.com/photo-1522918448933-b33e408a411a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
  }
];

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/places", (req, res) => {
  res.render("places", { places: places });
});

app.get("/places/new", (req, res) => {
  res.render("new");
});

app.post("/places", (req, res) => {
  places.push({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  });
  res.redirect("/places");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
