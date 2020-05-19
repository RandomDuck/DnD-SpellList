import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { spellImages, spellTextColor } from "./dataHandler"

export default function SpellModal({spell,controller}){
  let spellType=spell.data.types.split(" ")[1]
  let textColor=styles[spellTextColor[spellType]]
  let upperSpellType = String(spellType).charAt(0).toUpperCase()+String(spellType).slice(1)
  let use=[]
  let data=[]
  spell.data.use.forEach((e,i)=>use.push(<Text key={i} style={textColor}>{e}</Text>))
  spell.data.data.forEach((e,i)=>data.push(<Text key={i} style={[textColor,{marginTop:"1%"}]}>{e}</Text>))
  let classes=[]
  spell.data.types.split(" ").slice(2).forEach(e=>classes.push(e+" "));
  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={spell.show} >
      <TouchableWithoutFeedback onPress={()=>controller(false,{name:"",use:[],data:[],level:0,types:""})}>
        <View style={[styles.spellView,styles[spellType]]}>
          <View style={styles.spellViewTop}>
            <View>
              <Text style={textColor}>Name: {spell.data.name}</Text>
              <Text style={textColor}>Level: {spell.data.level>0?spell.data.level:"Cantrip"}</Text>
              <Text style={textColor}>Type: {upperSpellType}</Text>
            </View>
            <View>
              <Image style={styles.image} source={spellImages[spellType]}/>
            </View>
          </View>
          <View style={{marginTop:"2%"}}>
            {use}
          </View>
          <Text style={[textColor,{marginTop:"4%"}]}>Description:</Text>
          <ScrollView> 
            <View onStartShouldSetResponder={() => true}>
              {data}
            </View>
          </ScrollView>
          <Text style={textColor}>Classes that can use:</Text>
          <Text style={textColor}>{classes}</Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles=StyleSheet.create({
    white:{color:"#fff"},
    black:{color:"#000"},
    image:{
      height:80,
      width:80,
      resizeMode:"contain"
    },
    spellViewTop:{
      justifyContent:"center",
      flexDirection:"row",
      alignItems:"center"
    },
    spellView:{
      borderRadius:20,
      padding:"4%",
      margin:"4%",
      height:"90%"
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

