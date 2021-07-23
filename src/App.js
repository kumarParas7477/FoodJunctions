import { Fragment, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Components/Store/CardProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showHideCartHandler = () => {
    setCartIsShown(!cartIsShown);
  }

  // window.addEventListener('load', function () {
  //   document.querySelector('button').addEventListener('click', () => {
  //     console.log('inside');
  //     let myAudio = document.getElementById('buttonAudio');
  //     myAudio.play();

  //   });
  // })



  return (
    <CartProvider >
      {cartIsShown && <Cart onClose={showHideCartHandler} />}
      <Header onShowHideCart={showHideCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
