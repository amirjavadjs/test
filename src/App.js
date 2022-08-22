// import React, { Component } from 'react'
// import './App.css'
// import Menu from './component/Menu'    
// import Brand from './component/Brand'    
// import Slider from './component/Slider'    
// import Blog from './component/Blog'    
// import Text from './component/Text'    

// export default class App extends Component {
//   render() {
//     return (
//       <>
//        <div className="star">
//          <Menu/>
//          <Slider/>
//          <Brand/>
//          <Blog/>
//          <Text/>
//        </div>
//       </>
//     )
//   }
// }
import './App.css'
import Menu from './component/Menu'    
import Homs from './component/Homs'
import Footer from './component/Footer'  
import Aboutus from './component/Aboutus'  
import Map from './component/Map'  
import Sabtnam from './component/Sabtnam'  
import Callmi from './component/Callmi'  
import React from "react";
import {Route,Switch } from 'react-router-dom'
import Login from './component/Login'
// عدد حجم توده بدن = (وزن بر حسب کیلوگرم) تقسیم بر (قد بر حسب متر به توان ۲)


function App() {
 
  return( <div className="star">
   
    <Menu/>
    
    <Switch>
    <Route path="/Login" component={Login}/>
    <Route path="/Aboutus" component={Aboutus}/>
    <Route path="/call" component={Callmi}/>
    <Route path="/map" component={Map}/>
    <Route path="/sab" component={Sabtnam}/>
    <Route path="/" component={Homs}/>
    
   </Switch>
    <Footer/>
    
    
    
    </div>
  )
  
}
export default App;