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
import Brand from './component/Brand'    
import Slider from './component/Slider'    
import Blog from './component/Blog'    
import Text from './component/Text'    
import Footer from './component/Footer'    
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <div className="star">
    
    <div data-aos="fade-up"><Menu/></div>
    <div data-aos="fade-right"> <Slider/></div>
    <div data-aos="fade-left"><Brand/></div>
    <div data-aos="fade-up-right"><Blog/></div>
    <div data-aos="fade-up-left"><Text/></div>
    <div><Footer/></div>
   
    
    
    
    </div>
  
  
}
export default App;