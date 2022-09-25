import React from 'react'
import '../Styles/About.css';
import { Button, Typography } from '@material-ui/core';
import { BsArrowDownCircleFill } from 'react-icons/bs'
import { BiBasketball } from 'react-icons/bi'
import { ImArrowRight2 } from 'react-icons/im'
import { FaDigitalOcean } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'
import img3 from '../images/img-about-01.png'


function About() {
  return (
    <div className='About'>
         <div className='About-content-hr'>
            <div className='About-content-empty-header'>

            </div>
            <div className='About-content-hr-attributes'>
              <div className='About-content-hr-attributes-img' >
                <img src={img3} alt='' className='About-img' />
              </div>
              <div className='About-content-hr-attributes-imgs' style={{ background: '#ffffff' }}>
                <div className='About-header'>
                  <Button style={{ textTransform: 'none', fontSize: '20px', color: 'lightgreen' }} href='sec1'>
                    About us
                  </Button>
                </div>
                <div className='About-header1'>
                  <Typography variant='h4' component='h2' >
                    <span className='animate__backInLeft'>What We Are?</span>
                  </Typography>
                </div>
                <div className='About-header2'>
                  <Typography component='h2' variant='h6'>
                    TRITON TECH LABS PVT LTD  <span style={{ fontSize: '15px' }}>happens to be one of the pioneering</span>
                    <span className='About-content'>
                      <span>creative, and most importantly client-friendly digital service providers in the</span>
                      <span> market. Seamless collaboration, total transparency, secure delivery. We’ve</span>
                      <span> developed a better approach to custom software development </span>
                    </span>
                  </Typography>
                </div>
                <div className='About-header3'>
                  <div className='About-header3-contents' style={{ display: 'flex', alignItems: 'center', paddingLeft: '15px' }}>
                    <div style={{ width: '70%', height: '100%', display: 'flex', alignItems: 'center' }}>
                      <Typography variant='h6'>
                        <span style={{ fontSize: '25px', color: 'gray' }}> Reasons</span> why We might be the right fit for you
                      </Typography>
                    </div>
                    <div className='About-icon'
                      style={{
                        width: '30%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '25px',
                        color: 'grey'
                      }}>
                      <BsArrowDownCircleFill style={{ marginLeft: '10px' }} />
                    </div>
                  </div>
                  <div className='About-header3-contents' >
                    <div className='blob' style={{ background: 'rgb(5, 92, 157)' }}>
                      <BiBasketball size={28} color='#ffffff' />
                    </div>
                    <ImArrowRight2 />
                    <Typography variant='h6' style={{ fontSize: '16px' }}>
                      Technology
                    </Typography>

                  </div>
                  <div className='About-header3-contents'>
                    <div className='blob' style={{ background: 'rgb(89, 152, 26)' }}>
                      <FaDigitalOcean size={28} color='#ffffff' />

                    </div>
                    <ImArrowRight2 />
                    <Typography variant='h6' style={{ fontSize: '16px' }}>
                      Digitalization
                    </Typography>
                  </div>
                  <div className='About-header3-contents'>
                    
                    <div className='blob' style={{ background: 'rgb(255, 184, 0)' }}>
                      <MdHealthAndSafety size={28} color='#ffffff' />
                    </div>
                    <ImArrowRight2 />
                    <Typography variant='h6' style={{ fontSize: '16px' }}>
                      Friendly Work <br />
                      <span style={{ marginLeft: '20px' }}>Culture</span>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default About