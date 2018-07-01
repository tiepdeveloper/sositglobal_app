import React, { Component } from 'react';
import { Container, Content, TabHeading, Tab, Tabs, Text, Icon } from 'native-base';
import Footer from './../../components/Footer/Index';
import HeaderDashboard from './../../components/Dashboard/header';
import SettingDashboard from './../../components/Dashboard/Tabs/Setting';
import OrderDashboard from './../../components/Dashboard/Tabs/Orders';
import Header from './../../components/Header/Index';
import { requestChecklogin } from './actions';
import { connect } from 'react-redux'
import  { Actions } from 'react-native-router-flux';
export class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            message: '',
        };

        this.checkLogin = () => {
            this.props.requestChecklogin(this.state.username.toLocaleLowerCase(),this.state.password.toLocaleLowerCase());
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.account.loginStatus && nextProps.account.token !== ''){
            this.setState({message: ''});
            Actions.homepage();
        } else if(nextProps.account.isFetching === false && nextProps.account.loginStatus === false) {
            this.setState({message: 'Invalid username or password'});
        }

    }
    render() {
        return (
            <Container>
                <Header title="Nguyễn Đình Tiệp"/>
                <Content>
                    <HeaderDashboard />
                    <Tabs>
                        <Tab heading={ <TabHeading><Icon name="calculator" /><Text>Order</Text></TabHeading>}>
                        <OrderDashboard />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="apps" /><Text>Setting</Text></TabHeading>}>
                          <SettingDashboard />
                        </Tab>
                    </Tabs>
                </Content>
                <Footer account={true} />
            </Container>
        );
    }
}

Index.defaultProps = {
    account: {},
};

function mapStateToProps (state) {
    return {
        account: state.account
    }
}

function mapDispatchToProps (dispatch) {
    return {
        requestChecklogin:  (username,password) => dispatch(requestChecklogin(username,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);