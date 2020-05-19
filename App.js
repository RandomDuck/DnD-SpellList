import React, {useState} from 'react';
import { ImageBackground, View, StyleSheet} from 'react-native';
import FlatSpells from './assets/data/spellComponents';
import { backgroundImg, styles } from "./assets/data/dataHandler"
import { spellModal, LevelSelect } from './assets/data/modals'


export default function App() {

  // declare state trackers
  const [spellSelect,setSpellSelect] = useState(0)
  const [spellModalActive,changeSpellModalActive] = useState({show:false,spell:{}})
  const [menuModalActive,changeMenuModalActive] = useState(false)

  // declare state setters
  function spellSelectHandler(int) {setSpellSelect(int)}
  function spellModalController(showBool,spellData) {changeSpellModalActive({show:showBool,spell:spellData})}
  function menuModalController(bool) {changeMenuModalActive(bool)}

  return (
    <View style={styles.topWrapper}>
      <ImageBackground source={backgroundImg} style={styles.main}>
          <FlatSpells show={spellSelect} spellModalController={spellModalController}/>
      </ImageBackground>
    </View>
  );
}

const styles=StyleSheet.create({
      main:{
          resizeMode:"contain",
          justifyContent:"space-around",
          height:"103%",
          flexWrap:"wrap"
      },  
      topWrapper:{
          paddingTop:"7%",
          backgroundColor:"#a60"
    }
  }
);