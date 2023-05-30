import React from "react";
import Image from "next/image";

export default function CardHome(props) {
        return (
                <div className="bg-gray-100 h-30vh rounded-md ">
                        <div className="h-20">
                                <Image src={props.image} alt="center Image" width={80} height={70} className="mx-auto p-3" />
                        </div>

                        <h4 className="text-purple-600 text-center font-bold p-1">{props.name}</h4>
                        <p className="text-gray-400 text-center font-light p-1">
                                {props.descreption}
                        </p>
                </div>
        )
}