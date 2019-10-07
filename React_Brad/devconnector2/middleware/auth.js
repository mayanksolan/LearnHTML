const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  //get the token from the header
  const token = req.header("x-auth-token");

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtsecret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "TOken is not valid" });
  }
};
