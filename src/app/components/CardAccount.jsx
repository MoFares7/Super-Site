import React from "react";
import Image from "next/image";

export default function CardAccount(props) {
        return (
                <div className="flex bg-white  ">
                        <div className="block p-4 ">
                                <div className="block pt-4 max-w-full mx-auto">
                                        <h3 className="text-black font-bold">User Name</h3>
                                        <p className="text-black font-semibold p-1">{props.userName}</p>
                                </div>
                                <div className="block pt-4 max-w-full mx-auto">
                                        <h3 className="text-black font-bold">Start join</h3>
                                        <p className="text-black font-semibold p-1">{props.joinDate}</p>
                                </div>
                                <button className="bg-red-700  flex justify-center rounded-md m-3 h-10 w-32">
                                        <span className="block pt-1.5">Delete User</span>
                                </button>
                        </div>


                        <div className="block pl-4 pt-2">
                                <Image src={props.image} alt="center Image" width={300} height={100} className="text-justify " />
                        </div>

                </div>
        )
}