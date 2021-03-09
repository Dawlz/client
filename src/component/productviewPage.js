import { navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';
import { getProduct, addToCart} from './data';
import NavbarSingle from './navbarshop';

const btnStyle = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    width: "75%",
    padding: "5px"
}

const ProductView = (props) => {

    const [productDisplayed, setProductDisplayed] = useState()
    const [addedToCart, setAddedToCart] = useState(false)

    useEffect(()=> {
        const prod = getProduct(props.idx)
        setProductDisplayed(prod);
        console.log(prod.favorite)
    }, [props])

    const addOrContinueButton = () => {
        addToCart(productDisplayed);
        setAddedToCart(true)
    }

    const fav = () => {
        productDisplayed.favorite = !productDisplayed.favorite;
        setProductDisplayed({...productDisplayed})
    }

    const continueAction = () => {
        navigate('/');
    }

    const buttonToRender = addedToCart ? <button onClick = {continueAction} style = {btnStyle} >Continue Shopping</button> : <button onClick = {addOrContinueButton} style = {btnStyle} >Add to Cart</button>


    return(
        <div>
            <NavbarSingle />
            {productDisplayed && <div className="mx-sm-auto container col-md-6">
                <div style = {{backgroundColor: productDisplayed.bgColor, marginTop: "20px", padding: "10px"}}>
                    <img style={{width: "100%"}} src = {productDisplayed.pictures[0]} alt={productDisplayed.name} />
                    <h5>{ productDisplayed.name }</h5>
                    <p style= {{width: "100%"}}> <span> N {productDisplayed.price} </span> <span> {productDisplayed.brief} </span> <span onClick = {fav} style={{float: "right", cursor: "pointer", fontSize: "22px"}} > {productDisplayed.favorite === true ? "\uD83D\uDC93" : "\u2661" } </span> </p>
                </div>
                <p> {productDisplayed.description} </p>
                <p>This item is not returnable. Items like inner-wear, personal care, make-up, socks and certain accessories do not come under our return policy. <i style= {{color: "red"}}>Read More</i>.</p>
                <img src="../Images/bottomimage.svg" alt="blabla" width ="100%" />
                <p style={{ margin: "10px 0 0 20%" }}>
                    {buttonToRender}
                </p>
            </div>}
        </div>
    )
}

export default ProductView;
