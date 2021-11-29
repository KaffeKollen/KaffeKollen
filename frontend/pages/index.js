import 'tailwindcss/tailwind.css';

import { Header } from '../modules/header.tsx';
import { Billboard } from '../modules/billboard.tsx';

export default function Home() {
	return (
		<div className="h-screen bg-gradient-to-b from-white to-blue-100 flex justify-center content-center ">
			<div className="w-320  my-auto mx-4">
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
