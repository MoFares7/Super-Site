import React from "react";
import search from "./../public/icons/search-w.svg"
import Image from "next/image"
export default function SearchFiled() {
        return (
                <div className="w-70vw bg-white p-4">
                        <div className="flex items-center bg-white p-2 rounded-md">
                                <input
                                        type="text"
                                        placeholder="Search"
                                        className="bg-transparent border-none text-purple-600  py-2 px-3 focus:outline-none w-full"
                                />
                                <div className="bg-purple-600  p-2 rounded-md">
                                        <Image src={search} width={25} height={25} />
                                </div>
                        </div>
                </div>
        )
}