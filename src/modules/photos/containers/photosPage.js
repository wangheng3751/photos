import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as photosActions from '../photosActions';
import PhotosComponent from "../components/photosComponent"

class PhotosPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
       
    }
    componentWillReceiveProps(nextProps,nextState){
        
    }
    onSignup(){
        Actions.signup();
    }
    onForgotPassword(){
        Actions.findPasswordFirstSteps();
    }
    render() {
        return (
            <PhotosComponent />
        )
    }  
}

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(photosActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);