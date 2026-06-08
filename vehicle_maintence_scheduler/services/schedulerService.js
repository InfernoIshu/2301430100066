const axiosInstance =
require("../config/axiosInstance");

const knapsack =
require("../utils/knapsack");

const Log =
require("../utils/logger");

const generateSchedule =
async () => {

    const depotsResponse =
        await axiosInstance.get(
            "/depots"
        );

    const vehiclesResponse =
        await axiosInstance.get(
            "/vehicles"
        );

    const depots =
        depotsResponse.data.depots;

    const vehicles =
        vehiclesResponse.data.vehicles;

    const results = [];

    for (const depot of depots) {

        await Log(
            "backend",
            "info",
            "service",
            `Running optimization for ${depot.id}`
        );

        const solution =
            knapsack(
                vehicles,
                depot.mechanicsCount
            );

        const totalHours =
            solution.selectedVehicles
                .reduce(
                    (sum, v) =>
                        sum +
                        v.duration,
                    0
                );

        results.push({
            depotId: depot.id,
            mechanicBudget:
                depot.mechanicsCount,
            totalHours,
            totalImpact:
                solution.maxImpact,
            selectedVehicles:
                solution.selectedVehicles
        });
    }

    return results;
};

module.exports = {
    generateSchedule
};