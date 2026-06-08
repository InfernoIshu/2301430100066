const Log = require("../utils/logger");

const loggerMiddleware = async (req, res, next) => {
  await Log(
    "backend",
    "info",
    "route",
    `${req.method} ${req.originalUrl}`
  );

  next();
};

module.exports = loggerMiddleware;
