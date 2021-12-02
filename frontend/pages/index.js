import "tailwindcss/tailwind.css";

import { Header } from "../modules/header.tsx";
import { Billboard } from "../modules/billboard.tsx";

export default function Home() {
  return (
    <div className="h-screen flex justify-center content-center bg-gray-600">
      <div className="w-320 bg-gray-500 my-auto mx-4">
        <Header />
        <Billboard />
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
