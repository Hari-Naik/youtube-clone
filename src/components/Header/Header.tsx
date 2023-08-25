import React, { useState, useRef, useEffect } from "react";

import ytLogo from "../../images/yt-logo.png";
import ytLogoMobile from "../../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import "./index.css";
import { useDispatch } from "react-redux/es/exports";
// import { RootState } from '../../app/store/store';
import { setMenu } from "../../app/features/menuSlice";
import { Link, useNavigate } from "react-router-dom";
import { setCategory } from "../../app/features/categorySlice";
import useFetchReluts from "../../hooks/useFetchResults";
import SkeltonNavbar from "../Skelton/SkeltonNavbar";
import { fetchDataFromApi } from "../../api";

import { options } from "../../data/data";
import { MdAccountCircle } from "react-icons/md";
import { auth } from "../../firebse";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { User } from "../../Types";
import UserProfile from "../UserProfile/UserProfile";

const Header = (): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState<string[] | null>(null);
  //const [user, setUser] = useState<any | null>(null)
  const [showUserProfile, setShowUserProfile] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  const user = getAuth()?.currentUser;

  const { loading } = useFetchReluts();
  const token = localStorage.getItem("token");

  // const showMenu = useSelector((state: RootState) => state.menu.showMenu)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  // 	fetchOptions()
  // }, [value])

  // const fetchOptions = async () => {
  // 	const data = await fetchDataFromApi(`auto-complete/?q=${value}&hl=en&gl=US`)
  // 	setOptions(data)
  // 	// console.log(data)
  // }

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        //const user = result.user;
        //setUser(user);
        if (token !== undefined) {
          localStorage.setItem("token", token);
        }

        //console.log(token)
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setCategory(value));
    navigate(`/search/${value}`);
  };

  const handleFocus = () => {
    setFocus(prevState => !prevState);
  };

  const handleCloseIcon = () => {
    setValue("");
    setFocus(prevState => !prevState);
    inputRef.current?.focus();
  };

  const onClickOption = (text: string): void => {
    dispatch(setCategory(text));
    setOptions(null);
    setValue("");
    navigate(`/search/${value}`);
  };

  const onClickAvatar = () => {
    setShowUserProfile(prevState => !prevState);
    avatarRef.current?.classList.toggle("onTap");
  };

  return (
    <>
      <header className="header">
        <nav>
          <div className="nav_left">
            <button
              type="button"
              className="nav_menu_btn"
              onClick={() => dispatch(setMenu())}>
              <SlMenu color="#fff" size={18} className="menu_icon" />
            </button>
            <Link to="/" onClick={() => dispatch(setCategory("New"))}>
              <img src={ytLogoMobile} className="nav_logo_mobile" alt="logo" />
              <img src={ytLogo} className="nav_logo" alt="logo" />
            </Link>
          </div>
          <div className="search_container">
            <div className="search_box">
              <form
                className={`${
                  focus ? "input_box input_box_style" : "input_box"
                }`}
                onSubmit={handleSubmit}
                onClick={handleFocus}>
                {focus && <IoIosSearch color="#fff" size={18} />}
                <input
                  type="text"
                  ref={inputRef}
                  value={value}
                  placeholder="Search"
                  onChange={handleChange}
                />
                {value.length >= 1 && (
                  <div className="close_icon">
                    <AiOutlineClose
                      color="#fff"
                      size={20}
                      onClick={handleCloseIcon}
                    />
                  </div>
                )}
              </form>
              <button type="button">
                <IoIosSearch color="#fff" size={18} />
              </button>
            </div>

            {/* options */}

            <div className="options_contianer">
              {options && (
                <ul className="dropdown_container">
                  {options.slice(0, 7).map((text, i) => (
                    <li
                      key={`${text}${1}`}
                      className="option_item"
                      onClick={() => onClickOption(text)}>
                      <IoIosSearch size={18} />
                      <p className="option_item_text">{text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* options */}
          </div>
          {loading ? (
            <SkeltonNavbar />
          ) : token ? (
            <div className="nav_right">
              <div className="nav_right_icon">
                <RiVideoAddLine color="#fff" size={20} />
              </div>
              <div className="nav_right_icon">
                <FiBell color="#fff" size={20} />
              </div>
              <div ref={avatarRef} className="avatar" onClick={onClickAvatar}>
                <img src={user?.photoURL || ""} alt="profile pic" />
              </div>
            </div>
          ) : (
            <button className="sign_in_btn" onClick={signIn}>
              <MdAccountCircle className="sign_in_btn_icon" />
              <span>Sign in</span>
            </button>
          )}
        </nav>
      </header>

      {showUserProfile ? (
        <UserProfile
          photoUrl={user?.photoURL}
          userName={user?.displayName}
          email={user?.email}
          onClick={onClickAvatar}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
