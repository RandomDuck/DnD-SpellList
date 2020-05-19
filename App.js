import React, {useState} from 'react';
import { ImageBackground, View, StyleSheet} from 'react-native';
import FlatSpells from './assets/data/spellComponents';
import { backgroundImg } from "./assets/data/dataHandler"
import { SpellModal, LevelOpen, LevelModal } from './assets/data/spellModal'


export default function App() {

  // declare state trackers
  const [spellSelect,setSpellSelect] = useState(0)
  const [spellModalActive,changeSpellModalActive] = useState({show:false,data:{name:"",use:[],data:[],level:0,types:""}})
  const [menuModalActive,changeMenuModalActive] = useState(false)

  // declare state setters
  function spellSelectHandler(int) {setSpellSelect(int)}
  function spellModalController(showBool,spellData) {changeSpellModalActive({show:showBool,data:spellData})}
  function menuModalController(bool) {changeMenuModalActive(bool)}

  return (
    <View style={styles.topWrapper}>
      <ImageBackground source={backgroundImg} style={styles.main}>
        <LevelOpen controller={menuModalController} />
        <FlatSpells show={spellSelect} spellModalController={spellModalController}/>
        <SpellModal spell={spellModalActive} controller={spellModalController}/>
        <LevelModal show={menuModalActive} controller={menuModalController} spellController={spellSelectHandler}/>
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