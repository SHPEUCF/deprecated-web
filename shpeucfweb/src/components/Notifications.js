import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Notification({isOpen, message}) {
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason == 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return(
        <div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <MuiAlert
                    onClose={handleClose} 
                    severity="info"
                    variant="filled"
                    elevation={6}
                    color='warning'
                 >{message}</MuiAlert>
            </Snackbar>
        </div>
    );
}

export default Notification;