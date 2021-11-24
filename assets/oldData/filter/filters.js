import React from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SearchBar({controller,filterModal}){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.flexRow}>
                <View style={styles.searchContainer}>
                    <Text style={styles.white}>Search:</Text>
                    <TextInput style={styles.inputField} onChangeText={(e)=>controller(e)}/>
                </View>
                <FilterOpen controller={filterModal}/>
            </View>
        </View>
    );
}

function FilterOpen({controller}){
    return(
        <TouchableOpacity onPress={()=>{controller(true)}} style={styles.filterTouch}>
            <Text>Filter</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
        inputField:{
            backgroundColor:'#aaa',
            width:'80%'
        },
        mainContainer:{
            alignItems:'center',
            margin:'2%',
            marginTop:0,
            backgroundColor:'#111',
            borderRadius:10,
            borderTopLeftRadius:0,
            borderTopRightRadius:0,
            padding:'2%'
        },
        filterTouch:{
            backgroundColor:'#aaa',
            padding:'2.23%'
        },
        searchContainer:{
            backgroundColor:'#777',
            flexDirection:'row',
            alignItems:'center',
            padding:'1%',
            justifyContent:'space-evenly',
            width:'86%',
            alignSelf:'center'
        },
        white:{color:'#fff'},
        flexRow:{flexDirection:'row'}
    }
);