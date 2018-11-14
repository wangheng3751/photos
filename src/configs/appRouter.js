import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    BackHandler,
    StyleSheet,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer } from 'react-native-router-flux';
import TabIcon from '../common/tabIcons';
import PhotosPage from '../modules/photos/containers/photosPage';
import AlbumsPage from '../modules/albums/containers/albumsPage';
import SharingPage from '../modules/sharing/containers/sharingPage';
import AssistantPage from '../modules/assistant/containers/assistantPage';

class AppRouter extends Component {
    static propTypes = {
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    createReducer(params) {
        const defaultReducer = Reducer(params);
        return (state, action) => {
          this.props.dispatch(action);
          return defaultReducer(state, action);
        };
    }

    onExitApp(){
        BackHandler.exitApp();
        return true;
    }

    render() {
        return (
            <Router onExitApp={this.onExitApp} 
                    createReducer={ this.createReducer.bind(this) }
                    scenes={ scenes }
             >          
            </Router >
        )
    }    
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#fff',
        height:60
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#fff'
    },
    titleStyle: {
        color: 'white',
        marginTop: (Platform.OS === 'android') ? -8 : 0,
    }
})

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
        <Scene key="photos" component={PhotosPage} title="Photos" hideNavBar={true}/>
        <Scene key="tabbar"    
            initial            
            tabs={true}
            tabBarPosition="bottom"
            showLabel={false}
            swipeEnabled={false}
            tabBarStyle={styles.tabBarStyle}
            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
            titleStyle={styles.titleStyle}>
            <Scene key="photos"
                hideNavBar={true}
                component={PhotosPage}
                icon={TabIcon}
                titleStyle={styles.titleStyle}/>

            <Scene key="albums"
                hideNavBar={true}
                component={AlbumsPage}      
                icon={TabIcon}                
                titleStyle={styles.titleStyle} />

            <Scene key="assistant"
                hideNavBar={true}
                component={AssistantPage}                           
                icon={TabIcon}
                titleStyle={styles.titleStyle} />

            <Scene key="sharing"
                hideNavBar={true}
                component={SharingPage}                    
                icon={TabIcon}
                titleStyle={styles.titleStyle} />
        </Scene>
    </Scene>
)

export default connect()(AppRouter);