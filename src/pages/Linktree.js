import React, { useEffect } from 'react';
import Notification from '../components/Notifications';

function Linktree() {
    // every time the page is loaded useEffect will redirect user to url linked
    useEffect(() => {
        <Notification />
        window.location.href = "https://linktr.ee/shpeucf";
    }, []);
    
    return(
        <div>
            <Notification message={'Please wait while we redirect to you to our Linktree.'} />
        </div>
    );
}

export default Linktree;