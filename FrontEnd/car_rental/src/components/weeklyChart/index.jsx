import React from "react";
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const WeeklyChart = () => {

// Sample data
    const data = {
        labels: ["January", "February", "March",
            "April", "May", "June", "July","August","September","October","November","December"],
        datasets: [
            {
                label: "Income by Count",
                data: [2, 5, 6, 7, 3, 3, 4,8,10,2,6,4],
                backgroundColor: "#02b844",
                borderWidth: 1,
                borderColor: "#000000",
            }
        ]
    }

    return (
        <MDBContainer>
            <Bar data={data}
                 style={{ maxHeight: '600px',width:"40vw"}}
            />
        </MDBContainer>
    );
}

export default WeeklyChart;
