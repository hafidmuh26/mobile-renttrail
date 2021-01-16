import React, {Component} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ExploreScreen} from "../../screens/explore";
import {MyRentScreen} from "../../screens/myrent";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import {TopTapEquipment} from "../topTapEquipment";
import {TopTapRent} from "../topTapRent";

const Tab = createBottomTabNavigator();

class CommonFootTab extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Tab.Navigator
                initialRouteName="Explore"
                tabBarOptions={{activeTintColor: "#57BCFF", inactiveTintColor: "#616161"}}
                barStyle={{backgroundColor: "white"}}
            >
                <Tab.Screen
                    name="Explore"
                    component={ExploreScreen}
                    options={{
                        tabBarLabel: "Explore",
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="search"  color={color} size={20} />
                        )
                    }}
                />
                <Tab.Screen
                    name="TopTapEquipment"
                    component={TopTapEquipment}
                    options={{
                        tabBarLabel: "Equipment",
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="shopping-bag"  color={color} size={20} />
                        )
                    }}
                />
                <Tab.Screen
                    name="TopTapRent"
                    component={TopTapRent}
                    options={{
                        tabBarLabel: "My Rent",
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="money-bill" color={color} size={20}  />
                        )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="user-tie" color={color} size={20}  />
                        )
                    }}
                />

            </Tab.Navigator>


        );
    }

}

export default CommonFootTab;


