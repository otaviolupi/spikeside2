"use client"

import PlayerTitle from "./components/PlayerTitle";
import PlayerCard from "./components/PlayerCard";
import SliderCard from "./components/SliderCard";
import TitlesSelect from "./components/TitlesSelect";
import OrderButton from "./components/OrderButton";
import { useState, useEffect } from 'react';

export default function Page() {
    const [item, setItem] = useState({});
    const [title, setTitle] = useState("");
    const [border, setBorder] = useState({});
    const [level, setLevel] = useState(0);
    const [username, setUserName] = useState("");
    const [box, setBox] = useState(false);

    return (
        <div 
        className="flex bg-cover h-[100vh] w-[100%] overflow-hidden justify-center items-center flex-wrap flex-col bg-bg-image" 
        style={{
            backgroundImage: `url('/bg.jpg')`,
        }}>
            <PlayerTitle item={item} />
            <PlayerCard item={item} border={border} setBorder={setBorder} level={level} setLevel={setLevel} username={username} setUserName={setUserName} title={title}></PlayerCard>
            <div className="flex justify-between w-[85%] my-0 mx-auto">
                <TitlesSelect title={title} setTitle={setTitle} box={box} setBox={setBox} />
                <OrderButton />
            </div>
            <SliderCard setItem={setItem}  />
        </div>
    )
}



