"use client";
import React from "react"

import NavbarCenter from './../components/NavbarCenter';
import center from "../public/icons/center.svg";
import users from "../public/icons/users.svg";
import volunteer from "../public/icons/request.svg";
import CardHome from './../components/CardHome';
import Statistics from "./../components/Statistics";
import { Link } from "react-router-dom";
import Footer from "./../components/Footer";

export default function HomePage() {
        return (
                <div className="bg-gray-100">

                        <div className="p-4">
                                <h1 className="text-purple-600 font-bold">Our Jops</h1>

                                <div className="grid grid-cols-3 gap-4 pt-4">

                                        <Link to={'/Centers'}>
                                                <CardHome
                                                        image={center}
                                                        name={"Show avilable Center"}
                                                        descreption={"Now you will show all Center in Plaform"}
                                                />
                                        </Link>
                                        <Link to={'/Accounts'}>
                                        <CardHome
                                                image={users}
                                                name={"Show avilable User Account"}
                                                descreption={" Now you will show all Users Account in platform"}
                                                />
                                        </Link>
                                        <Link to={'/Accounts'}>
                                        <CardHome
                                                image={volunteer}
                                                name={"Show avilable Request join Centers"}
                                                descreption={" Now you will show all Centers need join in platform"}
                                        />
                                        </Link>

                                </div>

                                <h1 className="text-purple-600 font-bold pt-4">Statistics</h1>
                                <div className="flex p-3">
                                        <Statistics
                                                number={"7"}
                                                name={"Number of Center"}
                                        />
                                        <Statistics
                                                number={"120000"}
                                                name={"Number of Account User"}
                                        />
                                        <Statistics
                                                number={"3"}
                                                name={"Number of Request Center"}
                                        />
                                </div>

                        </div>
                        <Footer />
                </div>

        );
}
