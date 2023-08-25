import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store/store";
// import { sidebarItemType } from '../../Types'
import { categories } from "../../utils/constants";
import SidebarItem from "../sidebarItem/SidebarItem";

import ytLogo from "../../images/yt-logo.png";
// import ytLogoMobile from "../../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";

import "./index.css";
import { setMenu } from "../../app/features/menuSlice";
import { setActiveTab } from "../../app/features/activeTabSlice";
import { setCategory } from "../../app/features/categorySlice";
import { Link } from "react-router-dom";

const Sidebar = (): JSX.Element => {
  const showMenu = useSelector((state: RootState) => state.menu.showMenu);
  const dispatch = useDispatch();

  const onClickLogo = () => {
    setActiveTab("New");
    setCategory("New");
  };

  return (
    <div className={`${showMenu ? "sidebar_menu active" : "sidebar_menu"}`}>
      <div className="sidebar_header">
        <button
          type="button"
          className="nav_menu_btn"
          onClick={() => dispatch(setMenu())}>
          <SlMenu color="#fff" size={18} className="menu_icon" />
        </button>
        <Link to="/">
          <img
            src={ytLogo}
            className="sidebar_header_logo"
            alt="logo"
            onClick={onClickLogo}
          />
        </Link>
      </div>
      <div className="sidebar">
        <ul className="sidebar_items">
          {categories.slice(0, 6).map(item => (
            <>
              <SidebarItem
                key={item.name}
                name={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
              />
              {item.divider && <hr className="divider_line" />}
            </>
          ))}
        </ul>

        <ul className="sidebar_items">
          <li className="title_explore">Explore</li>
          {categories.slice(6).map(item => (
            <>
              <SidebarItem
                key={item.name}
                name={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
              />
              {item.divider && <hr className="divider_line" />}
            </>
          ))}
        </ul>
        <div className="sidebar_footer">
          <p>About Press Copyright Contact us Creator Advertise Developers</p>
          <p>
            Terms Privacy Policy & Safety How YouTube works Test new features
          </p>
          <p>Clone By: Hari Naik</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
