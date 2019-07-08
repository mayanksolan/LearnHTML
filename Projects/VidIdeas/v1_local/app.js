const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

//load routes
const ideas = require("./routes/ideas");
const users = require("./routes/users");

//passport config
require("./config/passport")(passport);

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to mongoose
mongoose
  .connect(
    "mongodb+srv://devMays:devColdplay@cluster0-n0rgm.mongodb.net/vidideas?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

//Handlebars Middlewares
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//body parsers middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//static folder
app.use(express.static(path.join(__dirname, "public")));

//method-override middleware
app.use(methodOverride("_method"));

//express-session middleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

//Index Route
app.get("/", (req, res) => {
  const title = "Hello There";
  res.render("index", {
    title: title
  });
});

//About Route
app.get("/about", (req, res) => {
  res.render("about");
});

//Use routes
app.use("/ideas", ideas);
app.use("/users", users);

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
