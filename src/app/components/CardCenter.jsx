import React from "react";
import Image from "next/image";

export default function CardCenter(props) {
        return (
                <div className="flex bg-white  ">
                        <div className="block p-4 ">
                                <div className="block pt-4 max-w-full mx-auto">
                                        <h3 className="text-black font-bold">Center Name</h3>
                                        <p className="text-black font-semibold p-1">{props.centerName}</p>
                                </div>
                                <div className="block pt-4 max-w-full mx-auto">
                                        <h3 className="text-black font-bold">Start join</h3>
                                        <p className="text-black font-semibold p-1">{props.joinDate}</p>
                                </div>
                                <button className="bg-purple-600 flex justify-center rounded-md m-3 h-10 w-32">
                                        <span className="block">more details</span>
                                </button>
                        </div>


                        <div className="block pl-4 ">
                                <Image src={props.image} alt="center Image" width={300} height={300} className="h-full" />
                        </div>

                </div>
        )
}