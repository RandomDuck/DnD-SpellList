import React from 'react';
import { Text, View, ImageBackground, } from 'react-native';
import { ListedSpells, Spell } from './assets/data/spellComponents';
import { classList, typeList, levelList } from './assets/data/classTypes'


export default function App() {
  return (
    <ImageBackground source={backgroundImg} style={styles.main}>
      <Spell spell={spellList[0]}/>
    </ImageBackground>
  );
}
