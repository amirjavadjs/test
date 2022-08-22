import React, { Component } from 'react'
import logo from '../img/logo.png'
import  './Menu.css'
import { Link } from 'react-router-dom'
import {BiPhoneCall} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiLogInCircle} from 'react-icons/bi'
import {BsArrowLeft} from 'react-icons/bs'
import {IoMdGitNetwork} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'                       
import {BsTelegram} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import {TbArrowsMaximize} from 'react-icons/tb'
import styled from 'styled-components'
import {CgMenu} from 'react-icons/cg'


export default class Menu extends Component {
    constructor(){
        super();
        this.state={
            open:false,
        }
    }

    
    show=()=>{
        this.setState({
            open:!this.state.open,
        })
    }
    noshow=()=>{
        this.setState({
            open:!this.state.open,
        })
         
    }

    

    render() {
        const DIV =styled.div`
        @media (max-width: 1200px) {
             ul{
                 z-index:20;
                position: absolute;
                top: 0px;
                right: 0px;
    display:${this.state.open ? "flex" : "none"};
  
    transition: 0.3 all ;
    background:#000;
    z-index:25;
                flex-direction: column;
                width: 300px;
                height: 100vh;
                justify-content: center;
                align-items: center;
            }
          
            li{
                text-align:center;
                background-color:#ED0080;width: 100px;
                
padding: 5px 5px;
border-radius: 10px;
                margin-top: 70px;
            }
                 span{
                margin-bottom: 100px;
            }
       
            .berger span{
                display: flex;
            }
        }
        `
     
        return (
            <>
             <div className="header">
             
                 <div className="call">
                     <span className="calli"> <BiPhoneCall  siz="1rem"/></span> <span className="number">09151330015</span>
                   <div className="instagram">
                        <ul>
                            <li><span> <AiFillInstagram/></span> </li>
                            {/* <li><span> <BiLogInCircle/></span> </li> */}
                            <li><span> <BsTelegram/></span> </li>
                            <li><span> <RiWhatsappFill/></span> </li>
                            <li className="phon"><span> <BiPhoneCall /></span> </li>
                        </ul>
                   </div>
                 </div>
                 <div className="logo2">
                <img src={logo}/>
                </div>
                 <DIV className="list">
                     <ul>
                         <h1 className="x"  onClick={this.noshow} style={{color:"#FFF  "}}><TbArrowsMaximize/></h1>
<li><Link className="text-link" to="/Aboutus">درباره ما</Link></li>
<li><Link className="text-link" to="/call">تماس با ما</Link></li>
<li><Link className="text-link" to="/sab">ثبت نام </Link></li>
<li><Link className="text-link" to="/map">شهر ها</Link></li>
<li><Link className="text-link" to="/">خانه</Link></li>
                       
                     </ul>
                 </DIV>

                 
               

                <div className="logo">
                <img src={logo}/>
                </div>

                <div className="berger">
                <span onClick={this.show}> <CgMenu/></span>
                </div>
            </div>   
            </>
        )
    }
}
