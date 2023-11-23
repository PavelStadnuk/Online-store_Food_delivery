
import React from "react";
import style from "../SCSS/dishes.module.scss";
import photos from "../Redux/date";
import CenterMode from "./Slick";

const ComponentDishes = ({ activeCategory }) => {
const categories = [1, 2, 3, 4, 5, 6, 7, 8];
const date= photos.filter((obj) => obj.category === activeCategory);
const categoryNames = date.find((obj) => obj.categoryName);
const categoryName=categoryNames?.categoryName;
  return (
    <div className={style.dishes}>
      {activeCategory === 0
        ? categories.map((category) => {
            const date1 = photos.filter((obj) => obj.category === category);
            const categoryNames = date1.find((obj) => obj.categoryName);
            const categoryName=categoryNames?.categoryName;

            return (
              <CenterMode
                
                date={date1}
                categoryName={categoryName}
              />
            );
          })
        : (
          <CenterMode
             date={date}
            categoryName={categoryName} 
          />
        )}
    </div>
  );
};

export default ComponentDishes;
