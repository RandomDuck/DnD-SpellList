import React, { useState } from "react";
import { View } from "react-native";
import style from "../styles/menuBarStyle.jsx"
import { arrowTypes, ArrowButton } from "../utility/arrowButton.jsx";

const MenuBarDrawer = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={style.navBarCon}>
      <View style={expanded ? style.navBar : style.hidden}>
        {children}
      </View>
      <ArrowButton
        style={expanded ? { marginTop: -25 } : { marginTop: -10 }}
        width={25}
        height={20}
        arrowType={!expanded ? arrowTypes.triangleDown : arrowTypes.triangleUp}
        onPress={() => setExpanded(!expanded)}
        feedback />
    </View>
  )
}

export default MenuBarDrawer;