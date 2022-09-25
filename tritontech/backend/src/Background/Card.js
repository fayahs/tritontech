import './Background.css'
import img8 from '../images/triron5.png'
import img9 from '../images/mobile-package-tracking.png' 
import img10 from '../images/web.png'
import img11 from '../images/web-shield.png'
import img12 from '../images/database.png'
import img13 from '../images/stack.png'
import { Typography } from '@material-ui/core'
const Crad=()=>{
    return(
      <>
        <div className="container2">

        <div className="card">
          <div className="face face1">
            <div className="content"> 
              <span className="stars"></span>
              <Typography >
              Strategy consulting and Branding
              </Typography>
            </div>
          </div>
          <div className="face face2">
            <img src={img8} alt='' style={{width:'50%',height:'50%'}} className='card-img'/>
          </div>
        </div>
      
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <Typography  >
              Mobile Apps
              </Typography>
            </div>
          </div>
          <div className="face face2">
          <img src={img9} alt='' style={{width:'50%',height:'50%'}} className='card-img'/>
          </div>
        </div>
      
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <Typography  >
              Website Development
              </Typography>
            </div>
          </div>
          <div className="face face2">
          <img src={img10} alt='' style={{width:'50%',height:'50%'}} className='card-img'/>
          </div>
        </div>
        
      </div>
      <div className='container3'>
      <div className="container2">

<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
                Frameworks & Marketing
    </div>
  </div>
  <div className="face face2">
  <img src={img11} alt='' style={{width:'50%',height:'50%'}} className='card-img'/>
  </div>
</div>

<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <Typography>
        Cloud And Devops
      </Typography>

    </div>
  </div>
  <div className="face face2">
  <img src={img12} alt='' style={{width:'50%',height:'50%'}} className='card-img'/>
  </div>
</div>

<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <Typography>
        Mean stack Development
      </Typography>
    </div>
  </div>
  <div className="face face2">
  <img src={img13} alt='' style={{width:'50%',height:'50%'}} className='card-img'/>
  </div>
</div>

</div>
</div>
      </>
    )
}
export default Crad