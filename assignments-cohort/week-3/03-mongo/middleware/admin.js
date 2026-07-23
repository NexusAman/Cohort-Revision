// Middleware for handling auth
const { Admin } = require("../db/index.js");

async function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  const admin = await Admin.findOne({
    username,
    password,
  });

  if (admin) {
    return next();
  }

  return res.status(403).send("Admin doesn't exist");
}

module.exports = adminMiddleware;
