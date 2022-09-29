import './Background.css'
import img14 from '../images/transformation.png'
import img15 from '../images/innovation.png'
import img16 from '../images/enterprise.png'
import img17 from '../images/uiux.png'
import img18 from '../images/webdev.png'
import img19 from '../images/mobile.png'

import { Typography } from '@material-ui/core'
const Crad = () => {
  return (
    <>

      <div className='Main-card'>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: '20px', paddingTop: '20px' }} className='Main-card1'>
          <div className="wrapper">
            <div className="flip-card">
              <div className="front card" style={{ display: 'flex', gap: '20px' }}>
                <img src={img14} alt='' style={{ width: '30%' }} className='tranformation-img' />
                <Typography style={{ fontWeight: '700', fontSize: '15px', color: '#007FFF' }} className='para2'>
                  DIGITAL TRANSFORMATION
                </Typography>
              </div>
              <div className="back card" style={{ color: '#777777' }}>
                <Typography className='para-1'>
                  Technology & Ecosystem Audit
                </Typography>
                <Typography className='para-1'>
                  Digital Strategy
                </Typography>
                <Typography className='para-1'>
                  Digital Marketing
                </Typography>
                <Typography className='para-1'>
                  Digital Analytics
                </Typography>


              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="flip-card">
              <div className="front card" style={{ display: 'flex', gap: '20px' }}>
                <img src={img15} alt='' style={{ width: '40%' }} />
                <Typography style={{ fontWeight: '700', fontSize: '15px', color: '#007FFF' }} className='para2'>
                  INNOVATION TECHNOLOGY
                </Typography>
              </div>
              <div className="back card" style={{ color: '#777777' }}>
                <Typography className='para-1'>
                  Augmented & Virtual Reailty

                </Typography>
                <Typography  className='para-1'> Machine Learning & AI</Typography>
                <Typography  className='para-1'> Internet of Things</Typography>
                <Typography  className='para-1'> Blockchain</Typography>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="flip-card">
              <div className="front card" style={{ display: 'flex', gap: '20px' }}>
                <img src={img16} alt='' style={{ width: '40%' }} />
                <Typography style={{ fontWeight: '700', fontSize: '15px', color: '#007FFF' }} className='para2'>
                  ENTERPRISE DEVELOPMENT
                </Typography>
              </div>
              <div className="back card" style={{ color: '#777777' }}>
                <Typography  className='para-1'>
                  Enterprise Resource Planning

                </Typography>
                <Typography  className='para-1'> Point of Sale</Typography>
                <Typography  className='para-1'> Customer Relation Management
                </Typography>
                <Typography  className='para-1'> Data & Workflow Automation</Typography>
                <Typography  className='para-1'>
                  Quality as a service
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: '20px' }} className='Main-card1'>
          <div className="wrapper">
            <div className="flip-card">
              <div className="front card" style={{ display: 'flex', gap: '20px' }}>
                <img src={img17} alt='' style={{ width: '30%' }} className='' />
                <Typography style={{ fontWeight: '700', fontSize: '15px', color: '#007FFF' }} className='para2'>
                  <span className='para2'> UI UX &
                    THINKING</span>
                </Typography>
              </div>
              <div className="back card" style={{ color: '#777777' }}>
                <Typography  className='para-1'>
                  Branding

                </Typography>
                <Typography  className='para-1'> UX Strategy</Typography>
                <Typography  className='para-1'> Mobile & Web Design
                </Typography>

              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="flip-card">

              <div className="front card" style={{ display: 'flex', gap: '20px' }}>
                <img src={img18} alt='' style={{ width: '30%' }} />
                <Typography style={{ fontWeight: '700', fontSize: '15px', color: '#007FFF' }} className='para2'>
                  WEB TECHNOLOGY DEVELOPMENT
                </Typography>
              </div>
              <div className="back card" style={{ color: '#777777' }}>
                <Typography  className='para-1'>
                  Content Management Systems

                </Typography >
                <Typography  className='para-1'> e-Commerce Platforms</Typography>
                <Typography  className='para-1'> Custom Web Applications</Typography>
                <Typography  className='para-1'>Cloud Architecture Engineering &</Typography>
                <Typography  className='para-1'>Optimization</Typography>

              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="flip-card">
              <div className="front card" style={{ display: 'flex', gap: '20px' }}>
                <img src={img19} alt='' style={{ width: '30%' }} />
                <Typography style={{ fontWeight: '700', fontSize: '15px', color: '#007FFF' }} className='para-1'>
                  MOBILE ENGINEERING
                </Typography>
              </div>
              <div className="back card" style={{ color: '#777777' }}>
                <Typography  className='para-1'>Android Development</Typography>
                <Typography  className='para-1'> iOS Development</Typography>
                <Typography  className='para-1'> React Native Development</Typography>
                <Typography  className='para-1'>Wearable Development</Typography>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Crad