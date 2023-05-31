"use client";
import Image from "next/image"
import { useState } from 'react';
import loginImage from '../public/icons/login.svg';

export default function LoginPage() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (event) => {
                event.preventDefault();
                // TODO: handle form submission
        };

        return (
                <div className="h-screen flex flex-col justify-center items-center">
                        <div className="w-full flex md:min-h-screen">
                                <div className="First-section p-4 w-full bg-purple-600 disp flex flex-col justify-center items-center">
                                        <div>
                                                <Image src={loginImage} alt="Login Image" width={300} height={300} className="mx-auto" />

                                        </div>
                                </div>
                                <div className="Second-section p-0 max-h-full w-full bg-whait bg-gray-100 flex flex-col justify-center ">
                                        <form onSubmit={handleSubmit} className=" content-center mx-20 " >
                                                <h1 className="font-bold text-black text-center text-4xl p-2">Hello again</h1>
                                                <p className="text-black text-center font-light text-lg ">you will Lead the dashbord

                                                </p> <p className="text-black text-center font-light text-lg pb-2">
                                                        from here Let's go
                                                </p>
                                                <div className="mb-2">
                                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                                                Email
                                                        </label>
                                                        <input
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                id="email"
                                                                type="email"
                                                                placeholder="Enter your email"
                                                                value={email}
                                                                onChange={(event) => setEmail(event.target.value)}
                                                        />
                                                </div>
                                                <div className="mb-6 pt-5">
                                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                                                Password
                                                        </label>
                                                        <input
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                id="password"
                                                                type="password"
                                                                placeholder="Enter your password"
                                                                value={password}
                                                                onChange={(event) => setPassword(event.target.value)}
                                                        />
                                                </div>
                                                <div className="flex items-center justify-between mx-auto content-center text-center pt-5">
                                                        <button
                                                                className="text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                                type="submit"
                                                        >
                                                                Login
                                                        </button>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
}