
import react from 'react'
import { Media } from 'reactstrap'


 
 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

function Showcard({dish}){
const menu = dish.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                {/* //   onClick={() => props.onClick(dish.id)} */}
                  <CardImg width="60%" src={dish.image} alt={dish.name} />
                  <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}
                      </CardText>
                  </CardBody>
                </Card>
              </div>
            );
        });
    return(
<div className="container">
                <div className="row">
                    {menu}
                </div>
               
            </div>
    );
}


function MenuComponent ({dish}) {
 

        return (
            <Showcard dish={dish} />
            // onClick={props.onClick}
        );
    
}

 
 


export default MenuComponent;
