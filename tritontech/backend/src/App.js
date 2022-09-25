import { Link, Typography } from '@material-ui/core';
import './App.css';
import img from './images/Tritonlogo.png'
import 'animate.css';
import Home from './components/Home';
import About from './components/About';
import Process from './components/Process';
import Service from './components/Service';
import Contact from './components/Contact';
import { HiOutlineMenu } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import Contact from './components/Contact';



function App() {


  const[sidebar,setsidebar] = useState(false)

  const showSidebar = () => setsidebar(!sidebar)

  const val =[
    {
     title:'Home' ,
     path:''
    },
    {
      title:' About Us' ,
      path:'#sec2'
     },
     {
      title:'Process' ,
      href:"#sec4"
     },
     {
      title:'Services' ,
      path:''
     },
     {
      title:'Contact' ,
      path:''
     }
  ]

  return (
    <div className='App' >

      <div className="container">
        <ul>
          <div className='logo-content'>
            <div className='logo-img'>

              <img src={img} alt='triton' style={{ width: '100%', height: 'auto', marginTop: '50px'}} />
            </div>

          </div>
          <div className='flex-container'>
            <li><a href='#Home'><Typography variant='h6' component='h6' className='App-header1' style={{ fontSize: '20px' }}>
              Home
            </Typography></a></li>
            <li><a href='#About_Us'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '20px' }}>
              About
            </Typography> </a></li>
            <li><a href='#Process'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '20px' }}>
              Process
            </Typography> </a></li>
            <li><a href='#Service'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '20px' }}>
              Services
            </Typography> </a></li>
            <li><a href='#Contact'><Typography variant='h6' component='h2' className='App-header1' style={{ fontSize: '20px' }}>
              Contact
            </Typography> </a></li>
          </div>
        
         <div className='navbar'>
                <Link to='#'>
                <GiHamburgerMenu onClick={showSidebar} fontSize={50}/>
                </Link>
             
         </div>
            <div >
            <nav className={sidebar ? 'nav-menu-active':'nav-menu'}>
              <div className='nav-bar'>
              <div className='nav-menu-items'>
                {val.map((item,index)=>{
                  return(
                    <div key={index} className={item.cName}>
                      <Link to={item.href}>
                        <span className='tittle-name'>{item.title}</span>
                      </Link>

                    </div>
                  )
                })}
              </div>
              </div>
          </nav>
            </div>
          
      
        </ul>
     
        

        <section id='Home'>
         <Home/>
        </section>
        <section id='About-Us'>
         <About/>
        </section>
        <section id='Process'>
         <Process/>
        </section>
        <section id='Services'>
          <Service/>
        </section>
        <section id='sec6'>
          <Contact/>
        </section>

      </div>
    </div>

  );
}

export default App;
