import React, { useEffect } from 'react';
import Header from '../Header/Header';

const Events = () => {
    useEffect(() => {
        fetch('http://localhost:5000/allDonation')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [])
    return (
        <div>
            <Header />
            <h1>Hello, !!  This is your Events </h1>
        </div>
    );
};

export default Events;