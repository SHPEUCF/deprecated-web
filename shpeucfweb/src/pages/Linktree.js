import React, { useEffect } from 'react';

function Linktree() {
    // every time the page is loaded useEffect will redirect user to url linked
    useEffect(() => {
        window.location.href = "https://linktr.ee/shpeucf";
    }, []);
    
    return(null);
}

export default Linktree;