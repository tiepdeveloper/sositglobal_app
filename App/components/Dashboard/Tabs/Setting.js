import React from 'react';
import { List, Text, Left, ListItem, Right, Switch, Icon, Body } from 'native-base';

export default (props) => (
    <List>
        <ListItem icon>
            <Left>
                <Icon name="plane" />
            </Left>
            <Body>
            <Text>Airplane Mode</Text>
            </Body>
            <Right>
                <Switch value={false} />
            </Right>
        </ListItem>
        <ListItem icon>
            <Left>
                <Icon name="wifi" />
            </Left>
            <Body>
            <Text>Wi-Fi</Text>
            </Body>
            <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
            </Right>
        </ListItem>
        <ListItem icon>
            <Left>
                <Icon name="bluetooth" />
            </Left>
            <Body>
            <Text>Bluetooth</Text>
            </Body>
            <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
            </Right>
        </ListItem>
    </List>
)