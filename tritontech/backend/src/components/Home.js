import React, { useEffect, useState } from 'react'
import '../Styles/Home.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import img2 from '../images/3dobj2.png';

  import {  Typography } from '@material-ui/core';
// import { loadFull } from 'tsparticles';

import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  });


  return (
    <div className='home'>
         


      <div className='home-content'>
        <div className='home-main'>
          <div className='head'>
          <ReactPlaceholder showLoadingAnimation type='rect' rows={1} ready={!loading}>
            <Typography variant='h2' component='h2' style={{ fontWeight: '500' }} className='paragraph1'>  Drawing Your Dreams
            </Typography>
            <Typography variant='h2' component='h2' style={{ fontWeight: '700' }}>
              <span style={{ fontWeight: '10' }} className='paragraph1'>In Digital  Forms! </span>
            </Typography>
          </ReactPlaceholder>
          </div>
          <div className='paragraph'>
          
            <ReactPlaceholder showLoadingAnimation type='text' rows={7} ready={!loading}>
            <Typography  >
              <p className='para-main'>Visualizing your dreams in the form of digitalization is an interesting and meaningful thing.
                Dream scenes are more fantasy than real scenes, conversion of this dream into real is a challenging part. Triton  Tech Labs takes up those challenges, by converting the dream scenes into smaller scene and recreate by applying process to make it happen into real world scenes.
                Architecting your dreams and making them happen in digitalized usage form is the success part of our team.
              </p>
            </Typography>
            </ReactPlaceholder>
          
          </div>
          <div className='btn'>
            <a href='#Contact' className='link'>
          <ReactPlaceholder showLoadingAnimation type='rect' rows={7} ready={!loading}>
              <button  className='button' type="button"> <span> Business Enquires</span> <HiOutlineArrowNarrowRight size={20}/></button>
          </ReactPlaceholder>
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