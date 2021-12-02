import React from "react";
import { CardTemplate } from "./card-template";

import AbbLogoPNG from "../../public/abb-logga.png";
import AbbLogoSVG from "/public/abb-logga.svg";

export const InfoSign: React.FC = ({}) => {
	return (
		<CardTemplate>
			<div className="grid-span-7">
				{/* <img src='/abb-logga.png' alt="ABB Logo" /> */}
				<img className="m-2" src='/abb-logga.svg' alt="ABB Logo" />
				<div className="text-sm mt-3 text-center text-gray-600 font-medium">Gjord av: Gabriel G, Edvin V, Rasmus R, Samuel S</div>
			</div>
		</CardTemplate>
	);
};
