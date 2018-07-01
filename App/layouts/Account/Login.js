import React, { Component } from 'react';
import  { AsyncStorage } from 'react-native';
import { Container, Content, Form, Input, Item, Label, Button, Text, View,Toast, CheckBox, Body, ListItem } from 'native-base';
import { createStructuredSelector } from 'reselect';
import Footer from './../../components/Footer/Index';
import Header from './../../components/Header/Index';
import { requestChecklogin, requestAutoLogin } from './actions';
import { connect } from 'react-redux'
import  { Actions } from 'react-native-router-flux';
import { makeSelectLoginProps } from './selectors';

const keyStore = 'userData';
export class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            message: '',
            remember:false,
        };
        this._retrieveData();
        if(props.account.loginStatus === true){
            Actions.dashboard();
        }

        this.checkLogin = () => {
           this.props.requestChecklogin(this.state.username.toLocaleLowerCase(),this.state.password.toLocaleLowerCase());
        }
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem(keyStore);
            if (value !== null) {
            Actions.dashboard();
            }
            return null;
        } catch (error) {
            return null;
        }
    };
    _storeData = async () => {
        try {
            await AsyncStorage.setItem(keyStore, JSON.stringify(this.props.account));
        } catch (error) {
        }
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.account.loginStatus === true && nextProps.account.token !== ''){
            if(this.state.remember === true){
                this._storeData();
            }
            this.setState({message: ''});
            Actions.dashboard();
        } else if(nextProps.account.isFetching === false && nextProps.account.loginStatus === false) {
            Toast.show({
                text: nextProps.account.message,
                buttonText: "Okay",
                position: "top",
                duration: 3000,
                type:'danger'
            });
        }

    }
      render() {
        return (
            <Container>
                <Header title="Đăng nhập"/>
                <Content>
                    <Text style={{ textAlign:'center',color:'red' }}>{this.state.message}</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input value={this.state.username} onChangeText={(text) => {this.setState({username: text.toLocaleString()}); }}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry value={this.state.password} onChangeText={(text) => {this.setState({password: text}); }} />
                        </Item>
                        <ListItem onPress={() => this.setState({remember: !this.state.remember})}>
                            <CheckBox checked={this.state.remember}  color="green"/>
                            <Body>
                            <Text>Remember login</Text>
                            </Body>
                        </ListItem>
                        <View style={{ padding: 20}}>
                        <Button onPress={() => this.checkLogin()} block><Text>Login</Text></Button>
                        </View>
                    </Form>
                </Content>
                <Footer account={true} />
            </Container>
        );
    }
}

Index.defaultProps = {
    account: {},
};
const mapStateToProps = createStructuredSelector({
    account: makeSelectLoginProps(),
});

function mapDispatchToProps (dispatch) {
    return {
        requestChecklogin:  (username,password) => dispatch(requestChecklogin(username,password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);