import React from "react";
import Image from "next/image"
import study from "../public/images/study zone.jpg";
import Footer from "../components/Footer";

export default function DetailsCenter() {
        return (

                <div className="bg-gray-100 pt-3">

                        <div className="flex justify-center items-center  rounded-m text-center h-screen px-10">
                                <div className=" h-30vh rounded-m w-1/2 bg-white">
                                        <div className="flex ">

                                                <div className="flex flex-col text-black h-full px-4 ">
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
                                                                <h3 className="font-bold">Start join</h3>
                                                                <p className="text-gray-700 pl-10">12/4/2023</p>
                                                        </div>
                                                </div>
                                                <div className="text-right lg:pl-40 sm:0">
                                                        <Image src={study} className="max-w-full h-auto mx-auto" />
                                                </div>

                                        </div>
                                        <div className="flex justify-center ">
                                                <button className="bg-red-600 flex justify-center rounded-md m-3 h-10 w-48 text-center">
                                                        <span className="block pt-1.5">Delete Center</span>
                                                </button>
                                        </div>
                                </div>



                        </div>
                        <Footer />
                </div>



        )
}