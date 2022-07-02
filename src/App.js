import React, { Component } from 'react'
import './App.css'
import Menu from './component/Menu'  
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import {Button,card, CardImg} from 'react-bootstrap'
export default class App extends Component {
  render() {
    return (
      <>
       <div className="star">
         <Menu/>
       </div>
      </>
    )
  }
}
