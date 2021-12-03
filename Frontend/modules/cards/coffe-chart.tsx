import React from "react";
import { CardTemplate } from "./card-template";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const CoffeChart: React.FC = ({}) => {
	  var options = {
		colors:['#ff000f', '#a11f1f', '#e86464'],
		dataLabels: { enabled: false },
		grid: { show: false },
		chart: { toolbar: { show: false } },
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
			<div className="text-xl text-center font-bold text-gray-900">Kaffekoppar per dag</div>
			<div className="h-full">
			<Chart
              options={options}
              series={global.store.lineChart.series}
			  type="area"
              height="100%"
			  width="100%"
            />
			</div>
		</CardTemplate>
	);
};
