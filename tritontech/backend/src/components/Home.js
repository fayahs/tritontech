import React from 'react'
import '../Styles/Home.css';

import img2 from '../images/3dobj2.png';

  import {  Typography } from '@material-ui/core';
// import { loadFull } from 'tsparticles';

function Home() {
  
  return (
    <div className='home'>
         

          <div className='home-content'>
            <div className='home-main'>
            
            <Typography variant='h2' component='h2' style={{ fontWeight: '700' }} className='paragraph1'> 
              <span style={{ fontWeight: '10' }}><span style={{ color: '#cf2e2e' }}> Drawing</span> Your</span> <i style={{ color: '#2E8BC0' }}>D</i><span className='paragraph2' style={{ fontSize: '35px' }}>reams</span>
            </Typography>
            <Typography variant='h2' component='h2' style={{ fontWeight: '700' }}>
              <span style={{ fontWeight: '10' }} className='paragraph1'>your <span style={{ color: '#cf2e2e' }}>Digital</span></span>  <i style={{ color: '#2E8BC0',marginLeft:'20px' }} className='paragraph2'>F</i><span  className='paragraph2' style={{ fontSize: '40px' }}>orms,</span>
            </Typography>
             <div className='paragraph'>
            <Typography style={{ fontSize: '15px', }} >
              <span className='paragraph4'>Visualizing your dreams in the form of digitalization is an interesting and meaningful thing. </span> <br />
              <span className='home-content-tags'> We’ve <span style={{ marginLeft: '5px' }} ></span>developed a better<span style={{ paddingLeft: '5px' }}></span> approach to <  span style={{ marginLeft: '10px' }}></span>custom <span /> software</span> <br />
              <span> development.<span style={{ marginLeft: '10px' }}></span>We <span style={{ marginLeft: '5px' }}></span> love finding <span style={{ marginLeft: '5px' }}></span>solutions to <span style={{ marginLeft: '8px' }}></span>complicated </span><br />
              <span>problems by solving the unsolvable.Our technology,experts </span><br />
              <span> think big, design smart,and <span style={{ marginLeft: '20px' }}>develop fast for all screens</span>.</span><br />
              <span>They’re<span style={{ marginLeft: '10px' }}>ready</span> <span style={{ marginLeft: '5px' }}> to turn your</span><span style={{ marginLeft: '20px' }}> big idea into a reality.</span></span>
            </Typography>
            </div>
            </div>
           
             
            <div className='home-content1' style={{ width: '80%', height: '70%', marginTop: '20px' }}>

            <img src={img2} alt='triton' className='home-content-img' />
            </div>
            </div>
         




    </div>
  )
}

export default Home