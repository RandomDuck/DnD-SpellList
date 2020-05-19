import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { spellImages } from "./dataHandler"

export default function SpellModal({spell,controller}){
  let textColor=styles.white
  let spellType=spell.data.types.split(" ")[1]
  let upperSpellType = String(spellType).charAt(0).toUpperCase()+String(spellType).slice(1)
  let use=[]
  let data=[]
  spell.data.use.forEach((e,i)=>use.push(<Text key={i} style={textColor}>{e}</Text>))
  spell.data.data.forEach((e,i)=>data.push(<Text key={i} style={[textColor,{marginTop:"1%"}]}>{e}</Text>))
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
              <Text style={textColor}>Level: {spell.data.level>0?lspell.data.level:"Cantrip"}</Text>
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
          <ScrollView > 
            <View onStartShouldSetResponder={() => true}>
              {data}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles=StyleSheet.create({
    white:{color:"#fff"},
    image:{
      height:80,
      width:80,
      resizeMode:"contain"
    },
    spacer:{
      padding:"2%",
      textAlign:"center",
      margin:"2%",
      backgroundColor:"#222",
      color:"#fff"
    },
    spellViewTop:{
      justifyContent:"center",
      flexDirection:"row",
      alignItems:"center"
    },
    spellView:{
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

