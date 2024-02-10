"use client"

import React from 'react'
import Chart, { Props } from "react-apexcharts";

type ChartProps = {
    data: number[],
    labels: string[]
}
const ColumnChart = ({ data, labels }: ChartProps) => {

    const chartConfig: Props = {
        type: "bar",
        height: 480,
        series: [
            {
                name: "Sales",
                data: data,
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: true,
                },
            },
            title: {
                text: "Volunteer Activity Report"
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#020617"],
            plotOptions: {
                bar: {
                    columnWidth: "50%",
                    borderRadius: 2,
                },
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: labels,
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
        },
    };
    return (
        <>
            <Chart {...chartConfig} />
        </>
    )
}

export default ColumnChart