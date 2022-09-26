import './Background.css'
import img14 from '../images/transformation.png'
import img15 from '../images/innovation.png'
import img16 from '../images/enterprise.png'
import img17 from '../images/uiux.png'
import img18 from '../images/webdev.png'
import img19 from '../images/mobile.png'

import { Typography } from '@material-ui/core'
const Crad=()=>{
    return(
      <>
      
<div className='Main-card'>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',gap:'20px',paddingTop:'20px'}} className='Main-card1'>
<div className="wrapper">
    <div className="flip-card">
      <div className="front card" style={{display:'flex',gap:'20px'}}>
          <img src={img14} alt='' style={{width:'30%'}} className='tranformation-img'/> 
          <Typography  style={{fontWeight:'700',fontSize:'15px'}}  className='para2'>
            DIGITAL TRANSFORMATION
          </Typography>
      </div>
      <div className="back card">
          <Typography>
          Technology & Ecosystem Audit
            </Typography>  
            <Typography>
            Digital Strategy
              </Typography>  
              <Typography>
              Digital Marketing
                </Typography>   
                <Typography>
              Digital Analytics
                </Typography>   


      </div>
    </div>
  </div>
  <div className="wrapper">
    <div className="flip-card">
      <div className="front card" style={{display:'flex',gap:'20px'}}>
      <img src={img15} alt='' style={{width:'40%'}}/>
      <Typography style={{fontWeight:'700',fontSize:'15px'}} className='para2'>
        INNOVATION TECHNOLOGY
      </Typography>
      </div>
      <div className="back card">
     <Typography>
     Augmented & Virtual Reailty

     </Typography>
   <Typography> Machine Learning & AI</Typography> 
    <Typography> Internet of Things</Typography>    
      <Typography> Blockchain</Typography>
      </div>
    </div>
  </div>
  <div className="wrapper">
    <div className="flip-card">
      <div className="front card" style={{display:'flex',gap:'20px'}}>
          <img src={img16} alt='' style={{width:'40%'}}/>
          <Typography style={{fontWeight:'700',fontSize:'15px'}} className='para2'>
        ENTERPRISE DEVELOPMENT
      </Typography>
      </div>
      <div className="back card">
      <Typography>
      Enterprise Resource Planning

     </Typography>
   <Typography> Point of Sale</Typography> 
    <Typography> Customer Relation Management
</Typography>    
      <Typography> Data & Workflow Automation</Typography>
      <Typography>
      Quality as a service
      </Typography>
      </div>
    </div>
  </div>
  </div>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',gap:'20px'}} className='Main-card1'>
<div className="wrapper">
    <div className="flip-card">
      <div className="front card" style={{display:'flex',gap:'20px'}}>
      <img src={img17} alt='' style={{width:'30%'}} className=''/> 
          <Typography  style={{fontWeight:'700',fontSize:'15px'}}  className='para2'>
               <span className='para2'> UI UX &
            THINKING</span>
          </Typography>
      </div>
      <div className="back card">
      <Typography>
      Branding

     </Typography>
   <Typography> UX Strategy</Typography> 
    <Typography> Mobile & Web Design
</Typography>    
      
      </div>
    </div>
  </div>
  <div className="wrapper">
    <div className="flip-card">
    
      <div className="front card"  style={{display:'flex',gap:'20px'}}>
      <img src={img18} alt='' style={{width:'30%'}}/> 
          <Typography  style={{fontWeight:'700',fontSize:'15px'} } className='para2'>
           WEB TECHNOLOGY DEVELOPMENT
          </Typography>
      </div>
      <div className="back card">
      <Typography>
      Content Management Systems

     </Typography>
   <Typography> e-Commerce Platforms</Typography> 
    <Typography> Custom Web Applications</Typography>    
    <Typography>Cloud Architecture Engineering &</Typography>    
    <Typography>Optimization</Typography>    
      
      </div>
    </div>
  </div>
  <div className="wrapper">
    <div className="flip-card">
      <div className="front card" style={{display:'flex',gap:'20px'}}>
       <img src={img19} alt='' style={{width:'30%'}}/> 
          <Typography  style={{fontWeight:'700',fontSize:'15px'}}>
           MOBILE ENGINEERING
          </Typography>
      </div>
      <div className="back card">
      <Typography>
      Android Development

     </Typography>
   <Typography> iOS Development</Typography> 
    <Typography> React Native Development</Typography>    
    <Typography>Wearable Development</Typography>    
      
      </div>
    </div>
  </div>
  </div>
  </div>
      </>
    )
}
export default Crad