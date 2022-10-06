import { Button,  Typography } from "@material-ui/core";
import React from "react";
import '../Styles/Service.css';
import Crad from "../Background/Card";

function Service(){
    return(
        <div className="Service-main">
      
      <div className="Service-main-hr">
            <div className="Service-main-hr-content1">
             
            </div>
            <div className="Service-main-hr-content2">
            <Typography variant='h4' component='h2' className="con-head">
                <span className='paragraph11' style={{color:'#007fff'}} >What Can We Do For You?</span>
              </Typography>
           
               <Crad/>
            </div>
      </div>
            </div>


    )
}
export default Service