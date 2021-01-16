import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    headerView:{
        backgroundColor: '#57BCFF',
        paddingRight: screen.width / 6,
        width: screen.width / 1,
    },
    headerLeft: {
        textAlign: 'center',
        paddingTop: screen.width / 30,
    },
    headerTitle: {
        fontSize: 19,
        color: 'white',
    },
});

export default styles;
