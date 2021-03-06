
import { useContext } from "react";
import { MyContext } from "../context/context";

import CheckoutMovie from "../components/Movies/CheckoutMovie"

import {GeralContainer} from "../styles/checkout.pages.style"


export function Checkout() {
  const { cartMovies, updateMovieToCart } = useContext(MyContext);

  const renderTot = () => {
    let tot = 0;
    cartMovies.forEach(cartMovie => {
      tot += cartMovie.vote_average * 10;
    });

    return `R$ ${tot}`
  };

  return (
    <div>
      <h1>CHECKOUT</h1>

      <div>
        <div>
          {
            cartMovies.map(cartMovie => {
              return <CheckoutMovie key={cartMovie.id} movie={cartMovie} movies={cartMovies} removeFromCart={updateMovieToCart} />
            })
          }
        </div>
        <GeralContainer>
          CART TOTAL
          <span>{renderTot()}</span>
          <button>BUY</button>
        </GeralContainer>
      </div>
    </div>
  );
}