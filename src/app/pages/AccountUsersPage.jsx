import React from "react";
import profile from './../public/images/profile.png';
import SearchFiled from './../components/SearchFiled';
import CardCenter from "../components/CardCenter";
import Footer from "../components/Footer";
import CardAccount from './../components/CardAccount';

export default function AccountUsersPage() {
        return (
                <div className="p-4 bg-gray-100">
                        <h1 className="text-purple-600 font-bold pl-4 pb-4">The Accounts in Platform</h1>

                        <SearchFiled />

                        <div className="grid grid-cols-3 gap-7 pt-4 pr-20 pl-20 pb-6">

                                <CardAccount
                                        userName={"Fares Dabbas"}
                                        joinDate={"1/6/2023"}
                                        image={profile}
                                />
                                <CardAccount
                                        userName={"Omar Mansour"}
                                        joinDate={"9/3/2023"}
                                        image={profile}
                                />
                                <CardAccount
                                        userName={"Sham sy"}
                                        joinDate={"21/8/2023"}
                                        image={profile}
                                />
                                <CardAccount
                                        userName={"Ahmad hr"}
                                        joinDate={"9/3/2023"}
                                        image={profile}
                                />
                                <CardAccount
                                        userName={"Sara qabbani"}
                                        joinDate={"1/6/2023"}
                                        image={profile}
                                />


                        </div>
                        <Footer />
                </div>
        )
}