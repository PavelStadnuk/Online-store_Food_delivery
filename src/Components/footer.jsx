import React from "react";
import style from "../SCSS/footer.module.scss";
import arrow from "../assets/image/Arrow.png";
import { NavLink } from "react-router-dom";
const ComponentFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className={style.footer}>
      <button onClick={scrollToTop}>
        <img src={arrow} />
      </button>
      <div className={style.Logos}>
        <h1>LOGOS</h1>
        <p>
          © ТОВ СК «АПШЕРОН»
          <br />Всі права захищені. 2010-2020
        </p>
        <h2>Користувача угода</h2>
        <h2> Карта сайту</h2>
        <h2>Політика конфіденційності</h2>
      </div>
      <div className={style.footerInformation}>
        <h1>Про ресторан</h1>
        <NavLink to='/TermsOfDelivery'><h1>Умови доставки</h1></NavLink>
        <h1>Повернення товару</h1>
        <NavLink to='/Shares'><h1>Акції</h1></NavLink>
      </div>
    </footer>
  );
};
export default ComponentFooter;
