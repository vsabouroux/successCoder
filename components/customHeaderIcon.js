import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import AntDesign from '@expo/vector-icons/AntDesign';
import globalStyles from "../styles/globalStyles";

const customHeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={AntDesign}
      iconSize={24}
      color={globalStyles.white}
    />
  );
};

export default customHeaderIcon;
