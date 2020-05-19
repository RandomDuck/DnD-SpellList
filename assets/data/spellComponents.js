
import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles, spellList, spellImages } from './dataHandler'

let spells={level0:[],level1:[],level2:[],level3:[],level4:[],level5:[],level6:[],level7:[],level8:[],level9:[]};
spellList.forEach(e=>spells["level"+e.level].push(e))
let titles=["Cantrips: ","Level 1: ","Level 2: ","Level 3: ","Level 4: ","Level 5: ","Level 6: ","Level 7: ","Level 8: ","Level 9: "]

// export a flatlist of spells dpendant on show prop, each spell can be cloicked for a detaild modal view
export default function FlatSpell({show, spellModalController}) {
    let spellData=spells["level"+show]
    let data=[]
    spellData.forEach((e,i)=>{data.push({data:e,key:i})})
    return (
      <>
        <ListHeader title={titles[show]}/>
        <FlatList 
          data={data}
          renderItem={({item})=>Spell(item.data,spellModalController)}
          numColumns={2}
        />
      </>
    );
}

function Spell(spellData,controller){
  let spellType=spellData.types.split(" ")[1]
  function handlePress() {controller(true,spellData)}
  return(
    <TouchableOpacity style={[styles.flexRow,styles.spell,styles[spellType]]} onPressOut={handlePress()} >
      <Image style={styles.normalImage} source={spellImages[spellType]}></Image>
      <Text style={[styles.spellName,]}>{spellData.name}</Text>
    </TouchableOpacity>
  );
}

function ListHeader(props){
  return(
    <>
      <Text style={{backgroundColor:"#333", margin:10}}>{props.title}</Text>
    </>
  );
}

  