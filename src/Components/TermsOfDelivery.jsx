import React, { useState } from "react";
import style from "../SCSS/TermsOfDelivery.module.scss";
import map from "../assets/image/Map.png";
const TermsOfDelivery = () => {
  const Terms = [
    {
      id: 1,
      name: "У наших кур'єрів завжди має бути здача!",
      text: "Ми дуже уважно стежимо за якістю нашої роботи, тому якщо у вас будуть якісь зауваження або пропозиції, то обов'язково повідомляйте їх нам",
    },
    {
      id: 2,
      name: "Вам щось не довезли?",
      text: "Ми дуже уважно стежимо за якістю нашої роботи, тому якщо у вас будуть якісь зауваження або пропозиції, то обов'язково повідомляйте їх нам",
    },
    {
      id: 3,
      name: "Чи не сподобався продукт?",
      text: "Ми дуже уважно стежимо за якістю нашої роботи, тому якщо у вас будуть якісь зауваження або пропозиції, то обов'язково повідомляйте їх нам",
    },
    {
      id: 4,
      name: "Якщо з'явилися зауваження",
      text: "Ми дуже уважно стежимо за якістю нашої роботи, тому якщо у вас будуть якісь зауваження або пропозиції, то обов'язково повідомляйте їх нам",
    },
    {
      id: 5,
      name: "Оплата Visa, MasterCard та СВІТ",
      text: "Ми дуже уважно стежимо за якістю нашої роботи, тому якщо у вас будуть якісь зауваження або пропозиції, то обов'язково повідомляйте їх нам",
    },
    {
      id: 6,
      name: "Реквізити",
      text: "Ми дуже уважно стежимо за якістю нашої роботи, тому якщо у вас будуть якісь зауваження або пропозиції, то обов'язково повідомляйте їх нам",
    },
  ];
  return (
    <div className={style.Wrapper}>
      <div className={style.HDelivery}>
        <h1>Умови доставки</h1>
      </div>
      <div className={style.WrapperDelivery}>
        <div>
          {Terms.map((obj) => {
            return <Dropdown name={obj.name} text={obj.text} />;
          })}
        </div>
        <div className={style.wrpImg}>
          <img src={map} />
        </div>
      </div>
      <div className={style.Schedule}>
        <div className={style.DeliverySchedule}>
          <h2>Графік роботи доставки:</h2>
          <p> с 10:00-21:00</p>
        </div>
        <div>
          <h2>Графік роботи кафе:</h2>
          <p> с 08:00-21:00</p>
        </div>
      </div>
      <div className={style.MinimumOrder}>
      <h2>Мінімальне замовлення:</h2>
      <p>Безкоштовна доставка пішим кур'єром за умови замовлення від 400 $ Доставка оператором таксі від будь-якої суми замовлення - за тарифами перевізника.</p>
      </div>
    </div>
  );
};
export default TermsOfDelivery;
const Dropdown = ({ name, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.Dropdown} onBlur={closeDropdown}>
      <button
        onClick={toggleDropdown}
        onBlur={closeDropdown}
        tabIndex="0"
        className={style.DropdownB}
      >
        {name}
      </button>
      {isOpen && (
        <div className={style.DropdownT}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};
