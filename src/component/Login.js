import React from 'react'
import './Login.css'
import login from '../img/login.webp';
export default function Login() {
    return (
        <div>
         <div className=" container">
             <div className="row">
             <div className="img- d-flex justify-content-center align-content-center">
              <img src={login}/>
          </div>
            <div className=" col-5">
            <div className="in m-5">
                 
                 <input className="input-01" placeholder="شماره تلفن"/>
                 <input className="input-02" placeholder="نام و نام خانوادگی"/>
                  <button className=" button-11 ">ارسال</button>
                 </div>
            </div>
             </div>
         </div>
             </div>
    )
}
