import React from 'react'
import VegaLite from 'react-vega-lite'
//import {Scatter} from 'react-chartjs-2';

const DataChart = ({data}) => {
  if (! data) {
    return (<p>no data</p>)
  } else {
    const xy_values = data.map((rec) => {
        return {x: rec.hindfoot_avg, y: rec.weight_avg}
    })
    let spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
      "description": "A scatterplot of mean weight vs mean hindfoot length.",
      "mark": "point",
      "encoding": {
        "x": {"field": "x", "type": "quantitative"},
        "y": {"field": "y", "type": "quantitative"}
      }
    }
    let options = {
        "actions": {
          "export": false,
          "source": false,
          "editor": false
      }
    }
    let scatterData = {
        "values": xy_values
    }
    return(
      <VegaLite spec={spec} data={scatterData} options={options}/>
    )
  }
}

export default DataChart
