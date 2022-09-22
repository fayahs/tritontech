import { Button, Card, Typography } from "@material-ui/core";
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
              <Button style={{textTransform:'none',width:'10%',borderRadius:'10px',color:'#90ee90',fontSize:'20px'}}>
                Service
              </Button>
              <Typography variant="h4">
              We ship success every day .
              </Typography>
              <Typography variant="h5">
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