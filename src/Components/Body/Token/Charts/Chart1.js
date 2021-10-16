import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./Charts.css";

class ChartOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [26.7, 33.3, 40],
      options: {
        chart: {
          width: 380,
          type: "polarArea",
        },
        labels: ["Phase 1", "Phase 2", "Phase 3"],
        fill: {
          opacity: 1,
          colors: ["#33d85d", "#0be846", "#00cd78", "#00c735", "#42b15f"],
        },
        stroke: {
          width: 1,
          colors: ["#33d85d", "#0be846", "#00cd78", "#00c735", "#42b15f"],
        },
        dataLabels: {
          style: {
            colors: undefined,
          },
        },

        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0.6,
          },
        },
      },
    };
  }

  render() {
    return (
      <>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="polarArea"
          width={500}
          className="d-flex justify-content-center"
        />
      </>
    );
  }
}

export default ChartOne;
