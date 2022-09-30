import React from 'react';
import '../Styles/Contact.css'
import img17 from '../images/email.png'
import img16 from '../images/location.png'
import { Button, Typography } from '@material-ui/core';
import img18 from '../images/ringer-volume.png'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
function Contact() {
  return (
    <div className="Contact-main">
      
      <div className='Contact-main-hr'>
        <div className='Contacts-headers'>
          {/* <Typography>
       Magnam dolores commodi suscipit.
       </Typography> */}
          <Typography variant='h5' className='title' style={{color:'#777777'}}>
            Want to discuss your  <span style={{ fontWeight: '550',color:'#007FFF' }}>Project?</span>
          </Typography>
          <Button style={{ textTransform: 'none', fontSize: '24px',color:'#007FFF' }} variant='text'>
            Contact Us
          </Button>


        </div>
        <div className='Contacts-content'>
          <div className='Contact-box'>
            <div className='location-img'>
              <img src={img16} alt='' style={{ width: '35%', height: 'auto' }} />
            </div>
            <div className='location-content'   >
              <Typography variant='h5' className='con-head' style={{color:'#007FFF'}}>
                Our Address
              </Typography>
              <Typography  style={{display:'flex',alignItems:'center',flexDirection:'column',color:'#777777'}}  className='para2'>
                
              <span > 219, First Floor, Main Road,</span> 
              
              <span >Kadayanallur,Tenkasi,</span>    
               <span >Tamilnadu ,India</span> 
         


              
              </Typography>

            </div>

          </div>
          <div className='Contact-box'>
            <div className='location-img'>
              <img src={img17} alt='' style={{ width: '35%', height: 'auto' }} />
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
              <img src={img18} alt='' style={{ width: '35%', height: 'auto' }} />
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
            <Typography variant='h6' className='last-con' style={{color:'#000000',fontWeight:'700'}} >
              MENU
            </Typography>
            <a href='#sec2' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Home
            </Typography> </a>
            <a href='#sec2' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              About us
            </Typography> </a>
            <a href='#sec3' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Process
            </Typography> </a>
            <a href='#sec4'className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Services
            </Typography> </a>
            <a href='#sec4' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Terms Of service
            </Typography> </a>

            <a href='#sec4' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Privacy Policy
            </Typography> </a>

          </div>
          <div className='Contacts-content2' >
            <Typography variant='h6'  className='last-con' style={{color:'#000000',fontWeight:'700'}}>
              SERVICES
            </Typography>
            <a href='#sec2' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Web Design
            </Typography> </a>
            <a href='#sec2'className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Web Development

            </Typography> </a>
            <a href='#sec3'className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Product Management

            </Typography> </a>
            <a href='#sec4' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Marketing

            </Typography> </a>
            <a href='#sec4' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Terms Of service
            </Typography> </a>

            <a href='#sec4'className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '12px' }}>
              Graphic Design
            </Typography> </a>

          </div>
          <div className='Contacts-content2'  style={{display:'flex',flexDirection:'column',width:''}}>
            <Typography variant='h6' className='social' style={{ fontSize: '20px',color:'#000000',fontWeight:'700' }} >
              SOCIAL
            </Typography>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',width:'50% '}} className='icon1'>
            <a href='#sec2' className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< AiFillTwitterCircle size={30} /></span>
            </Typography > </a>
            <a href='https://www.facebook.com/profile.php?id=100076158587804' style={{ display: 'flex' }} className='link1'><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< BsFacebook size={30} /></span>

            </Typography> </a>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',width:'50% '}}>
            <a href='https://www.linkedin.com/company/triton-tech-labs/'><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< AiFillLinkedin size={30} color='grey '/></span>
            </Typography> </a>
            <a href='https://www.linkedin.com/company/triton-tech-labs/'><Typography variant='h6' component='h2' style={{ fontSize: '14px' }}>
              <span >< AiFillInstagram size={30} color='grey' /></span>
            </Typography> </a>
            </div>
            


          </div>
        </div>
      </div>


    </div>


  );
}

export default Contact;