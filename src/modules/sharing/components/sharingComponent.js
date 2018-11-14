import React, { Component } from 'react';
import {  StyleSheet, Platform, TextInput, View, Dimensions, Text,FlatList, Image, TouchableOpacity,StatusBar,ScrollView } from 'react-native';

export default class SharingComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
           
        }
    }
    componentWillMount(){
        
    }
    
    render() {
        return (         
            <View style={[styles.container,styles.center]}>
                <Text>Sharing</Text>
            </View>
        )
    }  
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
       marginTop:20,
       flex:1,
       backgroundColor:"#fff"
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    }
});
