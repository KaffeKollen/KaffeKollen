import { data } from 'autoprefixer';
import React from 'react';
import { CardTemplate } from './card-template.tsx';
import { AiFillTrophy } from "react-icons/ai";

const tableBox = ({children}) => {
    return (
        <div className="w-full h-12 rounded-4xl my-4 bg-gray-400">children</div>
    )
}




export const Leaderboard: React.FC = ({}) =>  {
		const data =['Samuel Staflin Samuel StaflinSamuel StaflinSamuel Staflin', 'Samuel Staflin', 'Samuel Staflin', 'Samuel Staflin', 'Samuel Staflin', 'Samuel Staflin', 'Samuel Staflin', 'Samuel Staflin', 'Samuel Staflin', 'Samuel Staflin'];
		const listItems = data.map((d, index) => 
				<div className="w-full h-6 bg-f-100 py-1 text-xs text-gray-900 font-bold text-center grid grid-cols-9">
					<div >{index+1}</div>
					<div className="text-gray-800 font-medium text-left max-h-6 overflow-hidden col-span-6">{d}</div>
					<div className="col-span-2">12 st</div>
				</div>
			);
	
		return (
			<CardTemplate>
				<div className="text-xl text-center font-bold text-gray-900">KAFFELIGAN</div>
				<div className="h-32 grid grid-cols-3 gap-4 my-4 max-w-xs mx-auto text-center">
					<div className="h-full w-full relative">
						<div className="absolute h-24 w-full inset-x-0 bottom-0 bg-red-200 rounded-lg drop-shadow-2xl filter flex flex-col">
							<div className="h-8 mx-auto my-1"><AiFillTrophy color="#C0C0C0" size='2em'/></div>
							<div className="font-bold text-xs max-h-8 overflow-hidden">Samuel Staflin</div>
							<div className="font-medium text-xs max-h-8">12 st</div>
						</div>
					</div>
					<div className="h-full w-full relative">
						<div className="absolute h-24 w-full inset-x-0 top-0 h-24 bg-red-400 rounded-lg drop-shadow-2xl filter flex flex-col">
							<div className="h-8 mx-auto my-1"><AiFillTrophy color="#FFD700" size='2em'/></div>
							<div className="font-bold text-xs max-h-8 overflow-hidden">Samuel Staflin</div>
							<div className="font-medium text-xs max-h-8">25 st</div>
						</div>
					</div>
					<div className="h-full w-full relative">
						<div className="absolute h-24 w-full inset-x-0 bottom-0  bg-red-200 rounded-lg drop-shadow-2xl filter flex flex-col">
							<div className="h-8 mx-auto my-1"><AiFillTrophy color="#CD7F32" size='2em'/></div>
							<div className="font-bold text-xs max-h-8 overflow-hidden">Samuel Staflin</div>
							<div className="font-medium text-xs max-h-8">5 st</div>
						</div>
					</div>
				</div>

				<div className="mx-auto w-4/5 border-t-2 max-w-sm border-gray-100"/>

				<div className="flex flex-col mt-2 px-1 space-y-1 max-w-md mx-auto">
					{listItems}
				</div>		
			</CardTemplate>
		);  
}


