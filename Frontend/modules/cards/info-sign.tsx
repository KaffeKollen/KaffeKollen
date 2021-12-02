import React from 'react';
import { CardTemplate } from './card-template.tsx';

import AbbLogoPNG from '../../public/abb-logga.png';
import AbbLogoSVG from '../../public/abb-logga.svg';

export const InfoSign: React.FC = ({}) => {
	return (
		<CardTemplate>
			<div className="grid-span-7">
				<img src={AbbLogoPNG} alt="ABB Logo" />
				<img src={AbbLogoSVG} alt="ABB Logo" />
				<div className="text-xl  font-bold">ABB</div>
			</div>
		</CardTemplate>
	);
};
