import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/menuBarStyle.jsx";

function MenuSelector({ controller, spellController, name, value }) {
  return (
    <TouchableOpacity style={styles.selectorMain} onPress={() => { spellController(value); controller(false) }}>
      <Text style={styles.selector}>{name}</Text>
    </TouchableOpacity>
  );
}

export default MenuSelector;