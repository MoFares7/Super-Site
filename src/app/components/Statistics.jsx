import React from "react";

export default function Statistics(props) {
        return (
                <div className="bg-white         h-30vh rounded-md  p-10 text-center mx-auto">
                        <h1 className="font-bold text-center text-lg text-gray-950 p-3">{props.number}</h1>
                        <p className="font-bold text-center text-xs text-purple-600 ">{props.name}</p>
                </div>
        )
}