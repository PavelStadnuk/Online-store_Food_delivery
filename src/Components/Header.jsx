import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from '../SCSS/header.module.scss'
import line from '../assets/image/Line 88.png'
import telephone from '../assets/image/telephone.png'
import Popup from './popup'
import ComponentSearch from './search'
const ComponentHeader = () => {
	const count = useSelector(state => state.cartItemSlice.count)
	const [active, setActive] = useState(false)
	return (
		<div>
			<header className={style.header}>
				<NavLink to='/' className={style.logo}>
					<h1>LOGOS</h1>
				</NavLink>
				<div className={style.headerElements}>
					<ComponentSearch />
					<div className={style.telephoneInformation}>
						<div className={style.telephoneImage}>
							<img src={telephone} />
						</div>
						<div className={style.telephoneText}>
							<p>Контакти:</p>
							<h2>+380683555329</h2>
						</div>
					</div>
				</div>
				{count === 0 ? (
					<a onClick={() => setActive(true)} className={style.linkWrapper}>
						<p>Кошик</p>
						<img src={line} />
						<span>{count}</span>
					</a>
				) : (
					<NavLink to='/basket' className={style.linkWrapper}>
						<p>Кошик</p>
						<img src={line} />
						<span>{count}</span>
					</NavLink>
				)}
			</header>
			<Popup active={active} setActive={setActive} />
		</div>
	)
}
export default ComponentHeader
