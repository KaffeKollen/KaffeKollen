import React from "react";

import { CoffeChart } from "./cards/coffe-chart";
import { CurrentVolume } from "./cards/current-volume";
import { InfoSign } from "./cards/info-sign";
import { Leaderboard } from "./cards/leaderboard";

export const Billboard: React.FC = ({}) => {
  return (
    <div className="grid md:grid-cols-10 md:grid-rows-5 gap-6 grid-cols-2">
      <div className="md:col-span-4 col-span-1 md:row-span-2">
        <CurrentVolume />
      </div>
      <div className="md:col-span-3 col-span-1 md:row-span-2">
        <InfoSign />
      </div>
      <div className="md:col-span-7 col-span-2 md:row-span-3 md:order-last">
        <CoffeChart />
      </div>
      <div className="md:col-span-3 col-span-2 md:row-span-5">
        <Leaderboard />
      </div>
    </div>
  );
};
