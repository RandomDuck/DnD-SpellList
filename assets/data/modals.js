import React, { useState } from 'react';
import { View, Image, Modal } from 'react-native';


function Level(){
    return(
      <View style={styles}></View>
    );
}

function LevelSelect({show}){
  return(
    <Modal
      visible={show} 
    >

    </Modal>
  );
}
function spellModal(){

}
const styles=StyleSheet.create({})

export{spellModal,LevelSelect}