import React, { useState, useRef } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Image, Text, TextInput, ScrollView, Linking } from 'react-native';
import { settings } from './dataHandler'

function TouchOutsideModal(props){
    return(
        <Modal
            style={props.modalStyle}
            transparent={props.transparent}
            animationType={props.animationType}
            onRequestClose={()=>props.controller(false)}
            visible={props.visible}>
            <TouchableWithoutFeedback onPress={()=>props.controller(false)}>
                <View style={{width:'100%',height:'100%'}}>
                    <View style={props.style} onStartShouldSetResponder={() => !props.dissmisOnPress}>
                        {props.children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

function OutsideModalTrigger(props){
    return(
        <TouchableOpacity style={props.outStyle} onPress={()=>props.controller(true)}>
            <View style={props.style}>
                <Image style={props.imgStyle} source={props.image} />
            </View>
        </TouchableOpacity>
    );
}

function AboutModal(props){
    return(
        <TouchOutsideModal 
            controller={props.controller}
            transparent={true}
            animationType={'slide'}
            visible={props.visible}
            style={styles.aboutStyle}
            dissmisOnPress={true}>
            <>
                <Text style={styles.aboutHeader}>About</Text>
                <Text style={styles.aboutText}>
                    This is a fun little app I made to help all the D&D DMs and players out there.
                </Text>
                <Text style={styles.aboutText}>
                    It's not easy keeping track of all the spells in 5e. And it's a pain to look them up in the books mid session.  
                </Text>
                <Text style={styles.aboutText}>
                    This app is entirely free. No ads either. However if you like it, feel free to send me a little thank you with the link below.
                </Text>
                <Text style={{color:'#05a',alignSelf:'center',textAlign:'center',padding:'2%',fontSize:18}}
                    onPress={() => Linking.openURL(settings.donateUrl)}>
                    Buy the dev a coffee
                </Text>
            </>
        </TouchOutsideModal>
    )
}

function NumberInput(props){
    return(
        <View style={styles.numInpMain}>
            <Text style={styles.numInpText}>{props.text} </Text>
            <TextInput 
                style={styles.numberInput} 
                keyboardType={'numeric'} 
                value={String(props.value)} 
                onChangeText={(e)=>props.controller(e>props.maxValue||e<-props.maxValue?e>props.maxValue?props.maxValue:-props.maxValue:e)}/>
        </View>
    )
}

function DiceButton(props){

    function roll(){
        let value=Math.floor((Math.random()*props.num)+1)
        let mod=props.mod()
        if(props.coinFlip==true){
            props.controller(value==1?'Heads':'Tails')
            return;
        }
        let data=`${props.name} roll: ${value}`
        if(mod>0){data+=` +${mod} (${value+mod})`}
        if(mod<0){data+=` ${mod} (${value+mod})`}
        props.controller(data)
    }

    return(
        <TouchableOpacity style={[styles.button,props.style]} onPress={()=>roll()}>
            <Text style={styles.diceText}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
}

function DiceModal(props){

    const diceScroll = useRef(null)
    const [roll, setRoll] = useState('')
    const [diceMod,setDiceMod] = useState('')

    function addRoll(data) { setRoll(data+','+roll)}
    function diceModer(mod) {setDiceMod(mod)}
    function getMod(){return isNaN(parseInt(diceMod)) ? 0 : parseInt(diceMod)}

    let set=[4,6,8,10,12,20,100];
    let dices=[];
    let rolls=[]
    roll.split(',').forEach((e,i)=>rolls.push(<Text key={i+e} style={{textAlign:'center',width:'100%',color:'white'}}>{e}</Text>))
    set.forEach((e)=>dices.push(<DiceButton key={'D'+e} name={'D'+e} controller={addRoll} mod={getMod} num={e} style={{backgroundColor:'#250'}}/>));
    
    return(
        <TouchOutsideModal 
            controller={props.controller}
            transparent={true}
            animationType={'slide'}
            modalStyle={styles.diceModal}
            visible={props.visible}
            style={styles.diceStyle}
            dissmisOnPress={false}>
            <>
                <Text style={styles.aboutHeader}>Dice Roller</Text>
                <NumberInput text={'Modifire: (optional)'} controller={diceModer} value={diceMod} maxValue={500}/>
                <View style={styles.diceButtonContainer}>
                    <DiceButton name={'Coin'} controller={addRoll} mod={getMod} num={2} style={{backgroundColor:'#207'}} coinFlip={true}/>
                    {dices}
                </View>
                <Text style={{alignSelf:'center',color:'white',fontSize:20}}>Result:</Text>
                <View onStartShouldSetResponder={()=>true} style={{width:'80%',height:'45%'}}>
                    <ScrollView ref={diceScroll} onContentSizeChange={()=>diceScroll.current.scrollTo({x: 0, y: 0, animated: true})} style={{width:'100%',height:'50%'}}>{rolls}</ScrollView>
                </View>
            </>
        </TouchOutsideModal>
    );
}
export {AboutModal,DiceModal,OutsideModalTrigger}

const styles=StyleSheet.create({
        diceButtonContainer:{
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center'
        },
        aboutStyle:{
            backgroundColor:'#444',
            padding:'6%',
            paddingTop:'3%',
            margin:'15%',
            marginBottom:0,
            borderRadius:10,
            borderColor:'#000',
            borderWidth:2
        },
        aboutText:{
            paddingBottom:'3%',
            color:'white',
            fontSize:14
        },
        aboutHeader:{
            textAlign:'center',
            color:'white',
            fontSize:30
        },
        diceStyle:{
            backgroundColor:'#555',
            borderRadius:20,
            alignItems:'center',
            margin:'5%',
            marginTop:'20%',
            marginBottom:'1%',
            paddingTop:'2%',
            borderColor:'#000',
            borderWidth:2
        },
        diceText:{
            color:'white',
            textAlign:'center'
        },
        button:{
            margin:'1%',
            marginBottom:'2%',
            marginTop:'2%',
            width:'20%',
            paddingBottom:'2%',
            paddingTop:'2%',
            borderRadius:19,
            backgroundColor:'#333',
            borderColor:'#111',
            borderWidth:1
        },
        numberInput:{ 
            backgroundColor:'#aaa',
            flexGrow:5,
            textAlign:'center',
            borderRadius:5
        },
        numInpMain:{
            justifyContent:'space-evenly',
            flexDirection:'row',
            width:'85%',
            alignItems:'center',
            padding:'2%',
            backgroundColor:'#222',
            marginTop:'3%',
            borderRadius:10
        },
        numInpText:{
            color:'white',
            flexGrow:1
        }
    }
);