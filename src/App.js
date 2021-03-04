import { Router } from "@reach/router"
import ShowProducts from "./component/showallproducts";
import ProductView from "./component/productviewPage";
import Cart from "./component/cart";

function App() {

  return (
    <div>
      <Router>
        <ShowProducts path = "/" />
        <ProductView path = "/view/:idx" />
        <Cart path = "/checkout" />
      </Router>
    </div>
  );
}

export default App;
