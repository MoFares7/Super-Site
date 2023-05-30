import React from "react";
import Image from "next/image";
import world from "../public/images/white-world.png";
export default function Footer() {
        return (


                <footer className="bg-purple-600 mx-auto max-h-xl py-2">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col md:flex-row justify-between">
                                        <div className="md:mr-14">
                                                <div className="text-xl font-bold text-white mb-4">
                                                        <Image src={world} alt="center Image" width={300} height={300} className="mx-auto pt-3" />
                                                </div>
                                        </div>
                                        <div className="md:ml-14">
                                                <div className=" text-white mb-10 font-bold text-4xl text-center pt-10">What makes us different from others</div>
                                                <ul className="text-gray-50 font-bold text-lg text-center">
                                                        <li><a href="/">Speed and efficiency</a></li>
                                                        <li><a href="/about">Credibility and reliability</a></li>
                                                        <li><a href="/services">Accuracy and action</a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </footer>
        )
}