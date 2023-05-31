import React from "react";
import SearchFiled from './../components/SearchFiled';
import Image from "next/image";
import sanad from "../public/images/sanad.png";
import sh from "../public/images/sh.jpg";
import study from "../public/images/study zone.jpg";
import CardCenter from './../components/CardCenter';
import Footer from './../components/Footer';

export default function CentersPage() {
        return (
                <div className="p-4 bg-gray-100">
                        <h1 className="text-purple-600 font-bold pl-4 pb-4">The Centers in Platform</h1>

                        <SearchFiled />
                        <div className="grid grid-cols-3 gap-7 pt-4 pr-20 pl-20 pb-6">

                                <CardCenter
                                        centerName={"Sanad Team"}
                                        joinDate={"1/6/2023"}
                                        image={sanad}
                                />
                                <CardCenter
                                        centerName={"Shuhup Team"}
                                        joinDate={"9/3/2023"}
                                        image={sh}
                                />
                                <CardCenter
                                        centerName={"Study Zone Team"}
                                        joinDate={"21/8/2023"}
                                        image={study}
                                />
                                <CardCenter
                                        centerName={"Shuhup Team"}
                                        joinDate={"9/3/2023"}
                                        image={sh}
                                />
                                <CardCenter
                                        centerName={"Sanad Team"}
                                        joinDate={"1/6/2023"}
                                        image={sanad}
                                />


                        </div>
                        <Footer />
                </div>
        )
}