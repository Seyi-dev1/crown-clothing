import React from "react";
import MenuItem from "../menu-item/Menu-item";
import shopData from "../../assets/shop data/shopData";
// import { createSelector } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import { selectSections } from "../../redux/directory/directorySelectors";
import "./directory.scss";
const Directory = () => {
  const selectAllSections = shopData.map((section) => {
    return <MenuItem properties={section} key={section.id} />;
  });

  // const allSections = useSelector((state)=> selectAllSections(state))

  return <div className="directory-menu">{selectAllSections}</div>;
};
export default Directory;
