
import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';


let spellList=require("./assets/data/spells.json");
let spellImages={
  abjuration:require("./assets/_img/SpellBackgrounds/abjuration.png"),
  conjuration:require("./assets/_img/SpellBackgrounds/conjuration.png"),
  divination:require("./assets/_img/SpellBackgrounds/divination.png"),
  enchantment:require("./assets/_img/SpellBackgrounds/Enchantment.png"),
  evocation:require("./assets/_img/SpellBackgrounds/evocation.png"),
  illusion:require("./assets/_img/SpellBackgrounds/illusion.png"),
  necromancy:require("./assets/_img/SpellBackgrounds/necromancy.png"),
  transmutation:require("./assets/_img/SpellBackgrounds/transformation.png")
};

function Spell(props){

    const [show,setShow] = useState({style:{},isDisplaying:true})
    const [details,setDetails] = useState({style:{display:"none"},isDisplaying:false})
  
    // arrays of strings.
    let types=props.spell.types.split(" ");
    let data=props.spell.data;
    // standard style outlines
    let thisStyle=[];
    types.forEach(e=>thisStyle.push(styles[e]));
    // other data
    let type=types[1];
    let use=props.spell.use;
    let name=props.spell.name;
    let level=props.spell.level;
  
    function handleState(x){
      if(x.isDisplaying){
        x.style={display:"none"}
      }else{
        x.style={display:"flex"}
      }
      x.isDisplaying=!x.isDisplaying;
      return x;
    }
  
    return(
      <View style={thisStyle,show.style} >
        {/* <Button /> */}
        <View>
          <Image source={spellImages[type]} style={styles.normalImage}/>
          <Text style={styles.spellName,styles.white}>{name} also {JSON.stringify(thisStyle)}</Text>
          <Image source={spellImages[type]} style={styles.normalImage}/>
        </View>
        <View style={details.style}>
          <Text>{use}</Text>
          {data.forEach((e,i)=><Text key={i}>{e}</Text>)}
        </View>
      </View>
    );
  }
  
  function LevelDevider(props){
    let PreText="Level ";
    PreText+=props.level+":"
    if(props.level==0){
      PreText="Cantrips:"
    }
    return(
      <View style={styles.divider}>
        <Text>{PreText}</Text>
      </View>
    );
  }
  
  function ListedSpells(){
    let spells={level0:[],level1:[],level2:[],level3:[],level4:[],level5:[],level6:[],level7:[],level8:[],level9:[]};
    spellList.forEach(e=>spells["level"+e.level].push(<Spell spell={e}/>))
    return(
      <ScrollView>
        <LevelDevider level={0}/>
        {spells.level0[0]}
        <LevelDevider level={1}/>
        {spells.level1[0]}
        <LevelDevider level={2}/>
        {spells.level2[0]}
        <LevelDevider level={3}/>
        {spells.level3[0]}
        <LevelDevider level={4}/>
        {spells.level4[0]}
        <LevelDevider level={5}/>
        {spells.level5[0]}
        <LevelDevider level={6}/>
        {spells.level6[0]}
        <LevelDevider level={7}/>
        {spells.level7[0]}
        <LevelDevider level={8}/>
        {spells.level8[0]}
        <LevelDevider level={9}/>
        {spells.level9[0]}
      </ScrollView>
    )
  }
  