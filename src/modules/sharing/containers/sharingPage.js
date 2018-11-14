import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SharingComponent from "../components/sharingComponent"

class SharingPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
       
    }
    componentWillReceiveProps(nextProps,nextState){
        
    }
    render() {
        return (
            <SharingComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(SharingPage);