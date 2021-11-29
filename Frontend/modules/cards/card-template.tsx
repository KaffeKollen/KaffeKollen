import React from 'react';

export const CardTemplate: React.FC = ({children}) => {
	return (
		<div className="m-6 bg-gradient-to-b from-white to-white drop-shadow-3xl filter rounded-4xl p-8" >
            {children}
        </div>
	);
};
