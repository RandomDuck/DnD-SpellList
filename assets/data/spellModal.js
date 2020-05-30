import React from 'react';
import { StyleSheet, View, Modal, Text, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { spellImages, spellTextColor } from "./dataHandler"

export default function SpellModal({spell,controller}){

  let types=spell.data.types.split(" ")
  let spellType=types[1]
  let textColor=styles[spellTextColor[spellType]]
  let upperSpellType = capitalize(spellType)
  let use=[]
  let data=[]
  spell.data.use.forEach((e,i)=>use.push(<Text key={i} style={textColor}>{e}</Text>))
  spell.data.data.forEach((e,i)=>data.push(<Text key={i} style={[textColor,{marginTop:"1%"}]}>{e}</Text>))
  let classes=[]
  types.slice(2,types.length-1).forEach(e=>classes.push(capitalize(e)+", "));
  classes.push(capitalize(types[types.length-1]))

  function capitalize(e){
    return String(e).charAt(0).toUpperCase()+String(e).slice(1)
  }
  const controllTrigger=()=>()=>controller(false,{name:"",use:[],data:[],level:0,types:""})
  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={spell.show} 
      onRequestClose={controllTrigger()}>
      <TouchableWithoutFeedback onPress={controllTrigger()}>
        <View style={{height:"100%",width:"100%"}}>
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
            <Text style={[textColor,{marginTop:"3%"}]}>Classes that can use:</Text>
            <Text style={textColor}>{classes}</Text>
            </View>
            <View style={styles.description}>
              <Text style={[textColor,{marginTop:"4%"}]}>Description:</Text>
              <ScrollView> 
                <TouchableWithoutFeedback onPress={controllTrigger()}>
                  <View onStartShouldSetResponder={() => true}>
                    {data}
                  </View>
                </TouchableWithoutFeedback>
              </ScrollView>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles=StyleSheet.create({
    white:{color:"#fff"},
    black:{color:"#000"},
    description:{height:"60%"},
    image:{
      height:80,
      width:80,
      resizeMode:"contain"
    },
    spellViewTop:{
      justifyContent:"space-between",
      flexDirection:"row",
      alignItems:"center"
    },
    spellView:{
      borderRadius:20,
      padding:"4%",
      margin:"5%",
      height:"90%",
      borderColor:"#f80",
      borderWidth:1
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

