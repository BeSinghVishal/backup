import { render } from '@testing-library/react';
import react, { Component, useDebugValue } from 'react'

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap'



function DishdetailComponent(props) {


    
const lst=props.valu.comments.map(itmm=>{
return(
        <CardBody>
                    <span> {itmm.comment} </span>
                    <br></br>
                     <span>...{itmm.author}.....{itmm.date} </span>
                    </CardBody>        
               
);
});       


       

        return (
            <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                <Card key={props.valu.id}
                  >
                  <CardImg width="100%" src={props.valu.image} alt={props.valu.name} />
                  
                 <CardBody>
                     <CardTitle>{props.valu.name}</CardTitle>
                     {props.valu.description}
                     </CardBody>
                </Card>
              </div>
              <div  className="col-12 col-md-5 m-1">
                  <Card>
                    <h3>Comments</h3>
                {lst}
                     </Card>
              </div>
            </div >
</div>
        );
    

}

export default DishdetailComponent;