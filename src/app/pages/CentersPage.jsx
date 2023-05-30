import React from "react";
import search from "./../public/icons/search-w.svg"
import Image from "next/image"
import Footer from "../components/Footer";
import SearchFiled from './../components/SearchFiled';
export default function CentersPage() {
        return (
                <div className="p-4 bg-gray-50">
                        <h1 className="text-purple-600 font-bold pb-4">The Centers in Platform</h1>

                        <SearchFiled />
                        
                        
                </div>
        )
}