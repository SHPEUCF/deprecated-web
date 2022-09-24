import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Footer from '../components/Footer';
import SideList from '../components/SideList';
import BoardPic from '../assets/Optimized-board.jpg';
import AlanL from '../assets/board/AlanL.png';
import AndresA from '../assets/board/AndresA.png';
import BrendanN from '../assets/board/BrendanN.png';
import CecilleC from '../assets/board/CecilleC.png';
import ElenaT from '../assets/board/ElenaT.png';
import NickL from '../assets/board/NickL.png';
import GabrielaM from '../assets/board/GabrielaM.png';
import JoseV from '../assets/board/JoseV.png';
import RichardH from '../assets/board/RichardH.png';
import StephC from '../assets/board/StephC.png';
import ValentinaM from '../assets/board/ValentinaM.png';
import ZainYF from '../assets/board/ZainYF.png';
import AnneR from '../assets/board/AnneR.png';
import './Font.css';



const ProfileCard = (person) => {
    return (
        <Card style={{margin: '2vh', padding: '.5vh'}}>
            <CardMedia
                style={{ height: '30vh', width: '23vh' }}
                image={person.image}
            />
            <Typography variant='p' style={{fontWeight: 'bold'}}>
                {person.name}
            </Typography>
            <Typography variant='body2'>
                { person.role }
            </Typography>
        </Card>
    );
};

var people = [
    { name: 'Nick Libreros', role: 'President', image: NickL },
    { name: 'Andres Acevedo', role: 'Vice President', image: AndresA },
    { name: 'Steph Colton', role: 'Secretary', image: StephC },
    { name: 'Cecille Castro', role: 'Treasurer', image: CecilleC },
    { name: 'Alan Luko', role: 'Corporate Affairs Co-Chair', image: AlanL },
    { name: 'Elena Torres', role: 'Corporate Affairs Co-Chair', image: ElenaT },
    { name: 'Gabriela Medina', role: 'Pro Dev Co-Chair', image: GabrielaM },
    { name: 'Richard Hudson', role: 'Pro Dev Co-Chair', image: RichardH },
    { name: 'Valentina Medina', role: 'Marketing Chair', image: ValentinaM },
    { name: 'Anne Reed', role: 'External Chair', image: AnneR },
    { name: 'Jose Viera', role: 'Events Chair', image: JoseV },
    { name: 'Brendan Nocca', role: 'Projects Chair', image: BrendanN },
    { name: 'Zain Yousaf Fuentes', role: 'Tech Chair', image: ZainYF }
];

function About() {
    return (
        <div className='font' style={{ marginTop: '8vh', fontFamily: '' }}>
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
                <h2>2022-2023 Board</h2>
                <div style={{ display: 'flex', alignContent: 'center', flexFlow: 'wrap', justifyContent: 'center', }}>
                    {people.map(person => (
                        <ProfileCard name={person.name} role={person.role} image={person.image} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;