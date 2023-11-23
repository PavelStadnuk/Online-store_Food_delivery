import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../assets/image/ArrowB.png";
import clock from "../assets/image/clock.png";
import style from "../SCSS/OrderProcessing.module.scss";
import night from "../assets/image/Night.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setDelivery,
  setDeliveryTime,
  setPay,
} from "../Redux/Slice/OrderProcessingSlice";
import { useForm } from "react-hook-form";
const OrderProcessing = () => {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.OrderProcessingSlice.delivery);
  const pay = useSelector((state) => state.OrderProcessingSlice.pay);
  const deliveryTime = useSelector(
    (state) => state.OrderProcessingSlice.deliveryTime
  );
  const OnChangeDelivery = React.useCallback((id) => {
    dispatch(setDelivery(id));
  }, []);
  const OnChangePay = React.useCallback((id) => {
    dispatch(setPay(id));
  }, []);
  const OnChangeDeliveryTime = React.useCallback((id) => {
    dispatch(setDeliveryTime(id));
  }, []);
  const [currentTime, setCurrentTime] = useState(new Date());
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form submitted:", data); // Add this line
    try {
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const isBetweenTimeRange = () => {
    const currentHour = currentTime.getHours();

    return currentHour >= 8 && currentHour < 20;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.wrapper}>
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
            <h1 className={style.dishesCategory}>Оформити замовлення</h1>
          </div>
        </div>
        {isBetweenTimeRange() ? null : (
          <div className={style.wrapNight}>
            <div>
              <h1>Сьогодні ми вже не доставляємо.</h1>
              <p>
                Замовлення приймаємо до 20:50, доставляємо з 8:30 до 21:30{" "}
                {currentTime.toLocaleTimeString()}
              </p>
            </div>
            <img src={night} />
          </div>
        )}
        <div className={style.ContactInformation}>
          <h1>1.Контактна інформація</h1>
          <div className={style.inputInformation}>
             <input
              type="text"
              placeholder="Number"
              {...register("Number",)}
            />
            <input
              type="text"
              placeholder="Name"
              {...register("Name",)}
            />
          </div>
        </div>
        <div className={style.Delivery}>
          <h1>2.Доставка</h1>
          <div className={style.boxWrapper}>
            <div className={style.boxDelivery}>
              <div
                onClick={() => {
                  OnChangeDelivery(1);
                }}
                className={`${style.chooseDelivery} ${
                  delivery === 1 && style.active
                }`}
              >
                Доставка
              </div>
              <div
                onClick={() => {
                  OnChangeDelivery(2);
                }}
                className={`${style.pickupDelivery} ${
                  delivery == 2 && style.active
                }`}
              >
                Самовивіз
              </div>
            </div>
            <div className={style.wrapperClock}>
              <img src={clock} />
              <h2>Доставимо через 1 годину 30 хвилин</h2>
            </div>
          </div>
          {delivery == 1 ? (
            <>
              {" "}
              <h1 className={style.TextAdrDelivery}>Адреса доставки</h1>
              <div className={style.AdrDelivery}>
                <div className={style.Adr1}>
                   <input
                    type="text"
                    placeholder="Street"
                    {...register("Street", )}
                    className={style.AdrStreet}
                  /> 
                   <input
                    type="text"
                    placeholder="House number"
                    {...register("House number", )}
                    className={style.AdrHome}
                  /> 
                </div>
                <div className={style.Adr2}>
                   <input
                    type="text"
                    placeholder=" Office apartment number"
                    {...register(" Office apartment number", )}
                    className={style.AdrApartments}
                  /> 
                  <input
                    type="number"
                    placeholder="entrance"
                    {...register("entrance", )}
                    className={style.AdrApartments}
                    
                  /> 
                 <input
                    type="number"
                    placeholder="upstairs"
                    {...register("upstairs", )}
                    className={style.AdrApartments}
                  /> 
                  
                </div>
                <div className={style.Adr3}>
                   <input
                    type="text"
                    placeholder="comment"
                    {...register("comment", )}
                    className={style.AdrCommentary}
                  /> 
                </div>
              </div>
            </>
          ) : (
            <div className={style.WrpEnterTheRestaurant}>
              <h1>Виберіть ресторан</h1>
               <input
                type="text"
                placeholder="Restiran"
                {...register("Restiran")}
                className={style.EnterTheRestaurant}
              /> 
            </div>
          )}
        </div>
        <div className={style.WillPay}>
          <h1>3. Сплатити</h1>
          <div className={style.boxDelivery}>
            <div
              onClick={() => {
                OnChangePay(1);
              }}
              className={`${style.chooseDelivery} ${pay == 1 && style.active}`}
            >
              Оплата онлайн
            </div>
            <div
              onClick={() => {
                OnChangePay(2);
              }}
              className={`${style.pickupDelivery} ${pay == 2 && style.active}`}
            >
              Кур'єру карткою
            </div>
            <div
              onClick={() => {
                OnChangePay(3);
              }}
              className={`${style.InCash} ${pay == 3 && style.active}`}
            >
              Готівкою
            </div>
          </div>
          {pay == 3 ? (
            <div className={style.inputInformation}>
               <input
                type="number"
                placeholder="delivery from"
                {...register("delivery from")}
              />
            </div>
          ) : null}
        </div>
        <div className={style.WhenWillItBeDelivered}>
          <h1>4. Коли доставити</h1>
          <div className={style.boxWrapper}>
            <div className={style.boxDelivery}>
              <div
                onClick={() => {
                  OnChangeDeliveryTime(1);
                }}
                className={` ${style.chooseDelivery} ${
                  deliveryTime == 1 && style.active
                }`}
              >
                Найближчим часом
              </div>
              <div
                onClick={() => {
                  OnChangeDeliveryTime(2);
                }}
                className={`${style.pickupDelivery} ${
                  deliveryTime == 2 && style.active
                }`}
              >
                На час
              </div>
            </div>
            {deliveryTime == 2 ? (
              <div className={style.wrapperClock}>
                 <input
                  type="time"
                  placeholder="specify the time"
                  {...register("specify the time")}
                /> 
              </div>
            ) : null}
          </div>
          <div className={style.inputInformation}>
             <input
              type="number"
              placeholder="number of persons"
              {...register("number of persons", { max: 50, min: 1 })}
            />
          </div>
          <h1>Бажаєте ми зателефонуємо?</h1>
          <div className={style.wrapCall}>
            <div className={style.call}>
               <input
                {...register("Do not call back")}
                type="radio"
                value="Do not call back"
              /> 
              <p>Не передзвонювати</p>
            </div>
            <div className={style.call}>
               <input
                {...register("An operator call is required")}
                type="radio"
                value="An operator call is required"
              /> 
              <p>Потрібен дзвінок оператора</p>
            </div>
          </div>
        </div>
        <div className={style.processingOfPersonalData}>
           <input
            type="checkbox"
            placeholder="I agree to the processing of my Persians. data in accordance with the Terms"
            {...register(
              "I agree to the processing of my Persians. data in accordance with the Terms",
              
            )}
          /> 
          <p>Я згоден на обробку моїх перс. даних відповідно до Умов</p>
          <button type="submit">Оформити замовлення</button>
        </div>
      </div>
    </form>
  );
};
export default OrderProcessing;
