import React from 'react'
import '../Styles/Home.css';

import img2 from '../images/3dobj2.png';
import { HiOutlineArrowNarrowRight} from 'react-icons/hi';
import {FaHeadset  } from 'react-icons/fa';

import { Button, Typography } from '@material-ui/core';
// import { loadFull } from 'tsparticles';

function Home() {

  return (
    <div className='home'>


      <div className='home-content'>
        <div className='home-main'>
          <div className='head'>
            <Typography variant='h2' component='h2' style={{ fontWeight: '500' }} className='paragraph1'>  Drawing Your Dreams
            </Typography>
            <Typography variant='h2' component='h2' style={{ fontWeight: '500' }}>
              <span className='paragraph1'>In Digital Form! </span>
            </Typography>
          </div>
          <div className='paragraph'>
            <Typography  >
              <p className='para-main'>Visualizing your dreams in the form of digitalization is an interesting and meaningful thing.
                Dream scenes are more fantasy than real scenes, conversion of this dream into real is a challenging part. Triton  Tech Labs takes up those challenges, by converting the dream scenes into smaller scene and recreate by applying process to make it happen into real world scenes.
                Architecting your dreams and making them happen in digitalized usage form is the success part of our team.
              </p>
            </Typography>
          
          </div>
          <div className='btn'>
            <a href='#Contact' className='link'>
          <button  className='button' type="button"> <span> Bussines Enquires</span> <HiOutlineArrowNarrowRight size={20}/></button>
          </a>
          </div>
        </div>
        


        <div className='home-content1'>

          <img src={img2} alt='triton' className='home-content-img' />
        </div>
      </div>





    </div>
  )
}

export default Home