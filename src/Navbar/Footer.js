import React from 'react'
import {Row,Col} from "react-bootstrap";

export default function Footer() {

    const style={
        display:'flex',
        justifyContent:'space-between',
        padding: "5%",
        backgroundColor:'black',
        color:'white',
        marginTop:'10px',
        
    }
    const style1={
        listStyleType:"none",
        textAlign:'left'
    }
    return (
        <div style={style}>
            <Row>
                
                <Col lg={3} md={3} xs={12}>
            <ul  style={style1}>
                <h3 style={{textDecoration:"underline"}}>About the Store</h3>
                <li><a href="#home">About Us</a></li>
                <li><a href="#home">Contact</a></li>
                <li><a href="#home">Q&A</a></li>
                <li><a href="#home">Supply</a></li>
            </ul>
            </Col>

            <Col lg={3} md={3} xs={12}>
            <ul style={style1}>
                <h3 style={{textDecoration:"underline"}}>Quick Link</h3>
                <li>INFO</li>
                <li>Know More</li>
                <li>One of the most popular on the web is shopping.</li>
                <li>Wonder Street, New Barrckpore</li>
            </ul>
            </Col>
            <Col lg={3} md={3} xs={12}>
            <ul style={style1}>
                <h3 style={{textDecoration:"underline"}}>Customer Support</h3>
                <li><a href="#home">My Account</a></li>
                <li><a href="#home">Shop Now</a></li>
                <li><a href="#home">Order Tracking</a></li>
                <li><a href="#home">Help & Support</a></li>
            </ul>
            </Col>

            <Col lg={3} md={3} xs={12}>
            <ul style={style1}>
                <h3 style={{textDecoration:"underline"}}>News Letter</h3>
                <li>To get the latest news and latest updates from us.</li>
                <li>Our E-mail Address</li>
                <li>assssss</li>
            </ul>
            </Col>
            {/* <hr style={{borderColor:'white'}}/> */}
            </Row>
        </div>
    )
}
