const {
    generateSchedule
} = require("../services/schedulerService");

const getSchedule =
async (req, res) => {

    try {

        const result =
            await generateSchedule();

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message:
                error.message
        });
    }
};

module.exports = {
    getSchedule
};