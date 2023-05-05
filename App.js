import React, { useState } from 'react';
import { View, StatusBar, TouchableWithoutFeedback} from 'react-native';
import { backgroundImg, classTypes, spellTypes, spellList } from './assets/data/dataHandler'
import MenuBar from './assets/components/menu/menuBar.jsx';

export default function App() {
  const [spellLevel, setSpellLevel] = useState(spellList.allAt);
  const [menu, setMenu] = useState(false);
  const [dice, setDice] = useState(false);
  const [filter, setFilter] = useState(false);
  const [about, setAbout] = useState(false);
  const [settings, setSettings] = useState(false);

  const menuControllers = {
    Menu: {con:setMenu, state:menu},
    Dice: {con:setDice, state:dice},
    Filter: {con:setFilter, state:filter},
    About: {con:setAbout, state:about},
    Settings: {con:setSettings, state:settings}
  };

  function touchHandle(event) {
    console.log(event)
  }

  return (
  <View>
    <StatusBar barStyle="light-content" />
    <TouchableWithoutFeedback onPress={e=>touchHandle(e)}>
      <MenuBar spell={spellLevel} menuControllers={menuControllers} spellController={setSpellLevel}/>
    </TouchableWithoutFeedback>
  </View>);
}