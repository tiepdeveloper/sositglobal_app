import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { createStructuredSelector } from 'reselect';
import Footer from './../../components/Footer/Index';
import Fab from './../../components/Fab/Index';
import ItemsPost from './../../components/Items/Index';
import Header from './../../components/Header/Index';
import { makeSelectHomepageProps } from './selectors';
import { connect } from 'react-redux'
import { fetchData } from './actions'
import {makeSelectLoginProps} from "../Account/selectors";

export class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            showToast: false
        };

    }

    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        return (
            <Container>
                <Header title="Trang chủ" isHome={true} />
                <Content padder>
                    {this.props.homepage.data.length ? (
                        this.props.homepage.data.map((value,i) => {
                            return <ItemsPost key={i} thumbImage={value.thumbImage} title={value.name} author={value.author} Image={value.thumbImage} totalLike={value.totalLike} price={value.price} />
                        })
                    ) : null}
                </Content>
                <Fab />
                <Footer home={true} itemCart={1} />
            </Container>
        );
    }
}

Index.defaultProps = {
    homepage: {},
};
const mapStateToProps = createStructuredSelector({
    homepage: makeSelectHomepageProps(),
});
function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);