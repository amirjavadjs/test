import React from "react";
import img9 from "../img/9.png";
import './Callmi.css'
import Brand from './Brand.js'
import Slider from './Slider'
export default function Callmi() {
  return (
    <div>
      <div className=" container">
        <div className=" row">
          <div className="col-6 d-flex ">
            <img src={img9} className=" img-fluid" />
          </div>
          <div className="col-6 d-flex align-content-center text- justify-content-center my-auto mr-3 ">
            راه های ارتباطی و<br />
            تماس با ما
          </div>

        </div>

<div className=" container">
    <div className="row">
     <div className=" col-12 d-flex flex-wrap">
     <section className="col-3 ">
       
            <a href="#">     <button className=" p-3  rounded bu   btn-danger">تماس </button></a>
        </section>

        <section className="col-3">
            
            <a href="#"><button className=" p-3    rounded bu   btn-danger">ایاگرام</button></a>
        </section>

        <section className="col-3">
        
            <a href="#">    <button className=" p-3  rounded bu   btn-danger">تلگرام</button></a>
        </section>

        <section className="col-3">
        
            <a href="#">    <button className=" p-3  rounded bu   btn-danger">واتساپ</button></a>
        </section>
     </div>
    </div>
</div>
      </div>
      <Slider/>
      <br/>

<div className=" container">
    <div className=" row">
        <div className=" col-lg-12 form-call d-flex flex-column p-3">
            <div className="text-form0">
                <h5 className=" text-white text-center"> با ما در ارتباط باشید</h5>
            </div>
            
            <div className=" input-call0 d-flex m-3  flex-wrap mx-auto ">
                <input className="input-aa input-c p-3 m-2 mx-auto col-lg-3  order-2" placeholder="عنوان دیدگاه"/>
                <input className="input-aa input-c p-3 m-2 mx-auto col-lg-3  order-1" placeholder="دیدگاه برای ؟"/>
                <input className="input-aa input-c p-3 m-2 mx-auto col-lg-3  order-3" placeholder="نام و نام خانوادگی"/>
            </div>
            <textarea className="text-call-0 p-3 ">
                دیدگاه شما از وبسایت ما ...
            </textarea>
          
        <button className=" col-2 mx-auto m-3 btn-0 p-2">ارسال</button>
        </div>
    </div>
</div>

      <Brand/>
      <br/>

    </div>
  );
}
