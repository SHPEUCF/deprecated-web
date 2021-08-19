import React from 'react';
import { BrowserRouter as 
  Router, 
  Route, 
  Switch, 
  Link,
  } from 'react-router-dom';
  import Home from './pages/Home';
  import About from './pages/About';
  import Membership from './pages/Membership';
  import Linktree from './pages/Linktree';
  
const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>  
            </li>
            <li>
              <Link to={"/linktree"}>Get Involved</Link>
            </li>
          </ul>
      </div>
      <Switch>
        <Route path="/" >
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/membership" >
          <Membership />
        </Route>
        <Route path="/linktree">
            <Linktree />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
