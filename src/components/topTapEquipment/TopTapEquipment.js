import React, { Component } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Container, Content, Text, Icon } from 'native-base';
import { CommonHeader } from "../commonHeader";
import { DetailEqScreen, ViewAllEqScreen } from "../../screens/explore";

const Tab = createMaterialTopTabNavigator();

class TopTapEquipment extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {navigation}=this.props;
        return (
            <Container>
                <CommonHeader title="Equipment" hideLeftButton={true} />
                <Icon style={{ color: '#57bcff' }} type='FontAwesome5' name="cart-arrow-down" onPress={() => navigation.navigate('CartScreen')} />

                <Tab.Navigator
                    tabBarOptions={{ activeTintColor: '#57BCFF' }}>
                    <Tab.Screen name="Items" component={DetailEqScreen} />
                    <Tab.Screen name="Category" component={ViewAllEqScreen} />
                </Tab.Navigator>
            </Container>
        );
    }

}

export default TopTapEquipment
