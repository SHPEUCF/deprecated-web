import React from "react";
import {Link} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Membership from '../pages/Membership';
import Linktree from '../pages/Linktree';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#b88804'
        }
    }
})
function Footer() {
        const footerConst = [{name: "Home", path:"/", component: <Home />}, {name: "About", path:"/about", component: <About />},
        {name: "Membership", path:"/membership", component: <Membership />}, {name:"Linktree", path:"/linktree", component: <Linktree />}]
        return(
        <div className='contianer' >
            <div 
                className="bottom" 
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#343635', margin: '0'}}
            >
                <p style={{color: 'white'}}>SHPE UCF | Society of Hispanice Professional Engineers</p>
                {footerConst.map((el, index) => (
                     <Link key={index} style={{textDecoration: 'none', color: 'white'}} to={el.path}>{el.name}</Link>
                ))}
    {/* const socialLinks = 
    , 
    'https://www.instagram.com/shpeucf/', 
    'https://www.linkedin.com/company/shpe/mycompany/'] */}
                <ThemeProvider theme={theme}>
                    <IconButton onClick={() => {window.location.href = 'https://twitter.com/shpeucfchapter'}}>
                        <TwitterIcon color='primary'></TwitterIcon>
                    </IconButton>
                    <IconButton onClick={() => {window.location.href = 'https://www.facebook.com/shpeucfchapter'}}>
                        <FacebookIcon color='primary'></FacebookIcon>
                    </IconButton>
                    <IconButton onClick={() => {window.location.href = 'https://www.instagram.com/shpeucf/'}}>
                        <InstagramIcon color='primary'></InstagramIcon>
                    </IconButton>
                    <IconButton onClick={() => {window.location.href = 'https://www.linkedin.com/company/shpe/mycompany/'}}>
                        <LinkedInIcon color='primary'></LinkedInIcon>
                    </IconButton>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Footer;