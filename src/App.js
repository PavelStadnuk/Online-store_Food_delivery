import style from "./SCSS/App.module.scss";
import HomePage from "./Pages/home";
import ComponentHeader from "./Components/Header";
import ComponentFooter from "./Components/footer";
import { Route, Routes } from "react-router-dom";
import ProductCart from "./Components/Productcard";
import { useSelector } from "react-redux";
import Basket from "./Components/basket";
import OrderProcessing from "./Components/OrderProcessing";
import TermsOfDelivery from "./Components/TermsOfDelivery";
import Shares from "./Components/SHARES";
function App() {
  const productCartID = useSelector((state) => state.FilterSlice.productCartID);
  return (
    <div className={style.App}>
      <ComponentHeader />
      <Routes>
        <Route
          path="/ProductCart/:id"
          element={
            <ProductCart
              productCartID={productCartID}
            />
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/OrderProcessing" element={<OrderProcessing />} />
        <Route path="/TermsOfDelivery" element={<TermsOfDelivery />} />
        <Route path="/Shares" element={<Shares />} />
      </Routes>
      <ComponentFooter />
    </div>
  );
}

export default App;
