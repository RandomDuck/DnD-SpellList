import React, { useState } from "react";
import { Text, View, Animated, TextInput, ScrollView, TouchableHighlight } from "react-native";
import style from "../styles/menuBarStyle.jsx"
import MenuBarDrawer from "./menuBarDrawer.jsx";
import MenuSelector from "./menuSelector.jsx";
import MenuButton from "./menuButton.jsx";
import { spellList, icons } from "../../data/dataHandler.js";

const MenuBar = ({ spell, spellController, menuControllers }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  let names = spellList.titles;
  const openAnim = React.useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  let selectors = [];
  let values = [];
  for (let i = 0; i < names.length; i++) {
    values.push({ name: names[i], value: i, key: i });
  }
  values.forEach(i => selectors.push(<MenuSelector controller={setShowDropdown} spellController={spellController} name={i.name} value={i.value} key={i.key} />))

  React.useEffect(() => {
    if (showDropdown) {
      Animated.timing(
        openAnim,
        {
          toValue: 18 * selectors.length,
          duration: 200,
          useNativeDriver: false
        }
      ).start();
    } else {
      Animated.timing(
        openAnim,
        {
          toValue: 0,
          useNativeDriver: false
        }
      ).start();
    }
  }, [openAnim, showDropdown])
  let iconSize = 40;
  return (
    <View style={style.mainContainer}>
      <Animated.View style={{ overflow: 'hidden', opacity: openAnim, height: openAnim, ...style.levelView }}>
        <ScrollView>
          {selectors}
        </ScrollView>
      </Animated.View>
      <View style={style.menuBarCon}>
        <TextInput placeholderTextColor="#fff" style={{ ...style.searchBar, ...style.menuBar }} placeholder={"Search"} />
        <TouchableHighlight onPress={() => { setShowDropdown(!showDropdown) }} style={{ ...style.menuBar, ...style.levelSelect }}>
          <Text style={style.levelSelectText}>{names[spell]}</Text>
        </TouchableHighlight>
      </View>
      <MenuBarDrawer>
        <MenuButton controller={menuControllers.Menu.con} conState={menuControllers.Menu.state} imgUri={icons.Menu} size={iconSize} />
        <MenuButton controller={menuControllers.Dice.con} conState={menuControllers.Dice.state} imgUri={icons.Dice} size={iconSize} />
        <MenuButton controller={menuControllers.Filter.con} conState={menuControllers.Filter.state} imgUri={icons.Filter} size={iconSize} />
        <MenuButton controller={menuControllers.About.con} conState={menuControllers.About.state} imgUri={icons.About} size={iconSize} />
        <MenuButton controller={menuControllers.Settings.con} conState={menuControllers.Settings.state} imgUri={icons.Settings} size={iconSize} />
      </MenuBarDrawer>
    </View>
  )
}

export default MenuBar;