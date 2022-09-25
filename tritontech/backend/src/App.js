import { Typography } from '@material-ui/core';
import './App.css';
import img from './images/Tritonlogo.png'
import 'animate.css';
import Home from './components/Home';
import About from './components/About';
import Process from './components/Process';
import Service from './components/Service';
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
            <li><a href='#Home'><Typography variant='h6' component='h6' className='App-header1' style={{ fontSize: '18px' }}>
              Home
            </Typography></a></li>
            <li><a href='#About Us'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              About us
            </Typography> </a></li>
            <li><a href='#Process'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              Process
            </Typography> </a></li>
            <li><a href='#Services'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              Services
            </Typography> </a></li>
            {/* <li><a href='#sec5'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              Portfolio
            </Typography> </a></li> */}
            <li><a href='#Contact'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '18px' }}>
              Contact
            </Typography> </a></li>
          </div>
        </ul>

        <section id='Home'>
         <Home/>
        </section>
        <section id='About Us'>
         <About/>
        </section>
        <section id='Process'>
         <Process/>
        </section>
        <section id='Services'>
          <Service/>
        </section>
        {/* <section id='sec5'><h1>Feedback</h1></section> */}
        <section id='Contact'><h1>Contact</h1></section>

      </div>
    </div>

  );
}

export default App;
