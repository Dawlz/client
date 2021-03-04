import { Router } from "@reach/router"
import ShowProducts from "./component/showallproducts";
import ProductView from "./component/productviewPage";

function App() {

  return (
    <div>
      <Router>
        <ShowProducts path = "/" />
        <ProductView path = "/view/:idx" />
      </Router>
    </div>
  );
}

export default App;
