const Log = require("../utils/Log");

const logger = async (req, res, next) => {

    const startTime = Date.now();

    await Log(
        "backend",
        "info",
        "middleware",
        `${req.method} ${req.originalUrl} request received`
    );

    res.on("finish", async () => {

        const duration = Date.now() - startTime;

        await Log(
            "backend",
            "info",
            "middleware",
            `${req.method} ${req.originalUrl} completed with status ${res.statusCode} in ${duration}ms`
        );

    });

    next();
};

module.exports = logger;