import React from "react";
import style from "../SCSS/OurCafe.module.scss";
import onion from "../assets/image/onion.png";
import ComponentContacts from "./Contacts";
const OurCafe = () => {
  const Cafes = [
    { photo: onion, value: "Найсвіжіші продукти" },
    { photo: onion, value: "Найсвіжіші продукти" },
    { photo: onion, value: "Найсвіжіші продукти" },
    { photo: onion, value: "Найсвіжіші продукти" },
  ];
  const blockCafes = (cafes) => {
    return cafes.map((cafe, innerIndex) => (
      <div className={style.blockCafe} key={innerIndex}>
        <img src={cafe.photo} alt="Cafe Photo" />
        <p>{cafe.value}</p>
      </div>
    ));
  };
  return (
    <div className={style.WrapperBack}>
      <div className={style.WrapperOurCafe}>
        <div className={style.WrapInformation}>
          <h1>НАШЕ КАФЕ</h1>
          <p>
            Ми розташовані в одному з наймальовничіших місць міста – на березі
            річки, це ваш оазис у межах міста, куди можна втекти від галасливого
            і курного мегаполісу. Ми справді унікальні, адже всі продумано до
            дрібниць: проект побудований з дикого закарпатського зрубу, камін в
            основному залі ресторану та панорамні вікна з видом на річку,
            затишні альтанки на березі річки та краща видова тераса, намет
            посадкою на 200 осіб, казковий дитячий будиночок та басейн.
          </p>
          <button>ПОДИВИТИСЯ МЕНЮ</button>
        </div>
        <div className={style.WrapBlockCafes}>{blockCafes(Cafes)}</div>
      </div>
      <ComponentContacts />
    </div>
  );
};
export default OurCafe;
