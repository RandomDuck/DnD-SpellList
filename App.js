import React, { useState } from 'react';
import { ImageBackground, View, StyleSheet, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import { backgroundImg, classTypes, spellTypes, spellList } from './assets/components/utility/dataHandler'
import { LevelOpen, LevelModal } from './assets/components/levelSelectModals'
import { AboutModal, DiceModal, OutsideModalTrigger } from './assets/components/utility/aboutAndDice'
import FlatSpells from './assets/components/spell/spellComponents';
import SpellModal from './assets/components/spell/spellModal'
import SearchBar from './assets/components/filter/filters';
import FilterModal from './assets/components/filter/filterModal';

let editions=[];
Object.keys(spellList).forEach(i=>editions.push(spellList[i].editionName));
 
export default function App() {
  
  // declare state trackers
  const edition = 's5e';
  const [ diceModal, setDiceModal ] = useState(false);
  const [ aboutModal, setAboutModal ] = useState(false);
  const [ spellSelect, setSpellSelect ] = useState(0);
  const [ filterTypes, setFilterTypes ] = useState({classes:classTypes[edition],types:spellTypes[edition]});
  const [ searchValue, searchSet ] = useState('');
  const [ spellModalActive, changeSpellModalActive ] = useState({show:false,data:{name:'',use:[],data:[],level:0,types:''}});
  const [ menuModalActive, changeMenuModalActive ] = useState(false);
  const [ filterModalActive, changeFilterModalActive ] = useState(false);

  let titles=spellList[edition].titles;
  
  // declare state setters
  function diceModalController(bool) {setDiceModal(bool)}
  function aboutModalController(bool) {setAboutModal(bool)}
  function spellSelectHandler(int) {setSpellSelect(int)}
  function spellModalController(showBool,spellData) {changeSpellModalActive({show:showBool,data:spellData})}
  function menuModalController(bool) {changeMenuModalActive(bool)}
  function searchController(value) {searchSet(value)}
  function filterController(object) {setFilterTypes(object)}
  function filterModalController(bool) {changeFilterModalActive(bool)}
  
 
  return (
  <>
    <SafeAreaView style={{ flex: 0, backgroundColor: '#a60', minHeight: '4%'}} />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111', minHeight: '100%'}} >
      <TouchableWithoutFeedback onPress={()=>{changeMenuModalActive(false)}}>
        <View>
          <ImageBackground source={backgroundImg} style={styles.main}>
            <View style={styles.menu}>
              <OutsideModalTrigger 
                controller={diceModalController} 
                outStyle={styles.OMTOut} 
                style={styles.OMT} 
                imgStyle={styles.OMTImage}
                image={require('./assets/_img/icons/Dice.png')}/>
              <View style={styles.spellMenu}>
                <LevelOpen 
                controller={menuModalController} 
                title={`Spell level: ${titles[spellSelect]}`}
                show={menuModalActive}/>
              </View>
              <OutsideModalTrigger 
                controller={aboutModalController} 
                outStyle={styles.OMTOut} 
                style={styles.OMT} 
                imgStyle={styles.OMTImage}
                image={require('./assets/_img/icons/About.png')}/>
            </View>

            <SearchBar controller={searchController} filterModal={filterModalController} />
            <FlatSpells filters={filterTypes} search={searchValue} show={spellSelect} spellModalController={spellModalController} editon={edition}/>

            <AboutModal controller={aboutModalController} visible={aboutModal}/>
            <DiceModal controller={diceModalController} visible={diceModal}/>

            <SpellModal spell={spellModalActive} controller={spellModalController}/>
            <FilterModal show={filterModalActive} edition={edition} filterModal={filterModalController} filterController={filterController} />
            <LevelModal show={menuModalActive} controller={menuModalController} spellController={spellSelectHandler} names={titles}/>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  </>
  );
}

const styles=StyleSheet.create({
    spellMenu:{
      width:'50%',
      flexDirection: 'column'
    },
    menu:{
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
      marginTop:10,
      width:'96%',
      backgroundColor:'#111',
      borderRadius:20,
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
      alignSelf:'center'
    },
    OMTImage:{
      alignSelf:'center',
      width:30,
      height:30
    },
    OMT:{
      alignSelf:'center',
      padding:'2%'
    },
    OMTOut:{
      padding:'1%',
      margin:'2%',
      backgroundColor:'#888',
      borderRadius:10,
      color:'#fff'
    },
    main:{
      resizeMode:'contain',
      justifyContent:'space-around',
      flexDirection:'column',
    }
  }
);