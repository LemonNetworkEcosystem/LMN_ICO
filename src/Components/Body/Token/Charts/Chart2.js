import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./Charts.css";

class ChartTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [2, 5, 5, 8, 10, 10, 13, 15, 32],
      options: {
        chart: {
          width: 380,
          type: "polarArea",
        },
        labels: [
          "Founders",
          "Collaborators",
          "Private Sale",
          "Lemon Network",
          "Developers",
          "Team Advisors",
          "Lemonnet App",
          "LMN - ICO",
          "Lemonade DeFi",
        ],
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

export default ChartTwo;
