import React,{useEffect,useState} from 'react'
import {useSelector} from "react-redux";
import "./style.css";
import {Row,Col} from "react-bootstrap";
// import {Card} from "react-bootstrap";

export default function OrderSummary() {
    const cart = useSelector(state => state.shopData.cart)

    const state=useSelector(state => state.addressData.selectaddress)
    // const presentAddress=useSelector(state => state.addressData.address)

    const boolied = useSelector(state => state.addressData.verified)
    console.log("order booly",boolied);

    console.log("ORDERED ADDRESS",state);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });
  
      setTotalItems(items);
      setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const style1={
        border:"1px solid black",
        fontWeight:"bold",
        border: "1px solid #BFBFBF",
        padding:"15px",
        backgroundColor: "white",
        boxShadow: "10px 10px 5px #aaaaaa",
        marginTop:"9px"
    }

    const style2={
        fontWeight:"bold",
        textDecoration:"underline",
        color:"blue",
        padding:"15px",
        border: "1px solid #BFBFBF",
        backgroundColor: "white",
        boxShadow: "10px 10px 5px #aaaaaa"
    }

    return (
        <div>
            <h1>Order Summary</h1>
            <Row>  
                
                <Col lg={6} md={6} xs={12}> 
            <div style={{border:"1px solid black"}}>
            
            <h5 style={style2}>User's Address</h5>
            <Row>
                <Col lg={6} md={6} xs={12}>
                <div style={style1}>
                <p><b>First Name :</b>{state.firstName}</p>
                <p><b>Last Name :</b>{state.lastName}</p>
                </div>
                </Col>

                <Col lg={6} md={6} xs={12}>
                <div style={style1}>
                <p><b>Address 1:</b>{state.address1}</p>
                <p><b>Address 2 :</b>{state.address2}</p>
                </div>
                </Col>
                

                <Col lg={12} md={12} xs={12}>
                <div style={style1} >
                <p><b>City :</b>{state.city}</p>
                <p><b>State :</b>{state.state}</p>
                <p><b>Zip Code :</b>{state.zip}</p>
                </div>
                </Col>
            </Row>
            </div>
            </Col> 

            <Col lg={6} md={6} xs={12}>
            <table style={{marginTop:"35px"}}>
                <tr>
                <th>Product Name</th>
                <th>Total </th>
                </tr>
                
            <tr>
            
            {
                cart.map((item)=>(
                    <tr>
                     <td style={{padding:"10px"}}><p><b>Product :</b>{item.title}</p></td>
                   </tr>
                ))
            }   
                <td><p><b>Total Items :</b> {totalItems}</p>
                <hr style={{border:"1px solid black"}}></hr>
                <p><b>Total Price :</b>$ {totalPrice}</p></td>
            
            </tr>
            </table>
            </Col>
            </Row>
        </div>
    )
}
