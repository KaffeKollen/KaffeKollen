import { data } from "autoprefixer";
import React from "react";
import { CardTemplate } from "./card-template";
import { AiFillTrophy } from "react-icons/ai";

const weekData = global.store.leaderboards.week;

const tableBox = ({ children }) => {
  return (
    <div className="w-full h-12 rounded-4xl my-4 bg-gray-400">children</div>
  );
};

const Podium = (props) => {
  const pColor = ["#FFD700", "#C0C0C0", "#CD7F32"];
  const place = props.place;

  const CardCard = ({ children }) => {
    if (place == 0) {
      return (
        <div className="absolute h-24 w-full inset-x-0 top-0 h-24 bg-red-400 rounded-lg drop-shadow-2xl filter flex flex-col">
          {children}
        </div>
      );
    } else {
      return (
        <div className="absolute h-24 w-full inset-x-0 bottom-0 bg-red-200 rounded-lg drop-shadow-2xl filter flex flex-col">
          {children}
        </div>
      );
    }
  };

  return (
    <div className="h-full w-full relative">
      <CardCard>
        <div className="h-8 mx-auto my-1">
          <AiFillTrophy color={pColor[place]} size="2em" />
        </div>
        <div className="font-bold text-xs max-h-8 overflow-hidden">
          {weekData[place].name}
        </div>
        <div className="font-medium text-xs max-h-8">
          {weekData[place].score}
        </div>
      </CardCard>
    </div>
  );
};

const ItemList = () => {
  var items = [];

  weekData.forEach(function (d, index) {
    if (index < 12) {
      items.push(
        <div className="w-full h-6 bg-f-100 py-1 text-xs text-gray-900 font-bold text-center grid grid-cols-9">
          <div>{index + 1}</div>
          <div className="text-gray-800 font-medium text-left max-h-6 overflow-hidden col-span-6">
            {d.name}
          </div>
          <div className="col-span-2">{d.score}</div>
        </div>
      );
    }
  });

  return (
    <div className="flex flex-col mt-3 h-64 md:mb-8 mb-20 px-1 space-y-1 max-w-md mx-auto">
      {items}
    </div>
  );
};

export const Leaderboard: React.FC = ({}) => {
  return (
    <CardTemplate>
      <div className="text-xl text-center font-bold text-gray-900">
        KAFFELIGAN
      </div>
      <div className="h-32 grid grid-cols-3 gap-4 my-5 max-w-xs mx-auto text-center">
        <Podium place={1} />
        <Podium place={0} />
        <Podium place={2} />
      </div>
      <div className="mx-auto w-4/5 border-t-2 max-w-sm border-gray-100" />
      <ItemList />
    </CardTemplate>
  );
};
