import { colors, Link, Typography } from '@material-ui/core';
import './App.css';
import img from './images/Tritonlogo.png'
import 'animate.css';
import Home from './components/Home';
import About from './components/About';

import Process from './components/Process';
import Service from './components/Service';
import Contact from './components/Contact';
import { HiOutlineMenu } from "react-icons/hi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from 'react';



function App() {




  return (
    <div className='App' >
      <div className="container">

        <nav className='navBar'>
          {/* <section class="top-nav"> */}
          <div className='logo-img'>
            <img src={img} alt='triton' className='img1' />
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' for="menu-toggle">
            <div className='menu-button'></div>
          </label>
          <ul className="menu">
            <li><a href='#Home'><Typography variant='h6' className='App-header1' style={{ fontWeight: '700', fontSize: '20px', color:'#007FFF' }}>
              Home
            </Typography></a></li>
            <li><a href='#About-Us'><Typography variant='h6' className='App-header1' style={{ fontWeight: '700', fontSize: '20px',color:'#007FFF' }} >
              About
            </Typography> </a></li>
            <li><a href='#Process'><Typography variant='h6' className='App-header1' style={{ fontWeight: '700', fontSize: '20px' ,color:'#007FFF'}}>
              Process
            </Typography> </a></li>
            <li><a href='#Service'><Typography variant='h6' className='App-header1' style={{ fontWeight: '700', fontSize: '20px',color:'#007FFF' }} >
              Services
            </Typography> </a></li>
            <li><a href='#Contact'><Typography variant='h6' className='App-header1' style={{ fontWeight: '700', fontSize: '20px',color:'#007FFF' }} >
              Contact
            </Typography> </a></li>
          </ul>
          {/* </section> */}
        </nav>


        <section id='Home' className='home-content'>
         <Home/>
        </section>
        <section id='About-Us' className='about-content'>
         <About/>
        </section>
        <section id='Process' className='process-content'>
          <Process />
        </section>
        <section id='Service' className='service-content'>
          <Service />
        </section>
        <section id='Contact' className='contact-content'>
          <Contact />
        </section>

      </div>
    </div>

  );
}

export default App;
