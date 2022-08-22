import React, { Component } from 'react'
import './Brand.css'
import img1 from '../img/g.webp'
import img2 from '../img/l.webp'
import img3 from '../img/s.webp'
import img4 from '../img/m.webp'
import { Link } from 'react-router-dom'
export default class Brand extends Component {
    render() {
        return (
            <div className="containerr">
             <div>
             <img src={img1}/>
             <h6 style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"12px",color:"#fff"}}>قوانین</h6>
             </div>

             <div>
             <img src={img2}/>
             <h6 style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",color:"#fff"}}>نوع لباس</h6>
             </div>

             <div>
             <Link to="/sab"> <img src={img3}/></Link>
             
             <h6 style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",color:"#fff"}}>شرایط ثبت نام</h6>
             </div>

             <div>
            
             <Link to="/map"> <img src={img4}/></Link>

             <h6 style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",color:"#fff"}}>آدرس کلاس ها</h6>
             </div>
               
            </div>
        )
    }
}
