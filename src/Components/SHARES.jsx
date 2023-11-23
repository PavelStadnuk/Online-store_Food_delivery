import React from "react";
import ComponentContacts from "./Contacts";
import style from "../SCSS/Shares.module.scss";
import photo from "../assets/image/meat.png";
import photo1 from "../assets/image/chees.png";
import photo2 from "../assets/image/drink.png";
const Shares = () => {
  const Terms = [
    {
      id: 1,
      img: photo,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
    {
      id: 2,
      img: photo,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
    {
      id: 3,
      img: photo,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
    {
      id: 4,
      img: photo1,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
    {
      id: 5,
      img: photo1,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
    {
      id: 6,
      img: photo1,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
    {
      id: 7,
      img: photo2,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
    {
      id: 8,
      img: photo2,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
    {
      id: 9,
      img: photo2,
      text: "Саме час скуштувати «Сирну» піцу, «Маргариту», піцу «Овочі та гриби», Пасту Чотири сири, Томатний суп з грінками, Грибний Стартер, Рулетики з сиром, Картопля з печі, Картопляні оладки або Грецький салат. Виберіть свій смак!",
      name: "Без м'яса? Тут!",
      number: 31,
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperShares}>
        <div className={style.HShares}>
          <h1>АКЦІЇ</h1>
        </div>
        <div className={style.wrapperSharesItem}>
        {Terms.map((obj) => {
            return <SharesItem name={obj.name} text={obj.text} img={obj.img} number={obj.number}/>;
          })}
          </div>
      </div>
      <div className={style.map}>
        <ComponentContacts />
      </div>
    </div>
  );
};
export default Shares;
const SharesItem = ({ img, text, name, number }) => {
  return (
    <div className={style.wrpItem}>
      <img src={img} />
      <div className={style.Item}>
      <div className={style.ItemT}>
        <h1>{name}</h1>
        <p>
        {text}
        </p>
      </div>
      <p className={style.ItemNuber}>до{number}липня</p>
      </div>
    </div>
  );
};
