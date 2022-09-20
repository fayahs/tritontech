import { Typography } from '@material-ui/core';
// import { useCallback } from 'react';
import './App.css';
import img from './images/Tritonlogo.png'
// import Particles from 'react-tsparticles';
// import { BsArrowDownCircleFill } from 'react-icons/bs'
// import { BiBasketball } from 'react-icons/bi'
// import { ImArrowRight2 } from 'react-icons/im'
// import { FaDigitalOcean } from 'react-icons/fa'
// import { MdHealthAndSafety } from 'react-icons/md'
import 'animate.css';
// import img3 from './images/img-about-01.png'
import Home from './components/Home';
import About from './components/About';
import Process from './components/Process';
function App() {
 

 

  return (
    <div className='App' >

      <div className="container">
        <ul>
          <div className='logo-content'>
            <div className='logo-img'>

              <img src={img} alt='triton' style={{ width: '100%', height: 'auto', marginTop: '50px' }} />
            </div>

          </div>
          <div className='flex-container'>
            <li><a href='#sec1'><Typography variant='h6' component='h6' className='App-header1' style={{ fontSize: '18px' }}>
              Home
            </Typography></a></li>
            <li><a href='#sec2'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              About us
            </Typography> </a></li>
            <li><a href='#sec3'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              Process
            </Typography> </a></li>
            <li><a href='#sec4'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              Services
            </Typography> </a></li>
            <li><a href='#sec5'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              Portfolio
            </Typography> </a></li>
            <li><a href='#sec6'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              Contact
            </Typography> </a></li>
          </div>
        </ul>

        <section id='sec1'>
         <Home/>
        </section>
        <section id='sec2'>
         <About/>
        </section>
        <section id='sec3'>
         <Process/>
        </section>
        <section id='sec4'><h1>Social</h1></section>
        <section id='sec5'><h1>Feedback</h1></section>
        <section id='sec6'><h1>Contact</h1></section>
      </div>
    </div>

  );
}

export default App;
