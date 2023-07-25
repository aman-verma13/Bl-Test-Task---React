import React from "react";
import DonutChart from "react-donut-chart";

export default function Donut() {
    return (

        <DonutChart
            data={[
                {
                    label: "Upcomming",
                    value: 50,
                },
                {
                    label: "Inprogress",
                    value: 25,
                },
                {
                    label: "Completed",
                    value: 25,
                },
            ]}
            interactive={false}
            legend={false}
            width={'200'}
            height={'180'}
            outerRadius={0.40}
            innerRadius={0.32}
            colors={["#c9105d", "#5554af", "#fca31d"]}
        />

    );
}
