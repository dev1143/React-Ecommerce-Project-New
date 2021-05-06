import React from 'react'
// import styles from "./Single_item.module.css";
import {useSelector,useDispatch} from "react-redux";
import {Card,Button,Container,Row,Col} from "react-bootstrap";
import {addToCart} from "../Shopping/ShoppingAction";
import Footer from "../Navbar/Footer";


export default function Singleitem() {
    const state = useSelector(state => state.shopData.singleData)
    const state1 = useSelector(state => state.shopData)
    console.log(state1);

    const dispatch=useDispatch()

    console.log("SINGLE DATA",state);

    const handler=(itemId)=>{
        dispatch(addToCart(itemId))
    }

    const style2={
        width:"300px",
        height:"300px"
    }
    const style3={
        display:"flex",
        justifyContents:"space-between"
    }

    return (
        <div>
        <Container>
        <Card style={style3}>

        <Row>
        <Col lg={6} md={12} xs={12}><Card.Img variant="top" style={style2} src={state.image} /></Col>
        <Col lg={6} md={12} xs={12}>
        <Card.Text>
            <h2>{state.category}</h2>
        </Card.Text>
        <Card.Text>
        {state.description}
        </Card.Text>
        <Card.Text>
        <b>${state.price}</b>
        </Card.Text>
        <Button  onClick={()=>handler(state.id)} variant="primary">Add to Cart</Button>
        </Col>
        </Row>
        </Card>        
        </Container> 
        <Footer/>             
        </div>
    )
}





            // <Container>
            // <div className={styles.singleItem}>
            // <Card.Img variant="top" className={styles.singleItem__image} src={state.image} />
        
            // <div className={styles.singleItem__details}>
            // <p className={styles.details__description}>
            // {state.category}
            // </p>
            // <p className={styles.details__title}>{state.title}</p>
            // <p className={styles.details_price}>${state.price}</p>
            // </div>

            // <Button style={style1} onClick={()=>handler(state.id)}variant="primary">Add to cart</Button>
            
            // </div>
            // </Container>   