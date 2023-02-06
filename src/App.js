import React, { useState, useEffect, useLayoutEffect } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Construction from './pages/Construction';
import Interior from './pages/Interior';
import Landscape from './pages/Landscape';
import Furniture from './pages/Furniture';
import Services from './pages/Services';
import Renovation from './pages/Renovation';
import Mission from './pages/Mission';
import Contact from './pages/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AboutConstruction from './components/AboutConstruction';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services/construction' component={Construction} />
        <Route path='/services/interior' component={Interior} />
        <Route path='/services/renovation' component={Renovation} />
        <Route path='/services/landscaping' component={Landscape} />
        <Route path='/services/furniture' component={Furniture} />
        <Route path='/services' component={Services} />
        <Route path='/mission' component={Mission} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
