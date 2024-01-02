import React from 'react'
import { Chart as ChartJs, defaults, BarElement, LineElement, plugins } from 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2'
// import { plugins } from 'chart.js/dist/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

ChartJs.register(
    BarElement, LineElement
)

defaults.maintainAspectRatio = false;
// defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

const BarChart = ({ chartData }: { chartData: any }) => {
    return (
       <Bar data={chartData} options={{
        plugins: {
            title: {
                text: "Monthly Orders",
                font: {
                    size: 20
                }
            }
        }
       }} /> 
    )
}

export default BarChart