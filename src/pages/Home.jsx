import { Link } from "react-router-dom";

function Home(){
    return (
        <div style={{padding: 20}}>
            <h1>Home</h1>
            <p>Welcome to Amazon.</p>
            <Link to="/products"> Go to Products </Link>
        </div>
    )
}

export default Home;