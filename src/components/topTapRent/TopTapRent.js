import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Container, Content, Text } from "native-base";
import { CommonHeader } from "../commonHeader";
import { MyRentScreen, CartScreen } from "../../screens/myrent";
import { Button } from "react-native-paper";

const Tab = createMaterialTopTabNavigator();

class TopTapRent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <CommonHeader title="My Rent" hideLeftButton={true} />
                
                <Tab.Navigator
                    tabBarOptions={{ activeTintColor: '#57BCFF' }}>
                    <Tab.Screen name="Booked" component={MyRentScreen} />
                    <Tab.Screen name="Borrowed" component={MyRentScreen} />
                    <Tab.Screen name="History" component={MyRentScreen} />
                </Tab.Navigator>
            </Container>
        );
    }

}

export default TopTapRent
