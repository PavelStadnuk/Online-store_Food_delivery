import React from "react";
import style from "../SCSS/popup.module.scss";
import photo from "../assets/image/illustration-cart 1.png";
const Popup = ({ active, setActive }) => {
  return (
    <div
      className={`${style.module} ${active ? style.active : ""}`}>
      <div className={style.moduleContent} >
        <div className={style.moduleContentItem}>
          <img src={photo} />
          <h1>КОШИК ПОРОЖНИЙ</h1>
          <button onClick={() => setActive(false)}>Переглянути меню</button>
        </div>
      </div>
    </div>
  );
};
export default Popup;
