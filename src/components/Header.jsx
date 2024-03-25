import { useContext } from "react";
import headerImage from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import Cart from "./Cart";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={headerImage} alt="Logo Restaurant"></img>
        <h1>React Food</h1>
      </div>
      <nav>
        <Button
          onClick={handleShowCart}
          textOnly
        >{`Cart(${totalCartItems})`}</Button>
      </nav>
    </header>
  );
}
