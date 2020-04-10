import React from 'react';
import {StyleSheet, Text, View, ImageBackground, } from 'react-native';
import {ListedSpells} from './assets/data/spellComponents';

const styles = StyleSheet.create(require("./assets/data/style.json"));
let backgroundImg={uri:require("./assets/_img/Background.png")};


export default function App() {
  return (
    <ImageBackground source={backgroundImg} style={styles.main}>
      <ListedSpells />
    </ImageBackground>
  );
}
