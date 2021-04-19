
import react from 'react'
import { Media } from 'reactstrap'


 
 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

function Showcard(props){
const menu = props.dish.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
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


function MenuComponent (props) {

    


    

   
        

        return (
            <Showcard dish={props.dish} onClick={props.onClick}/>
        );
    
}

 
 


export default MenuComponent;