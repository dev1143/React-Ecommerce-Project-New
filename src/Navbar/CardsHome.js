import React from 'react'
import {Card} from "react-bootstrap";

 function CardsHome() {
    return (
        <div>
        <Card style={{card},{alignItems:"center"}}>
        <i style={style} class="fab fa-opencart"></i>
        <Card.Body>
        <Card.Title>Open Cart</Card.Title>
        <Card.Text style={{textAlign:"center"},{fontSize:'20px'}}>
         Delivery at your door Steps.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}

const style={
    fontSize:"60px",
    marginTop:"20px",
    color:"#8ab6d6"
}
const card={
    width:"18rem",
    border:"1px solid black",
    borderRadius:'25px',
    
}

 function CardsHome1() {
    return (
        <div >
        <Card style={{card},{alignItems:"center"}}>
        <i style={style} class="fas fa-cash-register"></i>
        <Card.Body>
        <Card.Title>Shopping</Card.Title>
        <Card.Text style={{textAlign:"center"},{fontSize:'20px'}}>
        Each User Can Register.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}

function CardsHome2() {
    return (
        <div>
        <Card style={{card},{alignItems:"center"}}>
        <i style={style} class="fas fa-truck-loading"></i>
        <Card.Body>
        <Card.Title>Cart</Card.Title>
        <Card.Text style={{textAlign:"center"},{fontSize:'20px'}}>
         Products Delievery
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}
export {CardsHome,CardsHome1,CardsHome2}