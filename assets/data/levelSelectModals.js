import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text, TouchableWithoutFeedback} from 'react-native';

function LevelOpen({controller,title}){
    return(
        <TouchableOpacity style={styles.levelOpen} onPress={()=>controller(true)}>
            <Text style={styles.spacer}>{title}</Text>
        </TouchableOpacity>
    );
}

function Selector({controller,spellController,name,value}){
    return(
        <TouchableOpacity style={styles.selectorMain} onPress={()=>{spellController(value),controller(false)}}>
            <Text style={styles.selector}>{name}</Text>
        </TouchableOpacity>
    ); 
}

function LevelModal({show,controller,spellController,names,nameValues=undefined}){
    let selectors=[];
    let values=[];
    for (let i=0; i<names.length; i++) {
        let z = nameValues != undefined ? nameValues[i] : i;
        values.push({name:names[i], value:z, key:i});
    }
    values.forEach(i=>selectors.push(<Selector controller={controller} spellController={spellController} name={i.name} value={i.value} key={i.key}/>))
    return(
        <Modal
        animationType='slide'
        transparent={false}
        visible={show}
        onRequestClose={()=>controller(false)} >
            <TouchableWithoutFeedback onPress={()=>controller(false)}>
                <View style={styles.levelView}>
                    {selectors}
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles=StyleSheet.create({
    levelOpen:{
        backgroundColor:'#aaa',
        marginLeft:'2%',
        marginRight:'2%'
    },
    selectorMain:{padding:'2%'},
    selector:{
        padding:'2%',
        backgroundColor:'#aaa',
        color:'#000',
        textAlign:'center'

    },
    spacer:{
        padding:10,
        textAlign:'center',
        margin:5,
        backgroundColor:'#222',
        color:'#fff'
    },
    levelView:{
        alignContent:'center',
        justifyContent:'center',
        padding:'4%',
        height:'100%',
        backgroundColor:'#333'
    }
});

export {LevelOpen,LevelModal}