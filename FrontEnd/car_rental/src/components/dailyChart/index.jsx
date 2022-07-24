import React from "react";
import { MDBContainer } from "mdbreact";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DailyChart = () => {

// Sample data
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],

        datasets: [
            {
                label: "Daily Income",
                data: [2, 5, 6, 7, 3],
                backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
            }
        ]
    }

    return (
        <MDBContainer>
            <Doughnut data={data} />
        </MDBContainer>
    );
}

export default DailyChart;
