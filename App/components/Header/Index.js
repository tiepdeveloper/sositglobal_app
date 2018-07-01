import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons/index';
import {  Header as HeaderBase, Item, Left, Right, Button, Title, Icon, Input } from 'native-base';
export default class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<HeaderBase noShadow searchBar={this.props.isHome} rounded={this.props.isHome}>
            {this.props.isHome?(<Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Button small transparent>
                    <Icon name="search" />
                </Button>
            </Item>):(<Left>
                <Title>{this.props.title}</Title>
            </Left>)}
            <Button transparent>
                <FontAwesome style={{ fontSize:25}} name="sign-out" />
            </Button>
        </HeaderBase>)
    }
}