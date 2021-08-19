import React from 'react';
import { BrowserRouter as 
  Router, 
  Route, 
  Switch, 
  } from 'react-router-dom';
  import Home from './pages/Home';
  import About from './pages/About';
  import Membership from './pages/Membership';
  import Linktree from './pages/Linktree';
  
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
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
