import React, { Component } from 'react';
import {  StyleSheet, Platform, TextInput, View, Dimensions, Text,ImageBackground, Image, TouchableOpacity } from 'react-native';

export default class PhotosComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
           
        }
    }
    componentWillMount(){
        
    }
    
    render() {
        return (         
            <View style={styles.container}>
                <Text>PhotosComponent</Text>
            </View>
        )
    }  
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
       flex:1,
       alignItems:"center",
       justifyContent:"center"
    }
});
