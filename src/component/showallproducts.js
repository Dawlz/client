import { Link } from '@reach/router';
import React, {useState, useEffect} from 'react'
import { getAllProducts } from './data';
import Navbar from './navbarhome';

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
            <Navbar />
            <div style= {{marginTop: "20px"}}>
            {products.map((item, idx) =>
                <div style = {{backgroundColor: item.bgColor}} key = {idx} className="container col-md-6"> 
                    <Link to = {"/view/" + idx} style= {{textDecoration: "none"}}>
                            <img style = {{width: "100%"}} src= {item.pictures[0]} alt = {item.name}/>
                            <p style={{color: "black", fontStyle: "oblique" }}> {item.name} </p>
                    </Link>
                    <div style= {{width: "100%"}}> N <span> {item.price} </span> <span> {item.brief} </span> <span onClick = {e => fav(idx)} style = {{cursor: 'pointer', float: "right"}} >{item.favorite ? "\uD83D\uDC93" : "\u2661" }</span>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default ShowProducts;