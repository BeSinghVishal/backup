
import react ,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from './MenuComponent';
import { dishes } from '../resrs/dishes';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';



class Main extends Component {
  constructor(props)
  {
super(props);
this.state={
  // diss:dishes,
selectedDish: dishes
};
  }

//   renderDish(id) {
//         this.setState({
// selectedDish:id;
//         });
        
//     }
    // display()
    // {
    //   if(this.state.selectedDish!=null)
    //   {return(
    // <div>
    // <DishdetailComponent valu={dishes.filter((dishes)=>dishes.id===this.state.selectedDish)[0]}/>
    // </div>
    //  ); }
    //  else {
    //    return(
    //      <div>
    //        </div>
    //    );

    //  }
    // }

    render(){
  return (
    <div >

      {/* <Navbar dark color="primary">
        <div className="container">

          <NavbarBrand href="/">bootstrap illea</NavbarBrand>
        </div>
      </Navbar> */}
      {/* {this.display()} */}
     
      <Header/>
       <Switch>
<Route path="/menu" component={() => <MenuComponent dish={dishes}/>}/>
<Route exact path="/home" component={()=><Home/>}/>
<Redirect to="/home"/>
       </Switch>
    <Footer/>
    </div>
      

 
 
  );
  
}
}
export default Main;



