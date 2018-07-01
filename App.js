import React, { Component } from 'react';
import { Root } from 'native-base';
import { AppRegistry, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Font, AppLoading } from 'expo';
import configureStore from './App/redux/store';
import Router from './App/config/routes';
const  store = configureStore();

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            isReady: false,
        }
    }
    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
        });
        this.setState({isReady: true});
    }

    render() {

        if (!this.state.isReady) {
            return <AppLoading />;
        }
        return (
            <Root>
            <Provider store={store}>
                <Router />
            </Provider>
            </Root>
        );
    }
}
AppRegistry.registerComponent('main', () => App);