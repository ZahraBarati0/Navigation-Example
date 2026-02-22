import { Link } from "react-router-dom";
import products from "../data/products";

function Products (){
    console.log(products)
    return (
        <div style={{padding:20}}>
            <h1>Products</h1>

            <ul style={{lineHeight: "2"}}>
                {
                    
                    products.map((product)=>(
                        <li key={product.id}> 
                            <b>{product.name}</b> - ${product.price} {" "} 
                            <Link to={`/products/${product.id}`}> View Details </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products;