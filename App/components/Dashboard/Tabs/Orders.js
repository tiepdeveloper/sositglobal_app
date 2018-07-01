import React, { Component } from 'react';
import {  List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Button } from 'native-base';
export default class Orders extends Component {
    render() {
        return (
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://bachkhoa-aptech.edu.vn/upload/image/vi-sao-php-duoc-dung-nhieu-nhat.jpeg' }} />
                            </Left>
                            <Body>
                            <Text>Don't give up my dream</Text>
                            <Text note>feeling good when you are boss</Text>
                            </Body>
                            <Right>
                                <Button transparent><Icon name="eye" /> </Button>
                            </Right>
                        </ListItem>
                    </List>
        );
    }
}