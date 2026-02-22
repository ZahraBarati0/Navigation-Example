import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails(){
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p)=> p.id === Number(id));

    if(!product){
        return (
            <div>
                <h1>Product not found</h1>
                <button onClick={()=>navigate("/products")}> Back to Products </button>
            </div>
        )
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>{product.name}</h1>
            <p>
                <b>Price:</b> ${product.price}
            </p>
            <p>{product.description}</p>

            <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate("/checkout")}>Go to Checkout</button>
            </div>
        </div>
    )
}