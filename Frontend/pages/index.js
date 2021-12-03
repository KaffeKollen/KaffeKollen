import "tailwindcss/tailwind.css";
import './store';

import { Header } from "../modules/header.tsx";
import { Billboard } from "../modules/billboard.tsx";

export default function Home() {
	return (
		<div className="min-h-screen w-screen bg-gray-100 flex justify-center content-center overflow-hidden">
		{/* <div className="min-h-screen w-screen bg-gradient-to-br from-yellow-100 to-red-100 flex justify-center content-center overflow-hidden"> */}
			<div className="w-320 md:max-w-6xl max-w-md min-w-base my-auto p-6">
				<Header />
				<Billboard />
			</div>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
				}

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
