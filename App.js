import React, { useState } from 'react';
import { View, StatusBar, TouchableWithoutFeedback} from 'react-native';
import { backgroundImg, classTypes, spellTypes, spellList } from './assets/data/dataHandler'
import MenuBar from './assets/components/menuBar';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  function touchHandle(event) {
    console.log(event)
  }
  return (
  <View>
    <StatusBar barStyle="light-content" />
    <TouchableWithoutFeedback onPress={e=>touchHandle(e)}>
      <MenuBar />
    </TouchableWithoutFeedback>
  </View>);
}