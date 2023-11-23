import React from "react";
import ComponentContacts from "./Contacts";
import style from '../SCSS/Productcart.module.scss'
import { NavLink, useParams } from "react-router-dom";
import arrow from "../assets/image/ArrowB.png";
import bag from '../assets/image/shoppingbag.png'
import date from '../Redux/date'
import CenterMode from "./Slick";
const ProductCart = () => {
  const {id}=useParams()
  const elementWithId = date.find(element => element.id ==id)
  const targetIDs = date.find(element => element.id == id).BWT;
  const dates = date.filter(element => targetIDs.includes(element.id));
  const categoryName='з цим купують'
  // console.log( 'id',id,'ProductCartID',productCartID)
  return (
    <>
    <div className={style.WrapperProductCartComponent}>
      <div className={style.goBack}>
        <NavLink to='/'><button><img src={arrow} /></button></NavLink>
        <h3>Повернутися назад</h3>
      </div>
      <div className={style.ProductCart}> 
        <div>
          <img src={elementWithId.photo}/>
        </div>
        <div>
          <div className={style.ProductCartInformationName}>
            <h3>{elementWithId.name}</h3>
            <p>{elementWithId.compound}</p>
          </div>
          <div className={style.ProductCartInformationWeight}>
            <p>Вес: {elementWithId.weight} г</p>
            <div className={style.WrapBasketButton}>
              <button>В корзину <div className={style.bagWrap}><img src={bag}/></div></button>
              <h3>{elementWithId.price}₽</h3>
            </div>
          </div>
          <div className={style.ProductCartInformationProtein}>
            <div className={style.BJU}>
              <p>Білки</p>
              <p>Жири</p>
              <p>Вуглеводи</p>
              <p>Ккал</p>
              <p>Вага</p>
            </div>
            <div className={style.BJUN}>
              <h5>{elementWithId.BJU.B}</h5>
              <h5>{elementWithId.BJU.J}</h5>
              <h5>{elementWithId.BJU.U}</h5>
              <h5>{elementWithId.Kcal}</h5>
              <h5>{elementWithId.weight} г</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
      <CenterMode  date={dates} categoryName={categoryName}/> 
      <div className={style.Contacts}><ComponentContacts/></div>
     </>
  );
};
export default ProductCart
