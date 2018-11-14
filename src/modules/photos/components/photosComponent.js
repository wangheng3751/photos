import React, { Component } from 'react';
import {  StyleSheet, Platform, TextInput, View, Dimensions, Text,FlatList, Image, TouchableOpacity,StatusBar,ScrollView } from 'react-native';

export default class PhotosComponent extends Component {
    _keyExtractor = (item, index) => item.id;
    constructor(props) {
        super(props);
        this.state={
           dataList:[
            {id:0, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg" },
            {id:1, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542188204731&di=642241c8f990d426b72e31638f5888e9&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1402%2F11%2Fc20%2F31163930_1392106506780_mthumb.jpg" },
            {id:2, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542192725054&di=fd2101f414b0d57f52872bede6642119&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69372f5431326534394641686258585858585858585f2121302d6974656d5f7069632e6a7067.jpg" },
            {id:4, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg" },
            {id:5, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542188204731&di=642241c8f990d426b72e31638f5888e9&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1402%2F11%2Fc20%2F31163930_1392106506780_mthumb.jpg" },
            {id:6, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542192725054&di=fd2101f414b0d57f52872bede6642119&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69372f5431326534394641686258585858585858585f2121302d6974656d5f7069632e6a7067.jpg" },
            {id:7, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg" },
            {id:8, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542188204731&di=642241c8f990d426b72e31638f5888e9&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1402%2F11%2Fc20%2F31163930_1392106506780_mthumb.jpg" },
            {id:9, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542192725054&di=fd2101f414b0d57f52872bede6642119&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69372f5431326534394641686258585858585858585f2121302d6974656d5f7069632e6a7067.jpg"}
           ]
        }
    }
    componentWillMount(){
        
    }
    
    render() {
        return (         
            <View style={styles.container}>
                <StatusBar backgroundColor="#2870E5" barStyle="light-content"/>         
                <View style={styles.content}>
                    <View style={styles.search_box}>
                        <Image source={require("../../../resource/images/menus-img.png")} style={styles.img}/>
                        <TextInput placeholder='search...' style={styles.input}/>
                        <Image source={require("../../../resource/images/operate-img.png")} style={styles.img}/>
                    </View>
                    <ScrollView>
                    <Text style={[styles.date_common]}>Today</Text>
                    <FlatList 
                        style={[{marginTop:10}]}
                        data={this.state.dataList} numColumns={3}
                        keyExtractor={this._keyExtractor}
                        ItemSeparatorComponent={()=>{return (<View style={{height:10}}></View>)}}
                        renderItem={({item,s,index}) => (                           
                            <View style={[index%3!=2&&{marginRight:10}]}>
                                <TouchableOpacity  onPress={() => {  }}>
                                    <Image source={{uri:item.picture}} style={styles.photos}/>
                                </TouchableOpacity>   
                            </View>                           
                        )}
                    />
                    <Text style={[styles.date_common,styles.date]}>Yesterday</Text>
                    <FlatList 
                        style={[{marginTop:10}]}
                        data={this.state.dataList} numColumns={3}
                        keyExtractor={this._keyExtractor}
                        ItemSeparatorComponent={()=>{return (<View style={{height:10}}></View>)}}
                        renderItem={({item,s,index}) => (                           
                            <View style={[index%3!=2&&{marginRight:10}]}>
                                <TouchableOpacity  onPress={() => {  }}>
                                    <Image source={{uri:item.picture}} style={styles.photos}/>
                                </TouchableOpacity>   
                            </View>                           
                        )}
                    />
                    </ScrollView>
                </View>
            </View>
        )
    }  
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
       flex:1,
       marginBottom:100
    },
    content:{
       marginTop:(Platform.OS === 'android')?0:20,
       backgroundColor:"#fff"
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    },
    photos:{
        height:(width-20)/3,
        width:(width-20)/3
    },
    search_box:{
        alignItems:"center",
        flexDirection: 'row',
        margin:20,
        borderWidth:1,
        borderColor:"#E8E8E8",
        padding:10,
        borderRadius:5
    },
    img:{
        height:25,
        width:30
    },
    input:{
        marginLeft:15,
        height:35,
        flex:1,
        fontSize:16
    },
    date_common:{
        marginLeft:20,
        marginBottom:10,
        fontSize:18,
        fontWeight:'600'
    },
    date:{
        marginBottom:20,
        marginTop:20
    }
});
