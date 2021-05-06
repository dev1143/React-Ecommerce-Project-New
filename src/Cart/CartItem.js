import React,{useState} from 'react'
import {Button} from "react-bootstrap";
import {removeFromCart} from "../Shopping/ShoppingAction";
import {adjustquantity} from "../Shopping/ShoppingAction";
import {useDispatch} from "react-redux";
import {Row,Col} from "react-bootstrap";
import styles from "./CartItem.module.css";

export default function CartItem({item}) {
    const dispatch=useDispatch()
    // const state = useSelector(state => state.state)
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustquantity(item.id, e.target.value));
      };

         const handler=(itemId)=>{
             dispatch(removeFromCart(itemId))
         }

    return (
        <Row>
        <div className={styles.actual_item}>
                    <Row>
                    <Col lg={6} md={6} xs={12}>
                    <img  alt="cannot render" className={styles.cartItem__image} src={item.image} />  
                       
                    <div>
                    <p className={styles.details__title}>{item.title}</p>
                    <p className={styles.details__price}>
                    <b>PRICE : RS</b> {item.price}
                    </p>
                    
                    </div>
                    </Col>
                    
                    <Col lg={6} md={6} xs={12}>
                    <div className={styles.quantity_item}>   
                   
                    
                    <label htmlFor="qty">Qty</label>
                    <input min="1" className={styles.cartItem__qty} type="number" id="qty" name="qty" value={input} onChange={onChangeHandler}/>
                    
                    <Button className={styles.button_item} onClick={()=>handler(item.id)} variant="primary">DELETE</Button>
                    
                    
                    </div>
                    </Col>
                    
                    </Row>       
                    
        </div>
        </Row>
    )
}
