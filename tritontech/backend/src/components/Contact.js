import React from 'react';
import '../Styles/Contact.css'
import img17 from '../images/email.png'
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
          <Typography variant='h5' className='title' style={{color:'#777777'}}>
            Want to discuss your <span style={{ fontWeight: '550',color:'#007FFF' }}>Project?</span>
          </Typography>
          <Button style={{ textTransform: 'none', fontSize: '24px', color: 'black',color:'#007FFF' }} variant='text'>
            Contact Us
          </Button>


        </div>
        <div className='Contacts-content'>
          <div className='Contact-box'>
            <div className='location-img'>
              <img src={img16} alt='' style={{ width: '40%', height: 'auto' }} />
            </div>
            <div className='location-content'>
              <Typography variant='h5' className='con-head' style={{color:'#007FFF'}}>
                Our Address
              </Typography>
              <Typography  style={{display:'flex',alignItems:'center',flexDirection:'column',color:'#777777'}}>
                
              <span> 219, First Floor, Main Road,</span> 
              
              
              <span>Kadayanallur,Thenkasi,</span>  
             
             
               <span>Tamilnadu ,India</span> 
         


              
              </Typography>

            </div>

          </div>
          <div className='Contact-box'>
            <div className='location-img'>
              <img src={img17} alt='' style={{ width: '40%', height: 'auto' }} />
            </div>
            <div className='location-content' >
              <Typography variant='h5' className='con-head' style={{color:'#007FFF'}} >
                Contact Us
              </Typography>
              <Typography style={{color:'#777777'}}>
                rafeek@tritonlabs.in
              </Typography>



            </div>

          </div>
          <div className='Contact-box'>
            <div className='location-img'>
              <img src={img18} alt='' style={{ width: '40%', height: 'auto' }} />
            </div>
            <div className='location-content' >
              <Typography variant='h5' className='con-head' style={{color:'#007FFF'}}>
                Call US
              </Typography>
              <Typography  style={{color:'#777777'}}>
                +91 9944393255
              </Typography>
           



            </div>

          </div>
        </div>
        <div className='Contacts-content1'>
          <div className='Contacts-content2'>
            <Typography variant='h6' className='last-con' style={{color:'#007FFF'}} >
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
            <Typography variant='h6'  className='last-con' style={{color:'#007FFF'}}>
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
            <Typography variant='h6' className='last-con' style={{ fontSize: '20px',color:'#007FFF' }} >
              SOCIAL
            </Typography>
            <a href='#sec2'><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< AiFillTwitterCircle size={14} /></span><span style={{ marginLeft: '2px' }}>Twitter</span>
            </Typography > </a>
            <a href='https://www.facebook.com/profile.php?id=100076158587804' style={{ display: 'flex' }}><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< BsFacebook size={12} /></span><span style={{ marginLeft: '2px' }}>Facebook</span>

            </Typography> </a>
            <a href='https://www.linkedin.com/company/triton-tech-labs/'><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< AiFillLinkedin size={12} /></span><span style={{ marginLeft: '2px' }}>Linkedin</span>
            </Typography> </a>


          </div>
        </div>
      </div>


    </div>


  );
}

export default Contact;