import React from "react";
import { CardTemplate } from "./card-template";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const CurrentVolume: React.FC = ({}) => {
<<<<<<< Updated upstream
  var current_volume = "53";

  var options = {
    colors: ["#e86464", "#a11f1f", "#e86464"],
    plotOptions: {
      radialBar: {
        hollow: {
          //   margin: 15,
          size: "40%",
        },

        dataLabels: {
          enabled: false,
          name: { show: false },
          value: { show: false },
        },
      },
    },

    stroke: {
      //   lineCap: "round",
    },
    labels: ["Progress"],
  };

  return (
    <CardTemplate>
      <div className="text-3xl font-bold text-gray-900">68% kvar</div>
      <Chart
        options={options}
        series={[current_volume]}
        type="radialBar"
        height="100%"
        width="100%"
      />
    </CardTemplate>
  );
=======
	var current_volume = global.store.current_volume

	var options = {
		colors:['#e86464'],
		plotOptions: {
		  radialBar: {
			hollow: {
			//   margin: 15,
			  size: "40%"
			},
		   
			dataLabels: {
				enabled: false,
				name: {show: false,},
				value: {show: false}
			}
		  }
		},
	  
		stroke: {
		//   lineCap: "round",
		},
		labels: ["Progress"]
	  };

	return (
		<CardTemplate>
			<div className="text-3xl font-bold text-gray-900">{global.store.current_volume}% kvar</div>
			<div></div>
			<Chart
              options={options}
              series={[current_volume]}
			  type="radialBar"
              height="100%"
			  width="100%"
            />
		</CardTemplate>
	);
>>>>>>> Stashed changes
};
