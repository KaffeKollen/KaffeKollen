import React from 'react';

export const CardTemplate: React.FC = ({children}) => {
	return (
		<div className="h-full w-full bg-gradient-to-b from-white to-white drop-shadow-3xl filter rounded-4xl p-4" >
            {children}
        </div>
	);
};
