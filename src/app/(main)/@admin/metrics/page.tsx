import React from 'react'
import ColumnChart from '../../../../components/Metrics/ColumnChart'

const ViewMetricsPage = () => {
    var data = [
        50,
        100,
        10,
        20,
        30,
        40,
        20,
        80,
        90,
        70,
        60,
        30
    ]
    var labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]
    return (
        <div>
            <ColumnChart data={data} labels={labels}></ColumnChart>
        </div>
    )
}

export default ViewMetricsPage