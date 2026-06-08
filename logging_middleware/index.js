const express = require("express");

const logger = require("./middleware/logger");

const app = express();

app.use(express.json());

app.use(logger);

app.get("/", async (req, res) => {

    res.status(200).json({
        message: "Logging Middleware Working"
    });

});

app.listen(3000, () => {

    console.log("Server Running on Port 3000");

});