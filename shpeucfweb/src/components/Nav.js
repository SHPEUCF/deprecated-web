import React from "react";
import {Link} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Membership from '../pages/Membership';
import Linktree from '../pages/Linktree';
import AppBar from '@material-ui/core/AppBar';
import './Nav.css';

function Nav() {
    const routes = [{name: "Home", path:"/", component: <Home />}, {name: "About", path:"/about", component: <About />},
        {name: "Membership", path:"/membership", component: <Membership />}, {name:"Linktree", path:"/linktree", component: <Linktree />}]
    
        return(
        <div className='contianer'>
            <AppBar className='Navbar' position='static' style={{flexDirection: 'row'}}>
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