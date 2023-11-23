import React from "react";
import style from '../SCSS/CartItem.module.scss'
import minus from '../assets/image/minus.png'
import add from '../assets/image/add.png'
import x from '../assets/image/x.png'
import { useDispatch } from "react-redux";
import { addItemToCart, minusItemFromCart, removeItemFromCart } from "../Redux/Slice/cartSlice";
const CartItem = ({photo, name, compound, price,quantity,item,id,idTotal}) => {
  const dispatch = useDispatch();
  const minusCart = (id) => {
    console.log(id);
    dispatch(minusItemFromCart( id ));
  };
  const handleAddToCart = (item) => {
    dispatch(addItemToCart( item ));
  };
  const removeCart = (id) => {
    dispatch(removeItemFromCart( id ));
  };
  console.log(idTotal)
  return (
    <div className={style.WrapCartItem}>
      <div className={style.CartItemWrap}>
        <img  src={photo} className={style.itemImage}/>
        <div className={style.CartItemText}>
        <h1>{name}</h1>
        <p>{compound}</p>
        </div>
      </div>
      <div className={style.WrapButton}>
        <button  onClick={()=>minusCart(id)}>
          <img  className={style.minus} src={minus}/>
        </button>
        <h1>{quantity}</h1>
        <button onClick={()=>handleAddToCart(item)}>
        <img  src={add}/>
        </button>
        <h1 className={style.price}>{idTotal}</h1>
        <button onClick={()=>removeCart(id)}>
        <img src={x}/>
        </button>
      </div>
    </div>
  );
};
export default CartItem
