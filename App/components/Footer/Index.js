import React  from 'react';
import {  Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import  { Actions } from 'react-native-router-flux';
export default (props) => (
    <Footer>
        <FooterTab>
            <Button active={props.home} onPress={() => Actions.homepage()} vertical>
                <Icon active name="apps" />
                <Text>Home</Text>
            </Button>
            <Button active={props.category} onPress={() => Actions.category()}  vertical>
                <Icon name="grid" />
                <Text>Category</Text>
            </Button>
            <Button active={props.account} onPress={() => Actions.login()} vertical>
                <Icon name="person" />
                <Text>Account</Text>
            </Button>
            <Button active={props.cart} vertical badge={(props.itemCart > 0)?true:false}>
                {(props.itemCart > 0)?(<Badge><Text>{props.itemCart}</Text></Badge>):null}

                <Icon name="cart" />
                <Text>Cart</Text>
            </Button>
        </FooterTab>
    </Footer>
)