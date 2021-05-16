
//import react from 'react';
import './App.css';
import Main from './componentss/Maincomponent'
import {BrowserRouter} from 'react-router-dom';




function App() {
  /* constructor(props) {
     super(props);
     this.state = {
       DISHES: dishes
     };
   }*/                         //....not applicable since app is defined as function()

  //const data = { DISHES: dishes };
  return (
    <div className="App">

   <BrowserRouter>
   <Main/>
   </BrowserRouter>   


    </div>
  );

}

export default App;
