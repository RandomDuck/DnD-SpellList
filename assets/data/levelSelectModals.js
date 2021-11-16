import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, Text} from 'react-native';

function LevelOpen({show,controller,title}){
    return(
        <TouchableOpacity style={styles.levelOpen} onPress={()=>controller(!show)}>
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
    const openAnim = React.useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    let selectors=[];
    let values=[];
    for (let i=0; i<names.length; i++) {
        let z = nameValues != undefined ? nameValues[i] : i;
        values.push({name:names[i], value:z, key:i});
    }
    values.forEach(i=>selectors.push(<Selector controller={controller} spellController={spellController} name={i.name} value={i.value} key={i.key}/>))

    React.useEffect(() => {
        if (show) {
            Animated.timing(
            openAnim,
            {
                toValue: 32.5*selectors.length,
                duration: 200,
                useNativeDriver: false
            }
            ).start();
        } else {
            Animated.timing(
              openAnim,
              {
                toValue: 0,
                useNativeDriver: false
              }
            ).start();
        }
      }, [openAnim, show])
    
    return show && <Animated.View style={{ overflow: 'hidden', height:openAnim, ...styles.levelView}}>{selectors}</Animated.View>
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
        position: 'absolute',
        top: '6%',
        left: '30%',
        alignContent:'center',
        width: '40%',
        padding:'4%',
        backgroundColor:'#333'
    }
});

export {LevelOpen,LevelModal}