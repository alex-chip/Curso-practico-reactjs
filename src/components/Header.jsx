import React from 'react'

const Header = () => (
  <Header className="hader">
    <img className="header_img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video" />
    <div className="header_menu">
      <div className="header__menu--profile">
        <img src="../assets/user-icon.png" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </Header>
);

export default Header;
