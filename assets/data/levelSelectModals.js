import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text, TouchableWithoutFeedback} from 'react-native';
function LevelOpen({controller,opened}){
    return(
        <TouchableOpacity style={styles.levelOpen}>
        <Text style={styles.spacer}>Select spell level</Text>
        </TouchableOpacity>
    );
}
  
function LevelModal({show,controller}){
    <Modal
    animationType="slide"
    transparent={true}
    visible={show} >
        <TouchableWithoutFeedback onPress={()=>controller(false)}>
            <View style={styles.spellView}>
                <Text>test</Text>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
}

const styles=StyleSheet.create({
    levelOpen:{
      backgroundColor:"#aaa"
    },
    spellView:{
        padding:"4%",
        margin:"4%",
        height:"90%"
    }
});
export {LevelOpen,LevelModal}