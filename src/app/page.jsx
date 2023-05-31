"use client";
import React from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePages';
import NavbarCenter from './components/NavbarCenter';
import Footer from './components/Footer';
import CentersPage from './pages/CentersPage';
import AccountUsersPage from './pages/AccountUsersPage';
import { Route, Routes, Router, BrowserRouter, Link } from "react-router-dom";
import CenterVerficeation from './pages/CenterVerfication';

export default function Home() {
    return (
        <div className='Main-div'>
            <NavbarCenter />
            <CenterVerficeation />
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Centers" element={<CentersPage />} />
                    <Route path="/Accounts" element={<AccountUsersPage />} />
                    <Route path="/Login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter> */}
          
            

        </div>
    );
}