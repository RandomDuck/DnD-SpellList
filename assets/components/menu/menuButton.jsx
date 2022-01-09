import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../styles/menuBarStyle.jsx";

const MenuButton = ({ controller, imgUri, conState, size }) => {
  return (
    <TouchableOpacity style={styles.selectorMain} onPress={() => { controller(!conState) }}>
      <Image style={{ width: size, height: size }} source={imgUri} />
    </TouchableOpacity>
  );
}

export default MenuButton;