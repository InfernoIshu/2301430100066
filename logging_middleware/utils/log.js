const axiosInstance = require("../config/axiosInstance");

const Log = async (
    stack,
    level,
    packageName,
    message
) => {
    try {

        const payload = {
            stack,
            level,
            package: packageName,
            message
        };

        const response = await axiosInstance.post(
            "/logs",
            payload
        );

        return response.data;

    } catch (error) {

        console.error("Logging Error:", error.response?.data || error.message);

    }
};

module.exports = Log;