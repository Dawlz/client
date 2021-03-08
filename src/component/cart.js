import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { clearCart, getCart, removeFromCart, sumTotal } from './data';
import NavbarCart from './navbarcart';

const Cart = (props) => {

    const [userCart, setUserCart] = useState([]);
    const discount = 0;

    useEffect(()=>{
        var cartItemList = getCart()
        cartItemList === null ? setUserCart([]) :
        setUserCart([...cartItemList]);
    }, [])

    const removeButton = (itemIndex) => {
        removeFromCart(itemIndex);
        var updatedCartItemList = getCart();
        updatedCartItemList === null ? setUserCart([]) :
        setUserCart([...updatedCartItemList]);
    }

    const checkOut = () => {
        clearCart();
        setUserCart([]);
    }

    return(
        <div>
            <NavbarCart />
            <div className = "container col-md-6" style = {{backgroundColor: "floralwhite", padding: "20px"}}>
                {
                    userCart.length >=1 ? userCart.map((items, id) => 
                        <div key = {id} style = {{display: "flex", marginBottom: "2px"}} >
                            <img src={items.pictures[0]} alt={items.name} width = "100px" height = "100px" style = {{backgroundColor: items.bgColor}}/>
                            <div style= {{marginInlineStart: "20px"}} >
                                <h6>
                                    {items.name}
                                </h6>
                                <p>
                                    N<span> {items.price} </span> <span> {items.brief} </span>
                                </p>
                                <button style={{background: "none", color: "red", border: "none"}} onClick = {e => removeButton(id)} >Remove</button>
                            </div>
                        </div>
                    ) :
                    <h3 style={{margin: "auto", width: "auto"}}>
                        Your Cart is Empty, click <Link to = {'/'}>here</Link> to start shopping
                    </h3>
                }
                {
                    userCart.length >=1 ? <div style={{padding: "auto", margin: "200px 0px 0px 10%", width: "100%"}}>
                        <p style= {{width: "75%"}}>
                            Total Price: <span style={{float: "right"}}> N {sumTotal(userCart)} </span>
                        </p>
                        <p style= {{width: "75%"}}>
                            Discount: <span style={{float: "right"}}> N {discount} </span>
                        </p>
                        <p style= {{width: "75%"}}>
                            Final Amount: <span style={{float: "right"}}> N {sumTotal(userCart) - discount} </span>
                        </p>
                        <button onClick = {checkOut} style = {{backgroundColor: "black", color: "white", borderRadius: "20px", width: "75%", padding: "5px"}} > CHECKOUT </button>
                    </div> :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Cart