import React, { Component } from 'react'
import './Blog.css'
import img3 from '../img/6.png'
import img4 from '../img/7.webp'
import img5 from '../img/6.png'
import {Card,Button,Row,Col,Container} from 'react-bootstrap'
export default class Blog extends Component {
    render() {
        return (
       
       <>
    <div className="container col-12 mx-auto">
<div className="card-1 col-lg-4 col-md-6 mx-auto ">
<Card className="amir" style={{ width: '20rem',borderRadius:'10px',background:'rgba(255,255,255,.05)', border:'1px solid #ed0080',boxShadow: '0 0 20px rgb(237 0 128 / 50%)'}}>
  <Card.Img variant="top" src={img3} />
  <Card.Body style={{direction:"rtl"}}>
    <Card.Title>سلامتی و ورزش</Card.Title>
    <Card.Text>
      سلامتی در ورزش ونکات اسولی که در ورزش رزمی سمبکالا به آن  می پردازیم ...
    </Card.Text>
    <button className="btn1">بیشتر بخوانید</button>
  </Card.Body>
</Card>
</div>

<div className="card-1 col-lg-4 col-md-6 mx-auto">
<Card className="amir" style={{ width: '20rem',borderRadius:'10px',background:'rgba(255,255,255,.05)', border:'1px solid #ed0080',boxShadow: '0 0 20px rgb(237 0 128 / 50%)' }}>
  <Card.Img variant="top" src={img4} />
  <Card.Body style={{direction:"rtl"}}>
    <Card.Title>رده در سمبکالاه</Card.Title>
    <Card.Text>
رده ها در سمبکالاه به نوع جالب و زیبا است که در این مقاله به آن می پردازیم ...
    </Card.Text>
    <button className="btn1">بیشتر بخوانید</button>
  </Card.Body>
</Card>
</div>

<div  className="card-1 col-lg-3 col-md-6 mx-auto ">
<Card className="amir" style={{ width: '20rem',borderRadius:'10px',background:'rgba(255,255,255,.05)', border:'1px solid #ed0080',boxShadow: '0 0 20px rgb(237 0 128 / 50%)'}}>
  <Card.Img variant="top" src={img5} />
  <Card.Body style={{direction:"rtl"}}>
    <Card.Title>سلاح در سمبکالاه</Card.Title>
    <Card.Text>
    در ورزش رزمی سمبکالاه ما از سلاح های زیادی استفاده میکنیم که در این ...
    </Card.Text>
    <button className="btn1">بیشتر بخوانید</button>
  </Card.Body>
</Card>
</div>


    </div>
            </>
        )
    }
}
