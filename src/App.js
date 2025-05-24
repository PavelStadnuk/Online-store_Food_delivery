import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ComponentHeader from './Components/Header'
import OrderProcessing from './Components/OrderProcessing'
import ProductCart from './Components/Productcard'
import Shares from './Components/SHARES'
import TermsOfDelivery from './Components/TermsOfDelivery'
import Basket from './Components/basket'
import ComponentFooter from './Components/footer'
import HomePage from './Pages/home'
import style from './SCSS/App.module.scss'
function App() {
	const productCartID = useSelector(state => state.FilterSlice.productCartID)
	return (
		<div className={style.App}>
			<ComponentHeader />
			<Routes>
				<Route
					path='/ProductCart/:id'
					element={<ProductCart productCartID={productCartID} />}
				/>
				<Route path='/' element={<HomePage />} />
				<Route path='/basket' element={<Basket />} />
				<Route path='/OrderProcessing' element={<OrderProcessing />} />
				<Route path='/TermsOfDelivery' element={<TermsOfDelivery />} />
				<Route path='/Shares' element={<Shares />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
			<ComponentFooter />
		</div>
	)
}

export default App
