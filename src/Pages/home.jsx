import React from "react";
import style from "../SCSS/home.module.scss";
import Categories from "../Components/Categories";
import { useDispatch, useSelector } from "react-redux";
import {setActiveCategory} from "../Redux/Slice/FilterSlice";
import ComponentDishes from "../Components/dishes";
import OurCafe from "../Components/OURCAFE";
const HomePage = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(state => state.FilterSlice.activeCategory)
  const OnChangeCategory = React.useCallback((id) => {
    dispatch(setActiveCategory(id));
    // console.log(activeCategory,setActiveCategory(id))
  }, []);
  return (
    <div className={style.HomePage}>
      <div className={style.HomePhoto} />
      <Categories activeCategory={activeCategory} onClickCategory={OnChangeCategory} />
      <ComponentDishes activeCategory={activeCategory}/>
      <OurCafe/>
    </div>
  );
};
export default HomePage;
