import React from "react";
import { CardTemplate } from "./card-template";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const CurrentVolume: React.FC = ({}) => {
	var current_volume = global.store.current_volume

	var options = {
		colors:['#ff000f'],
		plotOptions: {
		  radialBar: {
			// hollow: { size: "40%" },
			dataLabels: {
				name: {show: false,},
				value: {show: false}
			}
		  }
		},
	};

	return (
		<CardTemplate>
				<div className="relative max-h-48 max-w-full grid md:grid-cols-2">
					{/* <div className="absolute w-full h-full mt-24 align-middle">
						<div className="relative  text-center">hej</div>
					</div> */}
					<div className="w-full py-1 pl-1">
						<div className="md:text-3xl text-2xl font-bold text-gray-900">{global.store.current_volume}% kvar</div>
						<div className="md:text-lg text-sm font-bold text-gray-900">i kaffemaskinen</div>
					</div>
					<div className="relative max-h-32">
					<div className="w-full md:h-56 h-48">
						<Chart
						options={options}
						series={[current_volume]}
						type="radialBar"
						height="100%"
						width="100%"
						/>
					</div>
					</div>
				</div> 
	
		</CardTemplate>
	);
};
