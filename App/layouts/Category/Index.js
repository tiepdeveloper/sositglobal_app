import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import Footer from './../../components/Footer/Index';
export default class Index extends Component {
    render() {
        return (
            <Container>
                <Content>

                </Content>
                <Footer category={true} />
            </Container>
        );
    }
}