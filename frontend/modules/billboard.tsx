import React from 'react';

import { CoffeChart } from './cards/coffe-chart.tsx';
import { CurrentVolume } from './cards/current-volume.tsx';
import { InfoSign } from './cards/info-sign.tsx';
import { Leaderboard } from './cards/leaderboard.tsx';

export const Billboard: React.FC = ({}) => {
	return (
		<div className="grid md:grid-cols-10 grid-rows-5 gap-6 grid-cols-7">
			<div className="md:col-span-4 col-span-4 row-span-2"><CurrentVolume /></div>
			<div className="md:col-span-3 col-span-3 row-span-2"><InfoSign /></div>
			<div className="md:col-span-7 col-span-7 row-span-3 md:order-last"><CoffeChart /></div>
			<div className="md:col-span-3 col-span-7 row-span-5"><Leaderboard /></div>
		</div>
	);
};
