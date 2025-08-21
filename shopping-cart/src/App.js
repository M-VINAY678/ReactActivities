import { useContext } from "react";
import products from "./products";
import { CartContext } from "./Provider";

function Productlist() {
  const { addItem } = useContext(CartContext);

  return (
    Object.values(products).map((product) => (
      <li>{product.name + "     " + product.price + "    "}
        <button onClick={(e) => {
          addItem(product);
          console.log(product.name);
        }}>
          ADD TO CART</button></li>
    ))
  );
}
function Cart() {
  const { items, removeItem } = useContext(CartContext);
  return (Object.values(items).map((item) => (
    <li>{item.name + "     " + item.price + "    " + item.quantity}
      <button onClick={(e) => {
        removeItem(item.id);
        console.log(item.name);
      }}>
        REMOVE FROM CART</button></li>
  )));
}
function App() {

  return (
    <div>
      <ol>
        <Productlist />
      </ol>
      <ol>
        <Cart />
      </ol>
    </div>
  );
}

export default App;
