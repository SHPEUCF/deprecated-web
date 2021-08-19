import React from 'react';
import Nav from '../components/Nav';

function Home() {

    return (
        <div>
            <Nav />
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
        </div>
    );
}

export default Home;