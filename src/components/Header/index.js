import React from 'react';

import { Container, Cart, Home } from './styles';
import logo from '../../assets/images/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';

function Header() {
  return (
    <Container>
      <Home to="/">
        <img src={logo} alt="Rocketshoes" />
      </Home>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#999" />
      </Cart>
    </Container>
  );
}

export default Header;
