import React, {Component} from 'react';
import {Header, View, Icon, Left, Title, Body, Text} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';

class TopHeader extends Component {
    render() {
        const {title} = this.props;
        return (
            <Header>
                <View style={styles.headerView}>
                    <Left style={styles.headerLeft}>
                        <Title style={styles.headerTitle}>{title}</Title>
                    </Left>
                </View>
            </Header>
        );
    }
}

TopHeader.propTypes = {
    title: PropTypes.string,
};
export default TopHeader;
