import React from 'react';
import { CardTemplate } from './card-template.tsx';
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
		  categories: [
			"01 Dec",
			"02 Dec",
			"03 Dec",
			"04 Dec",
			"05 Dec",
			"06 Dec",
			"07 Dec",
			"08 Dec",
			"09 Dec"
		  ]
		}
	  };
	  var series = [
		{
		  name: "Koppar kaffe",
		  data: [12,13,16,9,15,14,12,11,9]
		}
	  ]

	return (
		<CardTemplate>
			<div className="text-xl font-bold">Kaffe tabell</div>
			<Chart
              options={options}
              series={series}
			  type="area"
              height="100%"
			  width="100%"
            />
		</CardTemplate>
	);
};
