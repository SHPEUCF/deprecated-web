import React from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

var ProfileCard = (person) => {
    return (
        <Grid >
            <Card>
                <Typography>
                    {person.name}
                </Typography>
                <Typography>
                    {person.role}
                </Typography>
                <CardMedia
                    style={{ height: '15vh'}}
                    image="https://www.pbs.org/wnet/nature/files/2020/06/Nature-Thumbnails-Template-2020AS-1280x720.png"
                />
            </Card>
        </Grid>
    )
}

var BoardList = ({ people }) => {
    //Render each profile card for every person in the array
    const cards = people.map(person => (
        <ProfileCard name={person.name} role={person.role} />
    ));

    return (
        <Grid container>
            {cards}
        </Grid>
    )
}

var people = [
    {name: 'Jazmine Manriquez', role: 'President'},
    {name: 'Frederick Santiago', role: 'External Vice President'},
    {name: 'Gabriela Medina', role: 'Internal Vice President'},
    {name: 'Santiago Valdez', role: 'Treasurer'},
    {name: 'Alex Diener', role: 'Secretary'},
    {name: 'Kevin Abreu', role: 'Events Director'},
    {name: 'Juan Ariza', role: 'Membership Director'},
    {name: 'Magda Sobrino', role: 'Marketing Director'},
    {name: 'Nick Libreros', role: 'MentorSHPE Director'},
    {name: 'Elena Torres', role: 'Outreach Director'},
    {name: 'Camille Dumit', role: 'SHPEtinas Director'},
    {name: 'Hernan Hernandez-Garcia', role: 'Projects Director'},
    {name: 'Nathalia Davila', role: 'Development Director'},
    {name: 'Bryce Villanueva', role: 'Tech Director'},
    {name: 'Sofia Montana', role: 'Tech Director'},
    {name: 'Alexander Del Castillo', role: 'SHPE Jr Director'},
    {name: 'Stephanie Colton', role: 'SHPE Jr Co-Director'},
]

function About() {
    return (
        <div>
            <h1>About</h1>
            <div className="description">
                <h2>Our Mission</h2>
                <p>To change lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development.</p>
                <h2>About</h2>
                <p>The Society of Hispanic Professional Engineers(SHPE) was founded in Los Angeles, California, in 1974 by a group of engineers employed by the city of Los Angeles.Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community.

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
            <div className="boardList">
                <h2>2021-2022 Board</h2>
                <BoardList people={people} />
            </div>

        </div>
    );
}

export default About;