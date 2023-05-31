import React from "react";
import SearchFiled from "../components/SearchFiled";
import Image from "next/image"
import study from "../public/images/study zone.jpg";
import Footer from "../components/Footer";

export default function CenterVerficeation() {
        return (
                <div className="bg-gray-100 pt-3">
                        <div className="xl:px-52 pt-5 sm: '8px'">
                                <SearchFiled />
                        </div>

                        <div className="flex justify-center items-center  rounded-m text-center h-screen px-10">
                                <div className="h-30vh rounded-m w-1/2 bg-white">
                                        <div className="w-full ">
                                                <Image src={study} alt="Login Image" width="100%" height="100%" className="mx-auto max-h-full  " />
                                        </div>

                                        <div className="flex flex-col text-black h-full px-10">
                                                <div className="flex p-4 justify-between">
                                                        <h3 className="font-bold">Center Name</h3>
                                                        <p className="text-gray-700 pl-10">Study Zone</p>
                                                </div>
                                                <div className="flex p-4 justify-between">
                                                        <h3 className="font-bold">Location</h3>
                                                        <p className="text-gray-700 pl-10">Damascus, Baramkeh</p>
                                                </div>
                                                <div className="flex p-4 justify-between">
                                                        <h3 className="font-bold">Email</h3>
                                                        <p className="text-gray-700 pl-10">StudyZone@gmail.com</p>
                                                </div>
                                                <div className="flex p-4 justify-between">
                                                        <h3 className="font-bold">Phone Number</h3>
                                                        <p className="text-gray-700 pl-10">+9632546548</p>
                                                </div>
                                                <div className="flex p-4 justify-between">
                                                        <h3 className="font-bold">Show Document</h3>
                                                        <p className="text-gray-700 pl-10">fsdsdf</p>
                                                </div>
                                        </div>
                                        <div className="flex justify-around ">
                                                <button className="bg-purple-600 flex justify-center rounded-md m-3 h-10 w-32">
                                                        <span className="block pt-1.5">Accept</span>
                                                </button>
                                                <button className="bg-red-600 flex justify-center rounded-md m-3 h-10 w-32">
                                                        <span className="block pt-1.5">Reject</span>
                                                </button>
                                        </div>

                                </div>
                        </div>
                        <Footer />
                </div>
        )
}