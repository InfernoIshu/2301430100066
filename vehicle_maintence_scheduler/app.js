const express = require("express");

const loggerMiddleware = require("./middleware/logger_middleware");
const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging Middleware
app.use(loggerMiddleware);

// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Vehicle Maintenance Scheduler API Running"
    });
});

// Scheduler Routes
app.use("/api", schedulerRoutes);

// Global Error Handler
app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

});

module.exports = app;