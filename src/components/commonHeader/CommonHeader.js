import React, { Component } from 'react';
import { Header, Button, Icon, Left, Title, Body, Text, Right } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';

class CommonHeader extends Component {

    onMenuPress = () => {
        this.props.navigation.openDrawer();
    }

    onBackPress = () => {
        this.props.navigation.goBack();
    }


    render() {
        const { navigation, hideLeftButton, title } = this.props;

        return (
            <Header style={styles.header}>
                {
                    !hideLeftButton && <Left>
                        {
                            typeof navigation.openDrawer === 'function' ?
                                <Button transparent onPress={this.onMenuPress}>
                                    <Icon name='menu' type='Entypo' />
                                </Button> :
                                <Button transparent style={{ backgroundColor: "#57BCFF" }} onPress={this.onBackPress}>
                                    <Icon name='ios-arrow-back' />
                                </Button>
                        }
                    </Left>
                }

                <Left>
                    <Title>{title}</Title>
                </Left>
                <Right>
                    <Icon style={{color:'#fff'}} type='FontAwesome5' name="cart-arrow-down" onPress={()=> navigation.navigate('CartScreen')}/>
                </Right>

            </Header>
        );
    }
}

CommonHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    hideLeftButton: PropTypes.bool,
    title: PropTypes.string
};

export default CommonHeader;
