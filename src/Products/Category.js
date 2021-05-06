import React,{useEffect} from 'react'
import {Card,Button,Row,Col,Container} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {ProductCategory} from "../Shopping/ShoppingAction"
import {Products} from "../Shopping/ShoppingAction";
import {useHistory} from "react-router-dom";
import {Categories} from "./Catergory.json";
import Footer from "../Navbar/Footer";




export default function Category() {
    const dispatch=useDispatch()
    const history=useHistory()

    const state = useSelector(state => state.shopData)
    console.log(state);
    
    const state1=state.category

    console.log(state1);

    const handler=(props)=>{
        dispatch(Products(props))
        history.push(`/product/category/${props}`)
    }

    useEffect(() => {
        dispatch( ProductCategory())
    }, [dispatch])

    return (
        <div>
                <Container>
                <Row>
            {
                state1.map((prod)=>(
                   
                    <Col lg={4} md={4} xs={12}>
                    <Card style={{marginTop:'10px'}}>
                    {Categories.map((d)=>(
                        <Card.Img variant="top" src={d.image}/>
                    ))}
                    
                    <Card.Body>
                    <Card.Title>{prod}</Card.Title>
                    <Button onClick={()=>handler(prod)} variant="primary">View Products</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                   
                ))
            }
            </Row>
            </Container>
            <Footer/>
        </div>
    )
}
