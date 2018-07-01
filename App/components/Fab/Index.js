import React, { PureComponent } from 'react';
import {  Button, Icon, Fab, View } from 'native-base';
export default class Index extends PureComponent {
    constructor() {
        super();
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <View>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="mail" />
                    </Button>
                </Fab>
            </View>
        );
    }
}