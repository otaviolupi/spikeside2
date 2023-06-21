"use client"

import Link from "next/link";

const OrderButton = () => {
    let selectedItem = "";
    return (
        <div className="flex items-end justify-end font-bold py-6">
            <a className="w-[299px] bg-[#23313C] text-white text-[14px]">Comprar</a>
        </div>
    );
};

export default OrderButton;