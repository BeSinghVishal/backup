
import react ,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from './MenuComponent';
import { dishes } from './dishes';
import DishdetailComponent from './DishdetailComponent';



class Main extends Component {
  constructor(props)
  {
super(props);
this.state={
  // diss:dishes,
selectedDish: null
};
  }

  renderDish(id) {
        this.setState({
selectedDish:id
        });
        
    }
    display()
    {
      if(this.state.selectedDish!=null)
      {return(
    <div>
    <DishdetailComponent valu={dishes.filter((dishes)=>dishes.id===this.state.selectedDish)[0]}/>
    </div>
     ); }
     else {
       return(
         <div>
           </div>
       );

     }
    }

    render(){
  return (
    <div >

      <Navbar dark color="primary">
        <div className="container">

          <NavbarBrand href="/">bootstrap illea</NavbarBrand>
        </div>
      </Navbar>
      <div className="row">
      <MenuComponent dish={dishes} onClick={(id)=> this.renderDish(id)}/>
     
    </div>
    {this.display()}
    </div>
      
 
 
  );
  
}
}
export default Main;



