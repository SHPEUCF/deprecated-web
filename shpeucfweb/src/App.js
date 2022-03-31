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
  import Nav from './components/Nav';
  import Techpage from './pages/Techpage';

const App = () => {
  return (
    // router set up 
    // more info on how to make a router https://reactrouter.com/web/guides/quick-start
    <Router>
      {/* want to put Navbar component here in app so that every page that is a child of app has a nav in it */}
      <Nav />
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
        <Route path="/techpage">
            <Techpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
