"use client"

import LevelBorders from "./LevelBorders";
import CardTitle from "./CardTitle";
import UserName from "./UserName"; 

const PlayerCard = ({item, border, setBorder, level, setLevel, setUserName, title, username}) => {
  return (
    <div className="flex content-center items-center relative max-w-[230px] flex-wrap">
      <img className="frame-card" src="frame.png" />
      <img src={item.largeArt} style={{maxWidth: 230}} />
      <LevelBorders border={border} setBorder={setBorder} level={level} setLevel={setLevel} />
      <UserName  setUserName={setUserName} />
      <CardTitle title={title} />
    </div>
    );
};

export default PlayerCard;