import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Cart, Home } from './styles';
import logo from '../../assets/images/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';

export default function Header(props) {
  const cartSize = useSelector((state) => state.cart.length);
  // let cartSize = props.cart.length;
  return (
    <Container>
      <Home to="/">
        <img src={logo} alt="Rocketshoes" />
      </Home>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#999" />
      </Cart>
    </Container>
  );
}
