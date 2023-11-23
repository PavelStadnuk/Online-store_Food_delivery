import React from "react";
import style from "../SCSS/Basket.module.scss";
import arrow from "../assets/image/ArrowB.png";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import date from "../Redux/date";
import CenterMode from "./Slick";
import { useSelector } from "react-redux";
const Basket = () => {
  const CartDate = useSelector((state) => state.cartItemSlice.items);
  const totalPrice = useSelector((state) => state.cartItemSlice.totalPrice);
  const id = 1;
  const categoryName = "ДОДАТИ ДО ЗАМОВЛЕННЯ";
  const targetIDs = date.find((element) => element.id == id).BWT;
  const dates = date.filter((element) => targetIDs.includes(element.id));
  const freeTravel=10000-totalPrice
  return (
    <div className={style.Basket}>
      <div className={style.wrapperBack}>
        <div className={style.goBack}>
          <NavLink to="/">
            <button>
              <img src={arrow} />
            </button>
          </NavLink>
          <h3>Повернутися назад</h3>
        </div>
        <div className={style.dishesName}>
          <h1 className={style.dishesCategory}>Кошик</h1>
        </div>
      </div>
      <div className={style.wrapper}>
        {CartDate.map((item) => (
          <CartItem {...item} item={item}  />
        ))}
      </div>
      <div className={style.Slick}>
        <CenterMode date={dates} categoryName={categoryName} />
      </div>
      <div className={style.results}>
        <div className={style.resultsText}>
          <div className={style.resultsPrice}>
            <p>Разом:</p>
            <h1>{totalPrice} ₽</h1>
          </div>
          {freeTravel > 0 ? (
            <p>До безкоштовної доставки не вистачає: {freeTravel} $</p>
          ) : null}
          <p>Мінімальна сума замовлення 1500 $</p>
        </div>
        <NavLink to='/OrderProcessing'><button>Оформити замовлення</button></NavLink>
      </div>
    </div>
  );
};
export default Basket;
