import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AlbumsComponent from "../components/albumsComponent"

class AlbumsPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
       
    }
    componentWillReceiveProps(nextProps,nextState){
        
    }
    render() {
        return (
            <AlbumsComponent />
        )
    }  
}

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);