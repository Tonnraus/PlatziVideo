import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import gravatar from "../utils/gravatar";
import "../assets/styles/components/Header.scss";
import logo from "../assets/statics/logo-platzi-video-BW2.png";
import userIcon from "../assets/statics/user-icon.png";

// JSX syntax, returned value must go bettwen (element)
const Header = (props) => {
  const { user } = props;
  /* How many elements (keys) has object user */
  const hasUser = Object.keys(user).lenght > 0;
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to="/login">Cuenta</Link>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
