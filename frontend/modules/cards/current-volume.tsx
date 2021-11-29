import React from 'react';
import { CardTemplate } from './card-template.tsx';

export const CurrentVolume: React.FC = ({}) => {
	return (
		<CardTemplate>
			<div className="h-row1 w-box1w">
				<div className="text-3xl font-bold text-gray-900">68% kvar</div>
			</div>
		</CardTemplate>
	);
};
