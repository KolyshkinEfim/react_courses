import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.menu__items}>
          <li>Платформа</li>
          <li> Курсы</li>
          <li>Блог</li>
          <li>Контакты</li>
        </ul>
        <div className={classes.header__auth}>
          <a>Войти</a>
          <a>Зарегистрироваться</a>
        </div>
      </nav>
      <div className={classes.header__content}>
        <div className={classes.header__content__logo}>
          <img src={logo} alt="no_image" />
          <h2>langue - ling</h2>
        </div>
        <div className={classes.header__content__title}>
          <h1>
            Образовательная <br /> онлайн-платформа
          </h1>
          <span>
            Курсы и видео-лекции по дизайну, копирайтингу, <br /> SMM, таргету и
            многим другим направлениям
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
