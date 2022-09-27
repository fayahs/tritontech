import { Button,  Typography } from "@material-ui/core";
import React from "react";
import '../Styles/Service.css';
import Crad from "../Background/Card";

function Service(){
    return(
        <div className="Service-main">
               <div className='About-content-empty-header'  style={{minHeight:'100px'}}>
      </div>
      <div className="Service-main-hr">
            <div className="Service-main-hr-content1">
              <Button style={{textTransform:'none',width:'10%',borderRadius:'10px',fontSize:'24px',color:'#007FFF'}} >
                Service
              </Button>
            
              <Typography variant="h5" className="para-main">
              what can we do for you?
              </Typography>
            </div>
            <div className="Service-main-hr-content2">
               <Crad/>
            </div>
      </div>
            </div>


    )
}
export default Service