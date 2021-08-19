import React from 'react';
import Nav from '../components/Nav';

function About() {
    return (
        <div>
            <Nav />
            <h1>About page</h1>
            <div className="description">
               <h2>shpe founding</h2>
            </div>
            <div className="boardList">
                <h2>board list</h2>
            </div>
            
        </div>
    );
}

export default About;