const express = require("express");

const authRoutes = require("./routes/auth_routes");
const logRoutes = require("./routes/log_routes");

const loggerMiddleware = require("./middleware/logger_middleware");

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api/auth", authRoutes);
app.use("/api", logRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});