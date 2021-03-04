// import { navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';
import { getProduct, addToCart, getCart} from './data';

const ProductView = (props) => {

    const [productDisplayed, setProductDisplayed] = useState()


    useEffect(()=> {
        const prod = getProduct(props.idx)
        setProductDisplayed(prod);
    }, [props])

    const addOrContinueButton = () => {
        addToCart(productDisplayed);
        console.log(getCart())
    }


    return(
        <div className="container col-md-6">
            {productDisplayed && <div className="mx-sm-auto">
                <img src = {productDisplayed.pictures[0]} alt={productDisplayed.name} />
                <h5>{ productDisplayed.name }</h5>
                <p> <span> N {productDisplayed.price} </span> <span> {productDisplayed.brief} </span> </p>
                <span > {productDisplayed.favorite ? "\uD83D\uDC93" : "\u2661" } </span>
                <p> {productDisplayed.description} </p>
                <p>This item is not returnable. Items like inner-wear, personal care, make-up, socks and certain accessories do not come under our return policy. Read More.</p>
                <img src="../Images/bottomimage.svg" alt="blabla" />
                <p>
                    <button onClick = {addOrContinueButton} >Add to Cart</button>
                </p>
            </div>}
        </div>
    )
}

export default ProductView;
