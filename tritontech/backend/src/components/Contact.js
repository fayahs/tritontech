import React from 'react';
import '../Styles/Contact.css'
import img17 from '../images/microsoft-outlook-2019.png'
import img16 from '../images/location.png'
import { Button, Typography } from '@material-ui/core';
import img18 from '../images/ringer-volume.png'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
function Contact() {
  return (
    <div className="Contact-main">
      <div className='About-content-empty-header'   >
      </div>
      <div className='Contact-main-hr'>
        <div className='Contacts-headers'>
          {/* <Typography>
       Magnam dolores commodi suscipit.
       </Typography> */}
          <Typography variant='h5' className='title'>
            Want to discuss your <span style={{ fontWeight: '550' }}>Project?</span>
          </Typography>
          <Button style={{ textTransform: 'none', fontSize: '20px', color: 'black' }} variant='text'>
            Contact Us
          </Button>


        </div>
        <div className='Contacts-content'>
          <div className='Contact-box'>
            <div className='location-img'>
              <img src={img16} alt='' style={{ width: '40%', height: 'auto' }} />
            </div>
            <div className='location-content'>
              <Typography variant='h5' className='con-head'>
                Our Address
              </Typography>
              <Typography >
                <address className='add'>
                219, First Floor, Main Road,
              
              
                Kadayanallur,Thenkasi,
             
             
                Tamilnadu ,India
                </address>
              </Typography>

            </div>

          </div>
          <div className='Contact-box'>
            <div className='location-img'>
              <img src={img17} alt='' style={{ width: '40%', height: 'auto' }} />
            </div>
            <div className='location-content' >
              <Typography variant='h5' className='con-head'>
                Contact Us
              </Typography>
              <Typography>
                rafeek@tritonlabs.in
              </Typography>



            </div>

          </div>
          <div className='Contact-box'>
            <div className='location-img'>
              <img src={img18} alt='' style={{ width: '40%', height: 'auto' }} />
            </div>
            <div className='location-content' >
              <Typography variant='h5' className='con-head'>
                Call US
              </Typography>
              <Typography >
                +91 9944393255
              </Typography>
              <Typography>
                +91 7904406023
              </Typography>
              <Typography>
                +91 6379137677
              </Typography>



            </div>

          </div>
        </div>
        <div className='Contacts-content1'>
          <div className='Contacts-content2'>
            <Typography variant='h6' className='last-con'>
              MENU
            </Typography>
            <a href='#sec2'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Home
            </Typography> </a>
            <a href='#sec2'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              About us
            </Typography> </a>
            <a href='#sec3'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Process
            </Typography> </a>
            <a href='#sec4'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Services
            </Typography> </a>
            <a href='#sec4'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Terms Of service
            </Typography> </a>

            <a href='#sec4'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Privacy Policy
            </Typography> </a>

          </div>
          <div className='Contacts-content2'>
            <Typography variant='h6'  className='last-con'>
              SERVICES
            </Typography>
            <a href='#sec2'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Web Design
            </Typography> </a>
            <a href='#sec2'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Web Development

            </Typography> </a>
            <a href='#sec3'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Product Management

            </Typography> </a>
            <a href='#sec4'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Marketing

            </Typography> </a>
            <a href='#sec4'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Terms Of service
            </Typography> </a>

            <a href='#sec4'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Graphic Design
            </Typography> </a>

          </div>
          <div className='Contacts-content2'>
            <Typography variant='h6' className='last-con' style={{ fontSize: '15px' }}>
              SOCIAL
            </Typography>
            <a href='#sec2'><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< AiFillTwitterCircle size={14} /></span><span style={{ marginLeft: '2px' }}>twitter</span>
            </Typography > </a>
            <a href='#sec2' style={{ display: 'flex' }}><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< BsFacebook size={12} /></span><span style={{ marginLeft: '2px' }}>facebook</span>

            </Typography> </a>
            <a href='#sec3'><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< AiFillLinkedin size={12} /></span><span style={{ marginLeft: '2px' }}>Linkedin</span>
            </Typography> </a>


          </div>
        </div>
      </div>


    </div>


  );
}

export default Contact;