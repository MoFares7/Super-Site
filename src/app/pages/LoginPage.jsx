"use client";
import Image from "next/image"
import { useState } from 'react';
import loginImage from '../public/images/login.png';

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
                                                <h3 className="text-center">Welcome in Management</h3>
                                        </div>
                                </div>
                                <div className="Second-section p-4 max-h-full w-full bg-whait bg-gray-50 flex flex-col justify-center items-center">
                                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                                <h1 className="font-bold text-black text-center text-xl p-2">Hello again</h1>
                                                <p className="text-black text-center font-thin text-xs ">you will Lead the dashbord
                                                        from here Let's go
                                                </p> <p className="text-black text-center font-thin text-xs pb-2">
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
                                                <div className="mb-6">
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
                                                <div className="flex items-center justify-between">
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