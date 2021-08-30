import React, {  } from 'react';

function Membership() {
    // useEffect(() => {
    //     window.location.href = "https://linktr.ee/shpeucf";
    // }, []);
    return (
        <div>
            <h1>membership page</h1>
            <div className="form">
                <button onClick={() => {window.location.href = "https://form.jotform.com/jsform/70387424224151"}}>Jotform</button>
            </div>
        </div>
    );
}

export default Membership;