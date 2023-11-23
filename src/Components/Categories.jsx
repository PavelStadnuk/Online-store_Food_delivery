import React from "react";
import style from "../SCSS/Categories.module.scss";
const Categories = React.memo(({ activeCategory, onClickCategory }) => {
  const categoris = [
    "Всі",
    "ХОЛОДНІ ЗАКУСКИ",
    "ГАРЯЧІ ЗАКУСКИ",
    "Супи",
    "Рибні страви",
    "Гриль меню",
    "Фірмові страви",
    "Напої",
    `М'ясні страви`
  ];

  return (
    <div className={style.categories}>
      <ul>
        {categoris.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                onClickCategory(index);
              }}
              className={activeCategory === index ? style.active :null}
              //  className={activeCategory === index ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
});
export default Categories;
