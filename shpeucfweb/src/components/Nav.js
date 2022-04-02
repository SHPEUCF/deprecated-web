import React from "react";
import {Link} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Membership from '../pages/Membership';
import Linktree from '../pages/Linktree';
import AppBar from '@material-ui/core/AppBar';
import './Nav.css';
import logo from '../assets/shpeLogo.png';
import Techpage from '../pages/Techpage';

function Nav() {
    const routes = [{name: "Home", path:"/", component: <Home />}, {name: "About", path:"/about", component: <About />},
        {name: "Membership", path:"/membership", component: <Membership />}, {name:"Linktree", path:"/linktree", component: <Linktree />},{name: "Tech", path:"/techpage", component: <Techpage />}]
    
        return(
        <div className='contianer'>
            <AppBar className='Navbar' position='fixed' style={{display: 'flex', flexDirection: 'row', background: 'black', justifyContent: 'flex-start', alignItems: 'center'}}>
                <img style={{height: '3%', width: '3%'}} src={logo} alt='logo'/>
                {routes.map((route, index) => (
                    <div key={index}>
                        <Link className='Link' to={route.path}>{route.name}</Link>
                    </div>
                ))}
            </AppBar>
      </div>
    );
}

export default Nav;