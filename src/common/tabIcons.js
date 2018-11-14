import React, { Component } from 'react';
import { View, Image, Text, StyleSheet,Dimensions } from 'react-native';
class TabIcon extends Component {
    constructor(props){
        super(props);       
    }

    render(){
        let selected=this.props.focused;
        let data={
            photos:{
                title:"Photos",
                icon:!selected?require("../resource/images/photos.png"):require("../resource/images/photos-selected.png")
            },
            albums:{
                title:"Albums",
                icon:!selected?require("../resource/images/albums.png"):require("../resource/images/albums-selected.png")
            },
            assistant:{
                title:"Assistant",
                icon:!selected?require("../resource/images/assistant.png"):require("../resource/images/assistant-selected.png")
            },
            sharing:{
                title:"Sharing",
                icon:!selected?require("../resource/images/sharing.png"):require("../resource/images/sharing-selected.png")
            }
      }
      let param=data[this.props.navigation.state.key];
      return  <View style={styles.tabbarContainer}>
                <Image style={{ width: 25, height: 25,resizeMode:'contain' }} source={param.icon} />
                <Text style={[styles.tabbarItem,selected&&{color:'#2870E5'}]}>{param.title}</Text>
              </View>
    }
}

const styles = StyleSheet.create({
    tabbarContainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      width:Dimensions.get('window').width/4
    },
    tabbarItem:{  
      marginTop:5,    
      textAlign:"center",
      //color:'#a3a3a4'
    }
});

module.exports = TabIcon;