
import React from 'react';
import { Text, StyleSheet, FlatList, View, Image, TouchableOpacity } from 'react-native';
import { spellList, spellImages, spellTextColor } from './dataHandler'

let spells={level0:[],level1:[],level2:[],level3:[],level4:[],level5:[],level6:[],level7:[],level8:[],level9:[]};
spellList.forEach(e=>spells["level"+e.level].push(e))
let titles=["Cantrips:","Level 1:","Level 2:","Level 3:","Level 4:","Level 5:","Level 6:","Level 7:","Level 8:","Level 9:"]

// export a flatlist of spells dpendant on show prop, each spell can be cloicked for a detaild modal view
export default function FlatSpell({show, spellModalController}) {
  let spellData=spells["level"+show]
  let data=[]
  spellData.forEach((e,i)=>{data.push({data:e,key:i})})
  return (
    <View style={{width:"100%",marginTop:"15%"}}>
      <ListHeader title={titles[show]}/>
      <FlatList 
        data={data}
        renderItem={({item})=>Spell(item.data,spellModalController)}
        numColumns={2}
      />
    </View>
  );
}

function Spell(spellData,controller){
  let spellType=spellData.types.split(" ")[1]
  let textColor=styles[spellTextColor[spellType]]
  return(
    <TouchableOpacity style={[styles.flexRow,styles.spell,styles[spellType]]} onPress={()=>{controller(true,spellData)}} >
      <Image style={styles.image} source={spellImages[spellType]}></Image>
      <Text style={[styles.spellName,textColor]}>{spellData.name}</Text>
    </TouchableOpacity>
  );
}

function ListHeader(props){
  return(
    <>
      <Text style={styles.header}>{props.title}</Text>
    </>
  );
}

const styles=StyleSheet.create({  
    header:{
      backgroundColor:"#353", 
      margin:10, 
      padding:10, 
      color:"#fff", 
      textAlign:"center",
      borderRadius:10
    },
    white:{
        color:"#fff"
    },
    black:{
        color:"#000"
    },
    image:{
        height:40,
        width:40,
        resizeMode:"contain"
    },
    spell:{
        alignItems:"center",
        padding:10, 
        justifyContent:"space-between",
        width:"48%",
        marginLeft:"0.5%",
        marginRight:"0.5%",
        borderRadius:12,
        marginBottom:"1%"
        
    },
    flexRow:{
        flexDirection:"row"
    },
    evocation:{backgroundColor:"#900"},
    conjuration:{backgroundColor:"#cc0"},
    transmutation:{backgroundColor:"#606"},
    necromancy:{backgroundColor:"#222"},
    divination:{backgroundColor:"#008"},
    enchantment:{backgroundColor:"#08a"},
    illusion:{backgroundColor:"#4a5"},
    abjuration:{backgroundColor:"#0a0"}
  }
);