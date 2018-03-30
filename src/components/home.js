import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>GitHub Battle: Battle your friends...</h1>
            <Link className='button' to='/battle'>
                Battle
            </Link>
        </div>
    )
}

export default Home;