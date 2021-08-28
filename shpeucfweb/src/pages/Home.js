import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Home() {
    // Todo: have it so that we get this list from firebase. remove static data
    const conferences = [{
        name: 'Henaac Conference 2021',
        location: 'Orlando, Florida',
        date: 'September, 25 - 29, 2021',
        info: 'The nation’s most prestigious stage for honoring excellence, building and reinforcing networks, the HENAAC Conference is the place where top executives, innovative professionals, and the brightest STEM students convene. As a non‐membership organization, GMiS draws thousands of diverse high caliber STEM students, from a broad array of institutions, including top‐ranked U.S. News & World Report institutions, Research I Institutions, Minority‐Serving Institutions, and 2‐year colleges.',
        imgUrl: 'https://lh3.googleusercontent.com/proxy/F9Q4NJGTjP9rEakPvu3xhdhc8fu7xECyxsgBLzyH2Nrt4Tet0dOXWm17dstaTPQY4yMwz5BPxF5hPI15MiR_abEVit8OFS_VZffjLT5zrJSnNlN2B7jOAysYDndDjf7EfMoEEk802Zo'
    }, 
    {
        name: 'SHPE National Convention 2021',
        location: 'Orlando, Florida',
        date: 'November, 10 - 14, 2021',
        info: 'Each year, the SHPE Convention attracts over 5,000 engineering professionals, students and corporate representatives. The convention is an opportunity for engineering companies and corporations to recruit top talent from SHPE membership. It also provides educational, technical and career opportunities for professional and student engineers. SHPE UCF will be hosting workshops throughout the fall semester to prepare you for the SHPE National Convention. Please stay tuned to our website, our Facebook page, and our Twitter page for the specific date and location of these workshops.',
        imgUrl: 'https://www.shpe.org/uploads/images/events/NC2021/_1200x630_crop_center-center_82_none/nc2021large.png?mtime=1605302531'
    }
    ];

    const images = [
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/BTS_for_Dispatch_White_Day_Special%2C_27_February_2019_01.jpg',
    'https://cdn.filestackcontent.com/wug3DZ0QPqTKjiZQorWw/convert?cache=true&crop=14%2C1%2C1172%2C586&crop_first=true&quality=90&w=1920',
    'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/10/16/41e9b47c-07af-11eb-afc8-92e0da0ef1c3_image_hires_155550.jpg?itok=ihKswLDq&v=1602834958',
    'https://img.imageimg.net/artist/redvelvet-official/img/profile.jpg?sr.nocv=1',
    'https://upload.wikimedia.org/wikipedia/commons/f/f4/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/191216_Stray_Kids_for_JYP_Entertainment_Audition_%281%29.png',
    ];

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
        <div style={{margin: '1vh', display: 'flex', flexDirection: 'column'}}>
            <div style={{display:'flex', margin: '1vh'}}>
                <div className="container" style={{flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{margin: '0'}}>Welcome to the SHPE UCF Website</h2>
                    <p style={{marginTop: '1vh'}}>
                        Welcome to Society of Hispanic Professional Engineers UCF Chapter, and the beginning of your success as a future leader. Here you will find information about our chapter, SHPE National Conference, and our future events. Please  browse our site and if you have any questions, don’t hesitate on contacting us via our Contact Us page. We are here for you!
                    </p>
                    <h2 style={{margin: '0'}}>Why join <span  className="ShpeKnighs">SHPE UCF?</span></h2>
                    <p style={{marginTop: '1vh'}}>
                        Simply because of all the invaluable knowledge, great friends, and unforgettable memories that you will have!
                    </p>
                    <h2 style={{margin: '0'}}>What we offer</h2>
                    <p style={{marginTop: '1vh'}}>
                        The opportunity to prepare yourself as a professional that no classroom setting does. You will have access to everything from professional and leadership workshops, scholarships, internships, networking opportunities with fellow engineering students from the professional chapter and industry leaders at a local and national level!
                    </p>
                </div>
                
                {/* used material ui implementation of a stepper and modified it  */}
                <div style={{flexDirection: 'column', width: '50vh'}}>
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
                
            </div>
            

            <div className='calendar' style={{alignSelf: 'center'}}>
                <h2 style={{textAlign: 'center'}}>Calendar</h2>
                <iframe src="https://calendar.google.com/calendar/embed?src=shpe.ucf.chapter%40gmail.com&ctz=America%2FNew_York" style={{border: '0', width: "95vh", height: "70vh", frameborder: "0", scrolling: "no"}}></iframe>
            </div>
            <div className='Conferences'>
                <h2>Conference</h2>
                {/* on click card to open model with conference info */}
                <p>
                    Additionally SHPE offers all of it’s members with various opportunities to meet other engineers and members of the community through some of the conferences we participate in yearly. Want to be a partaker in our society, meet professionals in the field, build your resume, and many other things that will ensure your success in the future?
                </p>
                <p>
                    Make sure to come with us to these conferences.
                </p>
                {/* cards displaying conference information goes here */}
                <div style={{display: 'flex'}}>
                    {conferences.map((conference, index) => (
                        <div>
                            <Card key={index} style={{maxWidth: '40vh', margin: '1vh'}} onClick={handleClickOpen}>
                                <CardHeader
                                    title={conference.name}
                                />
                                <CardMedia
                                    src={conference.imgUrl}
                                ></CardMedia>
                                <img style={{height: '40vh', width: '50vh'}} src={conference.imgUrl} alt='Oh No'/>
                                <CardContent>
                                    <h3>{conference.location}</h3>
                                    <h3>{conference.date}</h3>
                                </CardContent>
                            </Card>  
                            <div className='dialog'>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <DialogContent>
                                        <DialogContentText>
                                            {conference.info}
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            

            {/* footer goes here */}
            <h3>footer goes here</h3>
        </div>
    );
}

export default Home;