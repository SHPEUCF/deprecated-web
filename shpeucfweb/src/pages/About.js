import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Footer from '../components/Footer';
import SideList from '../components/SideList';
import BoardPic from '../assets/Optimized-board.jpg';
import JazM from '../assets/board/JazM.jpeg';
import FredS from '../assets/board/FredS.png';
import AlexD from '../assets/board/AlexD.jpeg';
import KevinA from '../assets/board/KevinA.jpg';
import MagdaS from '../assets/board/MagdaS.jpg';
import NickL from '../assets/board/NickL.jpg';
import CamD from '../assets/board/CamD.jpg';
import HernanH from '../assets/board/HernanH.jpg';
import BryceV from '../assets/board/BryceV.png'
import StephC from '../assets/board/StephC.jpeg';

// const ProfileCard = (person) => {
//     return (
//         <Card style={{margin: '1vh', width: '30vh'}}>
//             <Typography variant='h6' style={{fontWeight: 'bold'}}>
//                 {person.name}
//             </Typography>
//             <Typography>
//                 {person.role}
//             </Typography>
//             <CardMedia
//                 style={{ height: '15vh'}}
//                 image="https://www.pbs.org/wnet/nature/files/2020/06/Nature-Thumbnails-Template-2020AS-1280x720.png"
//             />
//         </Card>
//     )
// }

const ProfileCard = (person) => {
    return (
        <Grid item>
            <Card>
                <CardMedia
                    style={{ height: "30vh", width: "23vh" }}
                    image={person.image}
                />
                <Typography variant="caption">
                    {person.name}
                </Typography>
                <Typography variant="body2">
                    {person.role}
                </Typography>
            </Card>
        </Grid>
    )
}

var people = [
    { name: 'Jazmine Manriquez', role: 'President', image: JazM },
    { name: 'Frederick Santiago', role: 'External Vice President', image: FredS },
    { name: 'Gabriela Medina', role: 'Internal Vice President' },
    { name: 'Santiago Valdez', role: 'Treasurer' },
    { name: 'Alex Diener', role: 'Secretary', image: AlexD },
    { name: 'Kevin Abreu', role: 'Events Director', image: KevinA },
    { name: 'Juan Ariza', role: 'Membership Director' },
    { name: 'Magdalena Sobrino-Almanzar', role: 'Marketing Director', image: MagdaS },
    { name: 'Nick Libreros', role: 'MentorSHPE Director', image: NickL },
    { name: 'Elena Torres', role: 'Outreach Director' },
    { name: 'Camille Dumit', role: 'SHPEtinas Director', image: CamD },
    { name: 'Hernan Hernandez-Garcia', role: 'Projects Director', image: HernanH },
    { name: 'Nathalia Davila', role: 'Development Director' },
    { name: 'Bryce Villanueva', role: 'Tech Director', image: BryceV },
    { name: 'Sofia Montana', role: 'Tech Director' },
    { name: 'Alexander Del Castillo', role: 'SHPE Jr Director' },
    { name: 'Stephanie Colton', role: 'SHPE Jr Co-Director', image: StephC },
]

function About() {
    return (
        <div style={{ marginTop: '8vh' }}>
            <div
                className="description"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1vh' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '1vh' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '3vh' }}>About</h1>
                        <img style={{ float: 'left', margin: '1vh' }} src={BoardPic} alt='oh no' />
                        <p style={{ fontSize: '1.7vh' }}>
                            The Society of Hispanic Professional Engineers(SHPE) was founded in Los Angeles, California, in 1974 by a group of engineers employed by the city of Los Angeles.Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community.

                            The concept of Networking was the key basis
                            for the organization.SHPE quickly established two student chapters to begin the network that would grow to encompass the nation as well as reach countries outside the United States.

                            For our members, we offer workshops and discussion panels with nearby companies on issues such as how to write a winning resume, interviewing tips and techniques and what companies expect out of an entry - level engineer.

                            Today, SHPE enjoys a strong but independent network of professional and student chapters throughout the nation.

                            Specifically, SHPE UCF has participated in several kinds of events from monitoring student competition to attending professional conferences and hosting speakers at our meetings.

                            Among our duties is to serve as role models to the community.With this in mind, we conduct school visits to high schools through our SHPE Junior Program to present what technical professions are and how they affect our everyday life.We also monitor student competitions
                            for SECME, a statewide program that enables younger student with hands - on projects with basic math and science applications.

                            The SHPE UCF chapter also participates in the national and regional conferences held throughout the year.These tools together allow our members to be professionally prepared
                            for their upcoming careers.

                            Leadership is a key element
                            for SHPE and we encourage all members to become leaders within our organization.It’ s not only a resume booster but it allows you meet other students and chapters.

                            SHPE UCF is a part of SHPE Region VII along with Florida Atlantic University, University of Miami, Florida International University, Florida Institute of Technology, Florida State University, Georgia Tech, North Carolina State, University of Florida and the University of South Florida.

                            The professional chapters include the Central Florida, Tampa, South Florida and Atlanta chapters.

                            The SHPE National website is www.shpe.org.

                            The Central Florida SHPE Professional Chapter website www.shpecentralflorida.org.
                        </p>
                    </div>

                </div>
                <SideList />
            </div>
            <div className="boardList" style={{ display: 'flex', justifyItems: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h2>2021-2022 Board</h2>
                <div style={{ display: 'flex', alignContent: 'center', flexFlow: 'wrap', justifyContent: 'center', }}>
                    <Grid container spacing={4}>
                        {people.map(person => (
                            <ProfileCard name={person.name} role={person.role} image={person.image} />
                        ))}
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;