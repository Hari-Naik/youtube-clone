import React from "react";

import { setActiveTab } from "../../app/features/activeTabSlice";
import { setCategory } from "../../app/features/categorySlice";
import { Link } from "react-router-dom";

import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

type props = {
  name: String;
  icon: JSX.Element;
};

const SidebarItem = ({ name, icon }: props): JSX.Element => {
  const activeTab = useSelector(
    (state: RootState) => state.activeTab.activeTab
  );
  const dispatch = useDispatch();

  const onClickSidebarItem = () => {
    const category = name === "Home" ? "New" : name;
    dispatch(setCategory(category));
    dispatch(setActiveTab(name));
  };

  return (
    <Link to={name === "Home" ? "/" : `/${name.toLowerCase()}`}>
      <li
        className={`${
          activeTab === name ? "sidebar_item activeTab_style" : "sidebar_item"
        }`}
        onClick={onClickSidebarItem}>
        <span className="sidebar_item_icon">{icon}</span>
        <p className="sidebar_item_title">{name}</p>
      </li>
    </Link>
  );
};

export default SidebarItem;
