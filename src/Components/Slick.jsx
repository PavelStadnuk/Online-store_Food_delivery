import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import buy from "../assets/image/Buy.png";
import style from "../SCSS/slick.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/Slice/cartSlice";
const CenterMode = ({ date,categoryName }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItemToCart( item ));
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1039,
        settings: {
          slidesToShow: 3, // При ширине экрана менее 992 пикселей показывать 3 слайда
        },
      },
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 2, // При ширине экрана менее 992 пикселей показывать 3 слайда
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1, // При ширине экрана менее 992 пикселей показывать 3 слайда
        },
      },
    ],
  };

  return (
    <div className={style.wrapperSlick} >
        {/* <div className={style.dishesName}>
          <h1 className={style.dishesCategory}>{date.categoryName}</h1>
        </div> */}
         {date && (
        <div className={style.dishesName}>
          <h1 className={style.dishesCategory}>{categoryName}</h1>
        </div>
      )}
      <Slider {...settings}>
        {date.map((obj) => (
          <div key={obj.id} className={style.SlickInformation} >
            {id === "/" ? (
              <img
                src={obj.photo}
                alt=""
                className={style.SlickImage}
              />
            ) : (
              <NavLink to={`/ProductCart/${obj.id}`}>
                <img
                  src={obj.photo}
                  alt=""
                  className={style.SlickImage}
                />
              </NavLink>
            )}
            <div className={style.SlickWrap}>
              <div className={style.SlickSettings}>
                <h1>{obj.name}</h1>
                <p>Вага:{obj.weight}г</p>
              </div>
              <p className={style.SlickText}>{obj.text}</p>
              <div className={style.SlickPrice}>
                <p>{obj.price} $</p>
                <button className={style.SlickInTheBasket} onClick={() => handleAddToCart(obj)}>
                  В кошик <img src={buy} alt="Buy Icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterMode;
