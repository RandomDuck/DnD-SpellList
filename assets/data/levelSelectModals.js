import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text, TouchableWithoutFeedback} from 'react-native';

function LevelOpen({controller,title}){
    return(
        <TouchableOpacity style={styles.levelOpen} onPress={()=>controller(true)}>
            <Text style={styles.spacer}>Spell levels: {title}</Text>
        </TouchableOpacity>
    );
}

function Selector({controller,spellController,name,value}){
    return(
        <TouchableOpacity style={styles.selector} onPress={()=>{spellController(value),controller(false)}}>
            <Text style={{textAlign:"center"}}>{name}</Text>
        </TouchableOpacity>
    ); 
}

function LevelModal({show,controller,spellController}){
    return(
        <Modal
        animationType="slide"
        transparent={false}
        visible={show}
        onRequestClose={()=>controller(false)} >
            <TouchableWithoutFeedback onPress={()=>controller(false)}>
                <View style={styles.levelView}>
                    <Selector controller={controller} spellController={spellController} name={"Cantrips"} value={0}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 1"} value={1}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 2"} value={2}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 3"} value={3}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 4"} value={4}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 5"} value={5}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 6"} value={6}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 7"} value={7}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 8"} value={8}/>
                    <Selector controller={controller} spellController={spellController} name={"Level 9"} value={9}/>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles=StyleSheet.create({
    levelOpen:{
        marginTop:"2%",
        backgroundColor:"#aaa",
        marginLeft:"2%",
        marginRight:"2%"
    },
    selector:{
      padding:"2%",
      margin:"2%",
      backgroundColor:"#aaa",
      color:"#000"
    },
    spacer:{
      padding:"2%",
      textAlign:"center",
      margin:"2%",
      backgroundColor:"#222",
      color:"#fff"
    },
    levelView:{
        alignContent:"center",
        justifyContent:"center",
        padding:"4%",
        height:"100%",
        backgroundColor:"#333"
    }
});

export {LevelOpen,LevelModal}