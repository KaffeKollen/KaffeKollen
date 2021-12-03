import React from 'react';

export const Header: React.FC = ({}) => {
	return (
		<div className="pl-2 py-6 ">
			<div className="md:text-5xl text-3xl mb-1 font-bold">Kaffekollen</div>
			<div className="md:text-xl text-md italic font-bold">Statistik om kaffedrickande på spetsen</div>
		</div>
	);
};
