import React from 'react'
import '../Styles/About.css';
import { Typography } from '@material-ui/core';
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
        <div className='About-content-empty-header'  style={{ color: 'transparent' }}>
..
        </div>
        <div className='About-content-hr-attributes'>
          <div className='About-content-hr-attributes-img' >
            <img src={img3} alt='' className='About-img' />
          </div>
          <div className='About-content-hr-attributes-imgs' style={{ background: '#ffffff' }}>

            <div className='About-header1'>
              <Typography variant='h4' component='h2' >
                <span className='paragraph1' >Who We Are?</span>
              </Typography>
            </div>
            <div className='About-header2'>
              <Typography component='h2' variant='h6'>
                <span className='About-content'>
                  <p className='para-main'>
                    Triton Tech Labs, a digital technology expert, enables the transformation of your business into a digital product
                     and cloud solution. We use right-fit technology to streamline the existing business platform to a modern
                      business platform to suit the dynamic market and automate everyday activities by providing customized digital solutions.
                  </p>
                </span>
              </Typography>
            </div>
            <div className='About-header3'>
              <div className='About-header3-contents' style={{ display: 'flex', alignItems: 'center', paddingLeft: '15px'  }}>
                <div style={{ width: '70%', height: '100%', display: 'flex', alignItems: 'center' }}className='about-header4' >
                  <Typography variant='h6' style={{color:'#777777'}}>
                    <span style={{ fontSize: '25px', color: '' }} className='paragraph1'> Reasons</span> why We might be the right fit for you
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
              <div className='abouts-icon'>
              <div className='About-header3-contents' >
                <div className='blob' style={{ background: 'rgb(5, 92, 157)' }}>
                  <BiBasketball size={28} color='#ffffff' />
                </div>
                <ImArrowRight2 />
                <Typography variant='h6' style={{ fontSize: '16px',color:'#777777' }}>
                  Technology
                </Typography>

              </div>
              <div className='About-header3-contents'>
                <div className='blob' style={{ background: 'rgb(89, 152, 26)' }}>
                  <FaDigitalOcean size={28} color='#ffffff' />

                </div>
                <ImArrowRight2 />
                <Typography variant='h6' style={{ fontSize: '16px' ,color:'#777777' }}>
                  Digitalization
                </Typography>
              </div>
              <div className='About-header3-contents'>

                <div className='blob' style={{ background: 'rgb(255, 184, 0)' }}>
                  <MdHealthAndSafety size={28} color='#ffffff' />
                </div>
                <ImArrowRight2 />
                <Typography variant='h6' style={{ fontSize: '16px' ,color:'#777777'}}>
                  Friendly Work <br />
                  <span style={{ marginLeft: '20px',color:'#777777' }} >Culture</span>
                </Typography>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
