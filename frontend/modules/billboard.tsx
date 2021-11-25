import React from 'react';

import { CoffeChart } from './cards/coffe-chart.tsx';
import { CurrentVolume } from './cards/current-volume.tsx';
import { InfoSign } from './cards/info-sign.tsx';
import { Leaderboard } from './cards/leaderboard.tsx';

export const Billboard: React.FC = ({}) => {
	return (
		<div className="h-200 flex">
			<div className="flex-wrap">
				<div className="flex">
					<CurrentVolume />
					<InfoSign />
				</div>
				<CoffeChart />
			</div>
			<Leaderboard />
		</div>
	);
};
