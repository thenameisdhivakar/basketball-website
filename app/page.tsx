'use client'
import React from 'react';


function MainPage() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full ">
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="/bb.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="relative z-10 text-center text-white p-8 rounded-lg">
                <h1 className="text-7xl font-bold mb-2">CK Academy</h1>
                <h1 className="pr-5 text-2xl pb-5 text-white">
                    Ready to elevate your game? Join us today!
                </h1>
               
               <a href='/api/auth/login?returnTo=/home'
                        className="animate-bounce p-3 px-5 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    >
                        Log in 
                    </a>   
               
                    
            </div>
        </div>
    );
}

export default MainPage;
