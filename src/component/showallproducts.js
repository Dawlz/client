import { Link } from '@reach/router';
import React, {useState, useEffect} from 'react'
import { getAllProducts } from './data';

const ShowProducts = (props) =>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getAllProducts);
    }, [])

    const fav = (idx) => {
        products[idx].favorite = !products[idx].favorite
        setProducts([...products])
    }

    return(
        <div>
            {products.map((item, idx) =>
                <div key = {idx}> 
                    <Link to = {"/view/" + idx} >
                        <div>
                            <img src= {item.pictures[0]} alt = {item.name}/>
                            <h5> {item.name} </h5>
                            <p> N <span> {item.price} </span> <span> {item.brief} </span> </p>
                        </div>
                    </Link>
                    <span onClick = {e => fav(idx)} >{item.favorite ? "\uD83D\uDC93" : "\u2661" }</span>
                </div>
            )}
        </div>
    )
}

export default ShowProducts;