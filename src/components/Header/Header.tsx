import React, { useState, useRef, useEffect } from 'react'

import ytLogo from "../../images/yt-logo.png";
import ytLogoMobile from "../../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { AiOutlineClose } from 'react-icons/ai'

import './index.css'
import { useDispatch } from 'react-redux/es/exports';
// import { RootState } from '../../app/store/store';
import { setMenu } from '../../app/features/menuSlice';
import { Link, useNavigate } from 'react-router-dom';
import { setCategory } from '../../app/features/categorySlice';
import useFetchReluts from '../../hooks/useFetchResults';
import SkeltonNavbar from '../Skelton/SkeltonNavbar';
import { fetchDataFromApi } from '../../api';

import { options } from '../../data/data';

const Header = (): JSX.Element => {
	const [focus, setFocus] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')
	const [options, setOptions] = useState<[string] | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const { loading } = useFetchReluts()
	// const showMenu = useSelector((state: RootState) => state.menu.showMenu)
	const dispatch = useDispatch()
	const navigate = useNavigate()




	// useEffect(() => {
	// 	fetchOptions()
	// }, [value])

	// const fetchOptions = async () => {
	// 	const data = await fetchDataFromApi(`auto-complete/?q=${value}&hl=en&gl=US`)
	// 	setOptions(data)
	// 	// console.log(data)
	// }

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		dispatch(setCategory(value))
		navigate(`/search/${value}`)
	}

	const handleFocus = () => {
		setFocus(prevState => !prevState)
	}

	const handleCloseIcon = () => {
		setValue("")
		setFocus(prevState => !prevState)
		inputRef.current?.focus()
	}

	const onClickOption = (text: string): void => {
		dispatch(setCategory(text))
		setOptions(null)
		setValue('')
		navigate(`/search/${value}`)
	}

	// console.log(options,value)
	return (
		<>
			<div className="header">
				<nav>
					<div className="nav_left">
						<button type='button' className="nav_menu_btn" onClick={() => dispatch(setMenu())}>
							<SlMenu color='#fff' size={18} className="menu_icon" />
						</button>
						<Link to="/" onClick={() => dispatch(setCategory('New'))}>
							<img src={ytLogoMobile} className="nav_logo_mobile" alt="logo" />
							<img src={ytLogo} className="nav_logo" alt="logo" />
						</Link>
					</div>
					<div className='search_container'>
						<div className="search_box">
							<form className={`${focus ? 'input_box input_box_style' : 'input_box'}`} onSubmit={handleSubmit} onClick={handleFocus}>
								{focus &&
									<IoIosSearch color='#fff' size={18} />}
								<input
									type="text"
									ref={inputRef}
									value={value}
									placeholder='Search'
									onChange={handleChange}
								/>
								{value.length >= 1 && (<div className='close_icon'>
									<AiOutlineClose color='#fff' size={20} onClick={handleCloseIcon} />
								</div>)}
							</form>
							<button type='button'>
								<IoIosSearch color='#fff' size={18} />
							</button>
						</div>

						{/* options */}

						<div className="options_contianer">
							{options &&  (
								<ul className='dropdown_container'>
									{options.slice(0, 7).map((text, i) => (
										<li
											key={`${text}${1}`}
											className="option_item"
											onClick={() => onClickOption(text)}>
											<IoIosSearch size={18} />
											<p className='option_item_text'>{text}</p>
										</li>
									))}
								</ul>
							)}
						</div>

						{/* options */}
					</div>
					{loading ? <SkeltonNavbar /> : (
						<div className="nav_right">
							<div className='nav_right_icon'>
								<RiVideoAddLine color='#fff' size={20} />
							</div>
							<div className='nav_right_icon'>
								<FiBell color='#fff' size={20} />
							</div>
							<div className="avatar">
								<img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" alt="" />
							</div>
						</div>
					)}
					{/* <div className="nav_right">
						<div className='nav_right_icon'>
							<RiVideoAddLine color='#fff' size={20} />
						</div>
						<div className='nav_right_icon'>
							<FiBell color='#fff' size={20} />
						</div>
						<div className="avatar">
							<img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" alt="" />
						</div>
					</div> */}
				</nav>
			</div>
			{/* <div className="options_contianer">
				{(options.length >=1)  && (
					<ul className='dropdown_container'>
						{options.slice(0,7).map((text, i) => (
							<li
								key={`${text}${1}`}
								className="option_item"
								onClick={()=> onClickOption(text)}>
								<IoIosSearch size={18} />
								<p className='option_item_text'>{text}</p>
							</li>
						))}
					</ul>
				)}
			</div> */}
		</>
	)
}

export default Header