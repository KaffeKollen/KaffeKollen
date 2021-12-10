import React from "react";
import { CardTemplate } from "./card-template";

import AbbLogoPNG from "../../public/abb-logga.png";
import AbbLogoSVG from "/public/abb-logga.svg";

export const InfoSign: React.FC = ({}) => {
	return (
		<CardTemplate>
			<div className="mt-4">
				<img className="md:mx-2 mt-1" src='/abb-logga.svg' alt="ABB Logo" />
				<div className="md:text-sm text-xs mt-4 text-center text-gray-600 font-medium">Gjord av: Gabriel B, Edvin V, Rasmus R, Samuel S</div>
			</div>
		</CardTemplate>
	);
};
