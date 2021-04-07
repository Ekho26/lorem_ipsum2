import React from 'react';

// Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages
import Home from "./pages/Home";
import Features from './pages/Features';
import AboutUs from './pages/AboutUs';
import LogIn from './pages/LogIn';
import GetDemo from './pages/GetDemo';
import Page404 from './pages/Page404';

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/log_in" component={LogIn} />
        <Route path="/demo" component={GetDemo} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
