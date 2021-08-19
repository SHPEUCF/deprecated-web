import React from "react";
import {Link, useHistory} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Membership from '../pages/Membership';
import Linktree from '../pages/Linktree';

function Nav() {
    const history = useHistory();
    const routes = [{name: "Home", path:"/", component: <Home />,}, {name: "About", path:"/about", component: <About />,},
        {name: "Membership", path:"/membership", component: <Membership />,}, {name:"Linktree", path:"/linktree", component: <Linktree />,}]
    return(
        <div>
            <ul>
                {routes.map((route, index) => (
                    <li key={index} onClick={() => history.push(route.path)}>
                        <Link to={route.path} >{route.name} </Link>
                    </li>
                ))}
            </ul>
      </div>
    );
}

export default Nav;