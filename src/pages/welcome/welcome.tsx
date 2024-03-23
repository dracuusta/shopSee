
import React from 'react';
import './WelcomePage.css'; // Assuming you have a CSS file for styles
import bannerImage from './../../images/shoppingHeader.jpeg'
import { Link } from 'react-router-dom';
const WelcomePage: React.FC = () => {
    return (
        <div className="welcome-container">
            <h1 className='text-6xl p-4 text-slate-600'>Welcome to ShopiSee!</h1>
            <p>Your one-stop shop for everything you love.</p>
            <p>Browse our wide range of products, find your favorites, and discover new ones!</p>
            <div className='flex'>
           <img className='h-2/4 w-2/4 mt-8 ml-80 flex items-center self-center' src={bannerImage}></img>
            <div className="buttons-container gap-4 ml-10 flex-col flex justify-center">
                <Link to="/shop"><button className="shop-now-button h-20 w-60">Shop Now</button></Link>
            </div>
            </div>
        </div>
    );
};

export default WelcomePage;