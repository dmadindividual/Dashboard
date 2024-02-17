import React from 'react'
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react'

const OrderChart = () => {
    const option = {
        series: [
          {
            name: "Item",
            type: "pie",
            radius: ["60%", "80%"],

            data:[
                {value: 2190, name: "Search Engine"},
                {value: 735, name: "Directs"},
                {value: 580, name: "Email"},
                {value: 484, name: "Union Ads"},
            ]
              
            
          }

        ]
    }



  return (
    <ReactECharts style={{height: 140, marginTop: "1rem"}} option={option}/>

  )
}

export default OrderChart