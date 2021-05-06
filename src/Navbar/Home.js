import React,{useEffect} from 'react'
import Background from '../images/ecommerce.jpg';
import {useDispatch,useSelector} from "react-redux";
import {Card,Button,Container,Row,Col,Carousel} from "react-bootstrap";
import {ProductCategory,ProductHome,addToHomeCart} from "../Shopping/ShoppingAction";
import {Products} from "../Shopping/ShoppingAction";
import { useHistory } from 'react-router';
import {CardsHome,CardsHome1,CardsHome2} from './CardsHome';
import {Categories} from "../Products/Catergory.json";
import {HomeImage} from "./Carousel.json";
import Footer from "../Navbar/Footer";
import "./style.css"

export default function Home() {
    const dispatch=useDispatch()
    const history=useHistory()

    const state = useSelector(state => state.shopData.category)

    const homeState = useSelector(state => state.shopData.productHome)
    console.log("OUR PRODUCTS",homeState);

    useEffect(() => {
        dispatch(ProductHome())    
    }, [dispatch])
    

    useEffect(() => {
       dispatch(ProductCategory())
    }, [dispatch])

    const handler=(props)=>{
        dispatch(Products(props))
        history.push(`/product/category/${props}`)
    }

     const handlerCart=(itemId)=>{
        dispatch(addToHomeCart(itemId))
    }

    const imageStyle={
        height:"200px",
        width:"200px",
    }


    return (
        <div>
            <img style={{width:"100%"}} alt="cannot render" src={Background}></img> 
            <Container>
            <section id="#products category">
                
                    <div style={{marginTop:"40px"}}>
                    <h3 style={{textAlign:"center"},{padding:"5px 0px"}}>Shopping Features</h3>
                    <Row>
                    <Col lg={4} md={4} xs={12}><CardsHome/></Col>
                    <Col lg={4} md={4} xs={12}><CardsHome1/></Col>
                    <Col lg={4} md={4} xs={12}><CardsHome2/></Col>
                   </Row>
                   </div>
                
            </section>

            
            <section>
                <h3 style={{marginTop:"10px"}}>Products Category</h3>
            <Row>      
            {
                state.map((d)=>(
                    <Col lg={3} md={3} xs={12}>
                    <Card className="style-category">

                        {Categories.map((pro)=>(
                            <Card.Img  variant="top" src={pro.image} />
                        ))}
                    
                    <Card.Body>
                    <Card.Title>{d}</Card.Title>
                    <Button onClick={()=>handler(d)} variant="primary">View</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                ))
            }
            </Row>
            </section>

            <section id="Our Products">
                <h1>OUR PRODUCTS</h1>
                <Row>
                {
                    homeState.map((home)=>(
                        <Col lg={3} md={3} xs={12}>
                        <Card style={{ width: '14rem' },{alignItems:"center"}}>
                        <Card.Img variant="top" style={imageStyle} src={home.image} />
                        <Card.Body>
                        <p style={{fontSize:'15px'}} >{home.title}</p>
                        <Button variant="primary" onClick={()=>handlerCart(home.id)}>Add to Cart</Button>
                        </Card.Body>
                        </Card>
                        </Col>
                    ))
                }
                </Row>
                
            </section>
            </Container>


            <section id="#carousel">
                <div>
            { HomeImage.map((d)=>(   
                <Carousel fade  interval="1000">
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={d.image}
                alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={d.image1}
                 alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                 <img
                 className="d-block w-100"
                 src={d.image2}
                 alt="Third slide"
                 />
                </Carousel.Item>
                </Carousel>
                ))}
                </div>
            </section>
            
        <Footer/>
        
        </div>
    )
}
