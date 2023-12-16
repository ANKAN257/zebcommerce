import { Link } from "react-router-dom";

import ProductList from "../features/product-list/ProductList";

import NavBar from "../features/navbar/NavBar"; // Fix import statement


function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}
export default Home;