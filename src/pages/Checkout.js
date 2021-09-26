
import { useContext } from "react";
import { MyContext } from "../context/context";

export function Checkout() {
  const { produtosDoCarrinho } = useContext(MyContext);

  return (
    <div>
      <h1>Checkout</h1>

      <ul>
        
      </ul>
    </div>
  );
}