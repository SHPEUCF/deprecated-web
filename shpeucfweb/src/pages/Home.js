import React, {  } from 'react';
import About from './About';
import Membership from './Membership';
import Linktree from './Linktree';

function Home() {

    return (
        <div>
            <h1>Home page</h1>
            <div className="container">
                <p>welcome to the shpe ucf website</p>

                <p>why join shpe ucf</p>

                <p>what we offer</p>

                {/* <img alt="shpe image" /> */}

                <p>calendar</p>

                <p>conferences</p>
            </div>
            <div className="footer"> 
                <h3>footer</h3>
            </div>

            <About />
            <Membership />
            <Linktree />
        </div>
    );
}

export default Home;