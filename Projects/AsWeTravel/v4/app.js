const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Place = require("./models/place");
const seedDB = require("./seeds");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://devMays:devColdplay@cluster0-n0rgm.mongodb.net/travel1?retryWrites=true",
  { useNewUrlParser: true }
);

seedDB();

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

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/places", (req, res) => {
  Place.find({}, (err, allPlaces) => {
    if (err) {
      console.log(err);
    } else {
      res.render("places/places", { places: allPlaces });
    }
  });
});

app.get("/places/new", (req, res) => {
  res.render("places/new");
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
      res.redirect("places/places");
    }
  });
});

app.get("/places/:id", (req, res) => {
  Place.findById(req.params.id)
    .populate("comments")
    .exec((err, foundPlace) => {
      if (err) {
        console.log(err);
      } else {
        console.log(foundPlace);
        res.render("places/show", { place: foundPlace });
      }
    });
});

//Comment Routes

app.get("/places/:id/comments/new", (req, res) => {
  Place.findById(req.params.id, (err, place) => {
    if (err) {
      console.log(error);
    } else {
      res.render("comments/new", { place: place });
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
