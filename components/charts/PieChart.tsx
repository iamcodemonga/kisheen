import React from 'react'
import { Chart as ChartJs, defaults, BarElement, LineElement } from 'chart.js/auto'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'

ChartJs.register(
    BarElement, LineElement
)

defaults.maintainAspectRatio = false;
// defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.text = "Top Services";
defaults.plugins.title.color = "black";

const PieChart = ({ chartData }: { chartData: any }) => {
    return (
        <Doughnut data={chartData} options={{
            plugins: {
                title: {
                    text: "Top Services",
                    font: {
                        size: 20,
                        weight: 400
                    }
                }
            }
        }} /> 
    )
}

export default PieChart