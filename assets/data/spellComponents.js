
import React from 'react';
import { Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { spellList, spellImages, spellTextColor } from './dataHandler'

let spells={level0:[],level1:[],level2:[],level3:[],level4:[],level5:[],level6:[],level7:[],level8:[],level9:[]};
spellList.forEach(e=>spells["level"+e.level].push(e))

// export a flatlist of spells dependant on show prop, each spell can be clicked for a detaild modal view
export default function FlatSpell({show, spellModalController, filters, search}) {
  let spellData=filterData(spells["level"+show])

  function filterData(dataToFilter){
    dataToFilter=dataToFilter.filter((e)=>String(e.name).toLowerCase().includes(String(search).toLowerCase()))
    dataToFilter=dataToFilter.filter((e)=>filters.types.includes(e.types.split(" ")[1].toLowerCase()))
    dataToFilter=dataToFilter.filter((e)=>checkClasses(e))
    return dataToFilter
  }

  function checkClasses(e){
    let bool = false;
    filters.classes.forEach(x=>{if(e.types.toLowerCase().includes(String(x).toLowerCase())){bool=true}})
    return bool
  }

  let data=[]
  spellData.forEach((e,i)=>{data.push({data:e,key:i})})
  return (
    <FlatList 
        style={{width:"100%",marginTop:"2%"}}
        data={data}
        renderItem={({item})=>Spell(item.data,spellModalController)}
        numColumns={2}/>
  );
}

function Spell(spellData,controller){
  let spellType=spellData.types.split(" ")[1]
  let textColor=styles[spellTextColor[spellType]]
  return(
    <TouchableOpacity style={[styles.flexRow,styles.spell,styles[spellType]]} onPress={()=>{controller(true,spellData)}} >
      {/* <Image style={styles.image} source={spellImages[spellType]}></Image> */}
      <Text style={[{marginTop:5,paddingBottom:5},styles.spellName,textColor]}>{spellData.name}</Text>
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
    spellName:{
      flexWrap:"wrap",
      width:"70%"
    },
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
        justifyContent:"center",
        width:"48%",
        borderRadius:12,
        marginLeft:"1%",
        marginRight:"1%",
        marginBottom:"1%",
        borderColor:"#fa0",
        borderWidth:0.5
    },
    flexRow:{
        flexDirection:"row"
    },
    evocation:{backgroundColor:"#900"},
    conjuration:{backgroundColor:"#cb0"},
    transmutation:{backgroundColor:"#606"},
    necromancy:{backgroundColor:"#222"},
    divination:{backgroundColor:"#008"},
    enchantment:{backgroundColor:"#08a"},
    illusion:{backgroundColor:"#4a5"},
    abjuration:{backgroundColor:"#0a0"}
  }
);