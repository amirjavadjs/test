import React from "react";
import img3 from "../img/s.webp";
import "./Sabtnam.css";
export default function Sabtnam() {
  return (
    <div>
      <div className=" container">
        <div className=" row">
          <div className="col-6 d-flex ">
            <img src={img3} className=" img-fluid" />
          </div>
          <div className="col-6 d-flex align-content-center text--- justify-content-center my-auto mr-3  ">
            ثبت نام در کلاس ها{" "}
          </div>
        </div>

        {/* تکمیل فرم کارت ملی کپی بک قفطعه عکس 3*4 */}
      </div>
  
      <div className=" row p-4">
        <div className="col-lg-11 col-sm-10  mx-auto form-1 p-3 my-5 ">
          <h6 className=" text-center text-white p-3" >شرایط ثبت نام </h6>
          <div className="text-form p-2 my-4">
            شرایط ثبت نام :سن <span className="text-danger">+14</span> سال ورزشکار باید فاقد هرگونه<span className="text-danger"> بیماری</span> قلبی
            جسمانی باشدو از هرگونه بیماری و موانع برای ورزش سنگین به دور
            باشد/<span className="text-danger">قلبی</span> /<span className="text-danger"> تنفسی</span>
          </div>

          <h6 className="text-center text-success p-3">مدارک لازم ثبت نام</h6>
          <div className="d-flex justify-content-between">
            <div className=" col-3 section-form p-2 my-4 text-center">کپی کارت ملی /شناسنامه</div>
            <div className=" col-3 section-form p-2 my-4 text-center">یک قطعه عکس 3*4</div>
            <div className=" col-3 section-form p-2 my-4 text-center">تکمیل فرم ثبت نام</div>
          </div>
          <h6 className="text-center text-warning p-3 ">قبل از ثبت نام مطالعه فرمایید</h6>

          <div className=" text-form-2 col-lg-12 my-4">

            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
            حال و آینده درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
            حال و آینده درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
            حال و آینده درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
            حال و آینده درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
            حال و آینده درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
            حال و آینده درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
            حال و آینده درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
            حال و آینده درصد گذشته حال و آینده درصد گذشته حال و آینده درصد گذشته
          </div>
          
          <h6 className="text-center text-danger p-2 ">!! اخطار</h6>
          <div className="text-form p-2 my-5 ">
            شرایط که مانع ثبت نام است :سن +14 سال ورزشکار باید فاقد هرگونه بیماری قلبی
            جسمانی باشدو از هرگونه بیماری و موانع برای ورزش سنگین باشد/قلبی /
          </div>
        </div>
        
      </div>
    </div>
  );
}
