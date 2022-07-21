import React from 'react'
import { Row } from 'react-bootstrap'
import './Footer.css'
import {BiLogInCircle} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {IoMdGitNetwork} from 'react-icons/io'
import {BsArrowLeft} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'                       
import {BsTelegram} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs'
import {BiCollection} from 'react-icons/bi'
import {MdOutlineTabletAndroid} from 'react-icons/md'

export default function Footer() {
    return (
        <>
        <div className="content m-5">
        <div className="text-1 d-flex justify-content-between align-content-center">
                    <div className=' d-flex align-content-center justify-content-between'>
                        <button className="btn1">ورود <BiLogInCircle style={{fontSize:'1.5rem'}}/></button>
                        <button className="btn2">ثبت نام <BiUserCircle style={{fontSize:'1.5rem'}}/></button>
                    </div>

                    {/* <div className="log text-center">wikitich</div> */}
                  </div>
            <Row>
              <div className="container d-flex">
            
              <div className="col-7 d-flex justify-content-start">
            <div className="col-site col-lg-4">
            <ul className="list1">
                
                <li><MdOutlineTabletAndroid style={{fontSize:'1.5rem',color:'#ED0080'}}/> ارتباط با ما</li>
                <li style={{color:'#ED0080'}}>واتساپ</li>
                <li>اینستاگرام</li>
                <li style={{color:'#ED0080'}}>تلگرام</li>
                <li>تماس</li>
            </ul>
            </div>
            
            
            
            <div className="col-site col-lg-4">
            <ul className="list1">
                
                <li><BiCollection style={{fontSize:'1.5rem',color:'#ED0080'}}/> بخش های سایت</li>
                <li>قوانین مقرارت</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>ثبت نام</li>
            </ul>
            </div>



              </div>




                <div className="col-lg-5 col-sm-12">
                   <div className="text" style={{textAlign:'right'}}>
                   <h5 style={{direction:'rtl',lineHeight:'40px',fontSize:'1.1rem',marginBottom:'20px'}}>من معتقدم یه برنامه‌نویس موفق باید به طور مداوم فرآیند یادگیری رو ادامه بده. بنابراین سعی می‌کنم هر روز چیزهای بیشتری یاد بگیرم و توانایی اجرایی بیشتری داشته باشم و در حد توانم به افرادی که در حال شروع یا رشد تو این مسیر هستند؛ کمک کنم.</h5>
                    <span style={{color:'#ED0080'}}><BsArrowLeft style={{marginRight:'15px',fontSize:'1.5rem'}}/>  از کجا شروع کنیم<IoMdGitNetwork style={{marginLeft:'15px',fontSize:'1.5rem',color:'#ED0080'}}/></span>
                    <div className="logNet d-flex justify-content-end mt-4">
                        <span className="m-3"><AiFillInstagram style={{fontSize:'1.6rem'}}/></span>
                        <span className="m-3"><RiWhatsappFill style={{fontSize:'1.6rem'}}/></span>
                        <span className="m-3"><BsLinkedin style={{fontSize:'1.6rem'}}/></span>
                        <span className="m-3"><BsTelegram style={{fontSize:'1.6rem'}}/></span>
                    </div>
                   </div>
                    </div>
              </div>
            </Row>
            <h6 className="mtn text-center m-5">کیله حقوق مادی و معنوی این وبسایت مطعلق به ورزش سمبکالا میباشد</h6>
        </div>
        </>
    )
}
