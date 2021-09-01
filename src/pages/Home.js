import React, { } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import henaac from '../assets/henaac.jpg';
import shpeConference from '../assets/shpeConference.png';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Notification from '../components/Notifications';
import './Font.css';

function Home() {
    // Todo: have it so that we get this list from firebase. remove static data
    const conferences = [{
        name: 'Henaac Conference 2021',
        location: 'Orlando, Florida',
        date: 'October, 11 - 22, 2021',
        info: 'The nation’s most prestigious stage for honoring excellence, building and reinforcing networks, the HENAAC Conference is the place where top executives, innovative professionals, and the brightest STEM students convene. As a non‐membership organization, GMiS draws thousands of diverse high caliber STEM students, from a broad array of institutions, including top‐ranked U.S. News & World Report institutions, Research I Institutions, Minority‐Serving Institutions, and 2‐year colleges.',
        imgUrl: henaac,
        url: 'https://www.gmisconference.org/'
    }, 
    {
        name: 'SHPE National Convention 2021',
        location: 'Orlando, Florida',
        date: 'November, 10 - 14, 2021',
        info: 'Each year, the SHPE Convention attracts over 5,000 engineering professionals, students and corporate representatives. The convention is an opportunity for engineering companies and corporations to recruit top talent from SHPE membership. It also provides educational, technical and career opportunities for professional and student engineers. SHPE UCF will be hosting workshops throughout the fall semester to prepare you for the SHPE National Convention. Please stay tuned to our website, our Facebook page, and our Twitter page for the specific date and location of these workshops.',
        imgUrl: shpeConference,
        url: 'https://www.shpe.org/events/nc2021'
    }];

    return (
        <div className='font' style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{display:'flex', margin: '1vh', justifyContent: 'center', alignContent: 'center', marginTop: '8vh'}}>
                <div className="container" style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h2 style={{margin: '0'}}>Welcome to the SHPE UCF Website</h2>
                    <p style={{marginTop: '1vh', maxWidth: '90vh'}}>
                        Welcome to Society of Hispanic Professional Engineers UCF Chapter, and the beginning of your success as a future leader. Here you will find information about our chapter, SHPE National Conference, and our future events. Please  browse our site and if you have any questions, don’t hesitate on contacting us via our Contact Us page. We are here for you!
                    </p>
                    <h2 style={{margin: '0'}}>Why join <span  className="ShpeKnighs">SHPE UCF?</span></h2>
                    <p style={{marginTop: '1vh', maxWidth: '90vh'}}>
                        Simply because of all the invaluable knowledge, great friends, and unforgettable memories that you will have!
                    </p>
                    <h2 style={{margin: '0'}}>What we offer</h2>
                    <p style={{marginTop: '1vh', maxWidth: '90vh'}}>
                        The opportunity to prepare yourself as a professional that no classroom setting does. You will have access to everything from professional and leadership workshops, scholarships, internships, networking opportunities with fellow engineering students from the professional chapter and industry leaders at a local and national level!
                    </p>
                </div>
                <Carousel />
            </div>
            

            <div className='calendar' style={{alignSelf: 'center'}}>
                <h2 style={{textAlign: 'center'}}>Calendar</h2>
                <iframe src="https://calendar.google.com/calendar/embed?src=shpe.ucf.chapter%40gmail.com&ctz=America%2FNew_York" style={{border: '0', width: "95vh", height: "70vh", frameborder: "0", scrolling: "no"}}></iframe>
            </div>
            <div 
                className='Conferences' 
                style={{display: 'flex', flexDirection: 'column', justifyItems:'center', alignItems: 'center', margin: '1vh'}}>
                <h2>Conference</h2>
                <p style={{maxWidth: '110vh'}}>
                    Additionally SHPE offers all of it’s members with various opportunities to meet other engineers and members of the community through some of the conferences we participate in yearly. Want to be a partaker in our society, meet professionals in the field, build your resume, and many other things that will ensure your success in the future?
                    Make sure to come with us to these conferences.
                </p>
                {/* cards displaying conference information goes here */}
                {/* possibly break up this part here and make this into a separate component */}
                <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                    {conferences.map((conference, index) => (
                        <Grid 
                            style={{display: 'flex'}}
                        >
                            <Card 
                                key={index} 
                                style={{maxWidth: '50vh', margin: '1vh', display: 'flex', flexDirection: 'column', justifySelf: 'center', alignSelf: 'center'}} 
                            >
                                <CardHeader
                                    title={conference.name}
                                />
                                <img style={{height: '15vh', width: '60%', alignSelf: 'center'}} src={conference.imgUrl} alt='Oh No'/>
                                <CardContent>
                                    <p>Location: {conference.location}</p>
                                    <p>Date: {conference.date}</p>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                    ))}
                </div>
            </div>
            <Notification isOpen={true} message={'🔥✨ Hola and Welcome to our SHPE UCF Website. ✨🔥'} />
            <Footer />
        </div>
    );
}

export default Home;