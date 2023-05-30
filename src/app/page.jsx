import React from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePages';
import NavbarCenter from './components/NavbarCenter';
import Footer from './components/Footer';
import CentersPage from './pages/CentersPage';


export default function Home() {
    return (
        <div className='Main-div'>
            <NavbarCenter />
            <CentersPage />
           
        </div>
    );
}