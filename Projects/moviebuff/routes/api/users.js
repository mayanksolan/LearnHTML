const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("config");
const User = require("../../models/User");

// @route   GET api/users..
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("User route"));

// @route   POST api/users..
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      user = new User({ name, email, password });
      //encrypt pwd
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      console.log(user);
      //return jwt
      const payload = {
        user: {
          id: user.id
        }
      };
      const privateKey = config.get("jwtsecret");
      const signOptions = { expiresIn: "2h" };
      jwt.sign(payload, privateKey, signOptions, (err, token) => {
        if (err) {
          throw err;
        } else {
          res.json({ token });
        }
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
