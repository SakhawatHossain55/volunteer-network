import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Events = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    console.log('loggedInUser :', loggedInUser);
    return (
        <div>
            <Header />
            <h1>Hello, {loggedInUser.userName}!!  This is your Events </h1>
        </div>
    );
};

export default Events;