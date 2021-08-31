import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

function Model({isVisible, toggle, image, description, url}) {

    return(
        <div>
            <Dialog
                open={isVisible}
                onClose={toggle}
            >
                <DialogContent>
                    <img src={image} alt={'oh no'}/>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color='primary' onClick={() => window.open(url, '_blank')}>
                        Learn More
                    </Button>
                    <Button onClick={toggle} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Model;