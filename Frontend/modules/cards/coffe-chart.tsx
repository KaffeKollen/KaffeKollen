import React from "react";
import { CardTemplate } from "./card-template";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const CoffeChart: React.FC = ({}) => {
	  var options = {
		colors:['#e33b3b', '#a11f1f', '#e86464'],
		dataLabels: { enabled: false },
		grid: { show: false },
		// tooltip: { enabled: false },
		toolbar: { 
			show: false,
			tools: {
				download: false,
				selection: false,
				zoom: false,
				zoomin: false,
				zoomout: false,
				pan: false,
				reset: false
			}, 
		},
		fill: {
		  type: "gradient",
		  gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.8,
			opacityTo: 0.4,
			stops: [0, 90, 100]
		  }
		},
		xaxis: {
		  categories: global.store.lineChart.categories
		}
	  };

	return (
		<CardTemplate>
			<div className="text-xl ml-2 font-bold text-gray-900">Kaffekoppar per dag senaste veckan</div>
			<Chart
              options={options}
              series={global.store.lineChart.series}
			  type="area"
              height="100%"
			  width="100%"
            />
		</CardTemplate>
	);
};
