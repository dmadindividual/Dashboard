import React from 'react'

import ReactECharts from "echarts-for-react"

const StatisticsChart = () => {
  const   option = {

    toolbox:{
        feature:{
            saveAsImage: {},
        }

    },

    tooltip:{
        trigger: "axis",
        axisPointer: {
            type: "cross"
        },
        backgroundColor: "rgba(0,0,0,0.59)",
        borderWidth: 0,

    },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130], 
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
  return (
<ReactECharts option={option}/>
  )
}

export default StatisticsChart