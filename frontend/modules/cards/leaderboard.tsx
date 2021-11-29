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
		const data =['Person1', 'Person2', 'Person3', 'Person4', 'Person5', 'Person6', 'Person7', 'Person8'];
		const listItems = data.map((d, index) => 
			<div className='pl-4'>
				<div className="w-full h-6 text-lg font-bold my-4 " key={d}>{index+1}. {d}</div>
				<div className=" h-0.5 w-full rounded-3xl bg-gray-200"></div> 
			</div>
			);
		console.log(listItems)
	
		return (
			<CardTemplate>

				<div className="w-table1w h-table1h">

					<div className="text-2xl font-bold ml-2 mb-6 text-gray-900">Kaffeligan</div>
					<div className="flex flex-row">
						
						<div className="w-10">
							<div className="my-4"><AiFillTrophy color="#ffff00" size='2em'/></div>
							<div className="my-4"><AiFillTrophy color="#f0f0f0" size='2em'/></div>
							<div className="my-4"><AiFillTrophy color="#aaaa00" size='2em'/></div>
						</div>
						<div className="w-full">

							{listItems}
						</div>
					
					</div>		
				</div>
			</CardTemplate>
		);  
}


