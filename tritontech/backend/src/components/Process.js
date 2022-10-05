import React from 'react'
// import '../Styles/Process.css';
import '../Styles/Process.css';
import { Typography } from '@material-ui/core';

import img4 from '../images/3dicons.png'
import img5 from '../images/share-2.png'
import img6 from '../images/cloud-development.png'
import img7 from '../images/icon3.png'
import { BsDot } from 'react-icons/bs'
import { BiDotsVerticalRounded } from 'react-icons/bi'


function Process() {
  return (
    <div className='Process'>

        <div className='process-main'>
     
        {/* <div className='About-content-empty-header' >
        </div> */}
        <div className='Process-img'>
        </div>

          <div className='content-circle'>
            <div className='cir-1'>
              <div className='process-circle' style={{ background: '#ffffff' }}>
                <img  className="image"src={img4} alt='' style={{ width: '50%', height: '50%' }} />
              </div>
              <div className='process-icon-content'>
                <BsDot size={100} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                
              </div>
              <Typography variant='h6'  className='letter' >
               Study,Discovery&Analysis
              </Typography>
              
            </div>
            <div className='cir-1'>
            <div className='process-circle' style={{ background: '#ffffff' }}>
              <img  className="image" src={img5} alt='' style={{ width: '50%', height: '50%' }} />
            </div>
            <div className='process-icon-content'>
                <BsDot size={100} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
              </div>
              <Typography variant='h6' className='letter' >
                Architecture Design
              </Typography>
            </div>
            <div className='cir-1'>
            <div className='process-circle' style={{ background: '#ffffff' }}>
              <img  className="image" src={img6} alt='' style={{ width: '50%', height: '50%' }} />
            </div>
            <div className='process-icon-content'>
                <BsDot size={100} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                
                
                
              </div>
              <Typography variant='h6' className='letter' >
                Development & QA
              </Typography>
            </div>
            <div className='cir-1'>
            <div className='process-circle' style={{ background: '#ffffff' }}>
              <img  className="image"  src={img7} alt='' style={{ width: '50%', height: '50%' }} />
            </div>

            <div className='process-icon-content'>
                <BsDot size={100} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                <BsDot size={40} />
                
                
              </div>
              <Typography variant='h6' className='letter' >
                Release
              </Typography>
            </div>
          </div>
       
          </div>
    </div>
  )
}

export default Process