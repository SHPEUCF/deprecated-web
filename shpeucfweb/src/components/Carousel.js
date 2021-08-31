import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import TablingShpe from '../assets/tablingShpe.JPG';
import wobBoard from '../assets/wobBoard.JPG';
import wobJaz from '../assets/Optimized-wobJaz.JPG';
import wob2020 from '../assets/Optimized-wob2020.JPG';
import wobBoard2020 from '../assets/Optimized-wobBoard2020.JPG';
import bbq from '../assets/Optimized-bbq2020.png';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
    const images = [wobBoard, wobJaz, wob2020, bbq, wobBoard2020, TablingShpe];
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div style={{flexDirection: 'column', width: '50vh', display: 'flex', justifyContent: 'center', alignContent: 'center', marginLeft: '1vh'}}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((url, index) => (
                <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <img  src={url} alt='oh no' style={{height: '40vh', width: '50vh'}} />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                }
            />
        </div>
    );
}

export default Carousel;