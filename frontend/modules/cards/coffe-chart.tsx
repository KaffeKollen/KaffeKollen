import React from 'react';
import { CardTemplate } from './card-template.tsx';

export const CoffeChart: React.FC = ({}) => {
	return (
		<CardTemplate >
			<div className="h-chart1h w-chart1w  font-bold">
				<div className="text-xl ">Kaffe tabell</div>
			</div>
		</CardTemplate>
	);
};
