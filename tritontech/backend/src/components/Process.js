import React from 'react'
// import '../Styles/Process.css';
import '../Styles/Process.css';
import {  Typography } from '@material-ui/core';

import img4 from '../images/3dicons.png'
import img5 from '../images/share-2.png'
import img6 from '../images/cloud-development.png'
import img7 from '../images/icon3.png'
import {BsDot} from 'react-icons/bs'
import {BiDotsVerticalRounded} from 'react-icons/bi'


function Process() {
  return (
    <div className='Process'>
        
        <div className='processer-content-hr'>
        <div className='About-content-empty-header' >
      </div>
      <div className='Process-main'>
        
            <div className='content-circle'>
                 <div className='process-circle' style={{background:'#ffffff'}}>
                   <img src={img4} alt='' style={{width:'50%',height:'50%'}}/>

                 </div>
                 <div className='process-circle' style={{background:'#ffffff'}}>
                 <img src={img5} alt='' style={{width:'50%',height:'50%'}}/>
            </div>
         <div className='process-circle'style={{background:'#ffffff'}}>
         <img src={img6} alt='' style={{width:'50%',height:'50%'}}/>
           </div>
           <div className='process-circle' style={{background:'#ffffff'}}>
           <img src={img7} alt='' style={{width:'50%',height:'50%'}}/>
             </div>
            </div>
            <div className='process-icon'>
               <div className='process-icon-content'>
                <BsDot size={40}/>
                     <BiDotsVerticalRounded size={30} />
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
               </div>
               <div className='process-icon-content'>
               <BsDot size={40}/>
                     <BiDotsVerticalRounded size={30} />
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
</div>
<div className='process-icon-content'>
<BsDot size={40}/>
                     <BiDotsVerticalRounded size={30} />
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
</div>
<div className='process-icon-content'>
<BsDot size={40}/>
                     <BiDotsVerticalRounded size={30} />
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>
                     <BiDotsVerticalRounded size={30}/>

</div>
            </div>
            <div className='process-heading'>
               <Typography variant='h6' style={{marginRight:'60px'}} >
                Discovery & Analysis
               </Typography>
               <Typography variant='h6' style={{marginRight:'60px'}}>
               Architecture Design
               </Typography>
               <Typography variant='h6' style={{marginRight:'60px'}}>
               Development & QA
               </Typography>
               <Typography variant='h6'style={{marginRight:'60px'}}>
                Release
               </Typography>
            </div>
           </div>
        </div>
        </div>
  )
}

export default Process