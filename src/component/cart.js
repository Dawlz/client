import React from 'react';
import { getCart } from './data';
// import { getCart } from './data';

const Cart = (props) => {

    // const [userCart, setUserCart] = useState([]);

    // const userCart = [JSON.parse(localStorage.getItem('cartItem'))];
    var something = [...getCart()]
    const userCart = [something]

    console.log(userCart)

    // useEffect(()=> {
    //     const cartProducts = getCart();
    //     setUserCart(cartProducts);
    // }, [])

    return(
        <div>
            {
                userCart && userCart.map((items, id) => 
                    <div key = {id}>
                        <img src={items.picture[0]} alt={items.name}/>
                        <p> N <span> {items.price} </span> <span> {items.brief} </span> </p>
                        <button>Remove</button>
                    </div>
                )
            }
        </div>
    )
}

export default Cart