import React from "react";
import location from '../assets/image/Location.png'
import message from '../assets/image/Message.png'
import facebook from '../assets/image/facebook.png'
import vkontakte from '../assets/image/vkontakte-logo.png'
import youtybe from '../assets/image/video-play-button.png'
import instagram from '../assets/image/instagram.png'
import style from '../SCSS/Contacts.module.scss'
const ComponentContacts = () => {
  return (
    <div className={style.WrapperContacts}>
      <h1 className={style.contactText}>КОНТАКТИ</h1>
      <div className={style.informationContact}>
        <div className={style.WrapImg}>
          <img src={location} />
          <p>
            <span>Наша Адреса:</span>
            <br />МО, міський округ Красногірськ, село Іллінське,
            Експериментальна вулиця, 10
          </p>
        </div>
        <div className={style.WrapImg}>
          <img src={message} />
          <p>
            <span>Наша пошта</span>
            <br />
            auto.wash@gmail.com
          </p>
        </div>
      </div>
      <div className={style.NumberWrap}>
        <button>ЗАБРОНУВАТИ СТІЛ</button>
        <div className={style.Number}>
          <h1>+380683555329</h1>
          <h4>Телефонуйте або залишайте заявку</h4>
        </div>
      </div>
      <div className={style.socialMedia}>
        <p>Ми в соціальних мережах:</p>
        <img src={facebook} />
        <img src={vkontakte} />
        <img src={youtybe} />
        <img src={instagram} />
      </div>
    </div>
  );
};
export default ComponentContacts  
