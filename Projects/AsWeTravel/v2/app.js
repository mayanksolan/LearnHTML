const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://devMays:devColdplay@cluster0-n0rgm.mongodb.net/travel1?retryWrites=true",
  { useNewUrlParser: true }
);

const placesScehma = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

const Place = mongoose.model("Place", placesScehma);

// Place.create(
//   {
//     name: "Golden Gate Bridge",
//     description:
//       "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean",
//     image:
//       "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
//   },
//   (err, place) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Newly created place", place);
//     }
//   }
// );

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
  Place.find({}, (err, allPlaces) => {
    if (err) {
      console.log(err);
    } else {
      res.render("places", { places: allPlaces });
    }
  });
});

app.get("/places/new", (req, res) => {
  res.render("new");
});

app.post("/places", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const newPlace = { name: name, description: description, image: image };
  Place.create(newPlace, (err, newPlaceCreated) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/places");
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
