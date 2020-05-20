import React, {useState} from 'react';
import { ImageBackground, View, StyleSheet} from 'react-native';
import { backgroundImg } from "./assets/data/dataHandler"
import { LevelOpen, LevelModal } from './assets/data/levelSelectModals'
import FlatSpells from './assets/data/spellComponents';
import SpellModal from './assets/data/spellModal'
import SearchBar from './assets/data/filters';

let titles=["Cantrips","Level 1","Level 2","Level 3","Level 4","Level 5","Level 6","Level 7","Level 8","Level 9"]
// TODO:
// implement search by name
// implement dice roller
// implement "about" section

export default function App() {

  // declare state trackers
  const [spellSelect,setSpellSelect] = useState(0)
  const [filterTypes,setFilterTypes] = useState({classes:[],types:[]})
  const [searchValue,searchSet] = useState("")
  const [spellModalActive,changeSpellModalActive] = useState({show:false,data:{name:"",use:[],data:[],level:0,types:""}})
  const [menuModalActive,changeMenuModalActive] = useState(false)
  const [filterModalActive,changeFilterModalActive] = useState(false)

  // declare state setters
  function spellSelectHandler(int) {setSpellSelect(int)}
  function spellModalController(showBool,spellData) {changeSpellModalActive({show:showBool,data:spellData})}
  function menuModalController(bool) {changeMenuModalActive(bool)}
  function searchController(value) {searchSet(value)}
  function filterController(object) {setFilterTypes(object)}
  function filterModalController(bool) {changeFilterModalActive(bool)}
  
  //filterController={filterController} 
  return (
    <View style={styles.topWrapper}>
      <ImageBackground source={backgroundImg} style={styles.main}>
        <LevelOpen controller={menuModalController} title={titles[spellSelect]} />
        <SearchBar controller={searchController} filterModal={filterModalController} />
        <FlatSpells filters={filterTypes} search={searchValue} show={spellSelect} spellModalController={spellModalController}/>
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
          flexDirection:"column",
          height:"103%"
      },  
      topWrapper:{
          paddingTop:"7%",
          backgroundColor:"#a60"
    }
  }
);