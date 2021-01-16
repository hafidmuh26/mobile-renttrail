import React, {Component} from "react";
import styles from "../../screens/main/styles";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import {Text} from "native-base";
import PropTypes from "prop-types";

const getTabIcon = (iconName, focused) => {
    const iconStyles = [styles.icon];
    if (focused) {
        iconStyles.push(styles.activeIcon);
    }

    return <FontAwesome name={iconName} style={iconStyles} />;
};


class TabBarLabel extends Component{
    render() {
        return (
            <Text
                style={[
                    styles.tabBarLabel,
                    props.focused ? styles.tabBarLabelActive : {}
                ]}
            >
                {props.title}
            </Text>
        );
    }
}

TabBarLabel.propTypes = {
    focused: PropTypes.any,
    title: PropTypes.any
};

export default TabBarLabel;
