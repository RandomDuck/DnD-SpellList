import React, { useState } from 'react';
import { Modal, View, Text, Switch, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { spellTextColor, spellTypes, classTypes} from './dataHandler';

export default function FilterModal({show,filterModal,filterController}){

    const filterUpdate = ()=>filterController({classes:getStrings(Class),types:getStrings(Type)})
    function getStrings(e){
        let array=[]
        for(let i in e){if(e[i]==true){array.push(i)}}
        return array;
    }
    
    const [Type, setType] = useState(spellTypes.reduce((o, key) => ({ ...o, [key]: true}), {}))
    const [Class, setClass] = useState(classTypes.reduce((o, key) => ({ ...o, [key]: true}), {}))
    function filterFillType(bool){
        setType(spellTypes.reduce((o, key) => ({ ...o, [key]: bool}), {}))
        if (bool) {
            filterController({classes:getStrings(Class),types:spellTypes})
        }else{
            filterController({classes:getStrings(Class),types:[]})
        }
    }
    function filterFillClass(bool){
        setClass(classTypes.reduce((o, key) => ({ ...o, [key]: bool}), {}))
        if (bool) {
            filterController({classes:classTypes,types:getStrings(Type)})
        }else{
            filterController({classes:[],types:getStrings(Type)})
        }
    }
    function typeSet(val,bool){
        let data=Type
        data[val]=bool
        setType(data)
        filterUpdate()
    }
    function classSet(val,bool){
        let data=Class
        data[val]=bool
        setClass(data)
        filterUpdate()
    }
    
    let spellFilters=[]
    let classFilters=[]
    spellTypes.forEach((e,i)=>{spellFilters.push(FilterObject(typeSet,e,Type[e],e+i))})
    classTypes.forEach((e,i)=>{classFilters.push(FilterObject(classSet,e,Class[e],e+i))})
    return(
    <Modal 
        visible={show} 
        onRequestClose={()=>filterModal(false)}
        animationType={"slide"}
        transparent={true}>
        <TouchableWithoutFeedback onPress={()=>filterModal(false)}>
            <View style={styles.modalTopView}>
                <View style={styles.modalMain} onStartShouldSetResponder={() => true}>
                    <Text style={styles.header}>Filter</Text>
                    <Text style={styles.subHeader}>Spell types:</Text>
                    <View style={styles.objectContainer}>{spellFilters}</View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>filterFillType(false)}><Text>Clear filters</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>filterFillType(true)}><Text>Apply all filters</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.subHeader}>Classes:</Text>
                    <View style={styles.objectContainer}>{classFilters}</View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>filterFillClass(false)}><Text>Clear filters</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>filterFillClass(true)}><Text>Apply all filters</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
    );
}

function FilterObject(controller,type,on,index,filterUpdate){
    function capitalize(e){return String(e).charAt(0).toUpperCase()+String(e).slice(1)}
    return(
        <View style={[styles[type],styles.object]} key={index}>
            <Text style={styles[spellTextColor[type]]}>{capitalize(type)}</Text>
            <Switch 
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                onValueChange={()=>controller(type,!on)}
                value={on}/>
        </View>
    );
}

const styles=StyleSheet.create({
        white:{color:"#fff"},
        black:{color:"#000"},
        buttonContainer:{flexDirection:"row",justifyContent:"space-evenly",marginTop:"2%"},
        button:{padding:"2%",backgroundColor:"#0af"},
        modalTopView:{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
        },
        modalMain:{
            backgroundColor:"#fa0",
            padding:"2%",
            borderRadius:20
        },
        header:{
            textAlign:"center",
            fontSize:22,
            fontWeight:"bold"
        },
        subHeader:{
            fontSize:18,
            fontWeight:"800",
            marginTop:"2%"
        },
        objectContainer:{
            justifyContent:"space-evenly",
            flexDirection:"row",
            flexWrap:"wrap",
            width:"90%"
        },
        object:{
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-between",
            padding:"2%",
            borderRadius:10,
            width:"49%",
            marginBottom:"1%"
        },
        bard:{backgroundColor:"#a60"},
        cleric:{backgroundColor:"#a60"},
        druid:{backgroundColor:"#a60"},
        paladin:{backgroundColor:"#a60"},
        ranger:{backgroundColor:"#a60"},
        sorcerer:{backgroundColor:"#a60"},
        warlock:{backgroundColor:"#a60"},
        wizard:{backgroundColor:"#a60"},
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