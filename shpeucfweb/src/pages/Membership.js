import React, { useEffect } from 'react';
import Notification from '../components/Notifications';

function Membership() {
    useEffect(() => {
        window.location.href = "https://form.jotform.com/70387424224151";
    }, []);

    return (
        <div>
            <Notification message={'Please wait while we redirect to you to our Membership form.'} />
        </div>
    );
}

export default Membership;