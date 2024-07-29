import Nav from "./nav/Nav.js";
import Products from "./products/Products.js";
import Recommended from "./Recom/Recommend.js";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
function App() {
  return (
    <>
      <Nav />
      <Products />
      <Recommended />
    </>
  );
}

export default App;
