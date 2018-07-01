import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default (props) => (
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail style={{ resizeMode:'contain'}} source={{uri: props.thumbImage}} />
                                <Body>
                                <Text style={{textAlign:'justify'}} >{props.title}</Text>
                                <Text note>{props.author}</Text>
                                </Body>
                            </Left>
                                <Button transparent small iconLeft>
                                    <Icon name="thumbs-up"/>
                                    <Text>{props.totalLike}</Text>
                                </Button>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: props.Image}} style={{height: 200, width: null, flex: 1,resizeMode:'contain'}}/>
                        </CardItem>
                        <CardItem>
                            <Body style={{flex: 1,flexDirection: 'row', alignItems: 'center',  justifyContent: 'center' }}>
                            <Button small iconLeft>
                                <Icon  name="cart" />
                                <Text>{props.price} Buy</Text>
                            </Button>
                            </Body>
                        </CardItem>
                    </Card>
        )