
import React, { useState } from 'react';
import { Text, View, Image, SectionList } from 'react-native';
import { styles, spellList } from './dataHandler'


function Spell(props){    
  return(
    <View style={{flex:1}}>
        <Image source={spellImages[type]} style={styles.normalImage}/>
        <Text style={styles.spellName}>{name} also {JSON.stringify(thisStyle)} also}</Text>
        <Image source={spellImages[type]} style={styles.normalImage}/>
      
      <View>
        <Text>{use}</Text>
        {data.forEach((e,i)=><Text key={i}>{e}</Text>)}
      </View>
    </View>
  );
}

function ListedSpells(){
  let spells={level0:[],level1:[],level2:[],level3:[],level4:[],level5:[],level6:[],level7:[],level8:[],level9:[]};
  spellList.forEach(e=>spells["level"+e.level].push(e))
  return(
    <SectionList sections={
      [
        {title:"Cantrips:", data: spells.level0},
        {title:"Level 1:", data: spells.level1},
        {title:"Level 2:", data: spells.level2},
        {title:"Level 3:", data: spells.level3},
        {title:"Level 4:", data: spells.level4},
        {title:"Level 5:", data: spells.level5},
        {title:"Level 6:", data: spells.level6},
        {title:"Level 7:", data: spells.level7},
        {title:"Level 8:", data: spells.level8},
        {title:"Level 9:", data: spells.level9}
      ]
    }
    />
  )
}

export { ListedSpells, Spell };
  