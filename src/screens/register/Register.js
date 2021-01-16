import React, {Component} from "react";
import {Image, TextInput, TouchableOpacity, View} from "react-native";
import {Card, Text} from "native-base";
import styles from './styles';

class Register extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    onSubmit = () => {

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require('../../../assets/images/mont.png')} />
                </View>
                <Text style={styles.title}>RentTrail</Text>
                <View style={styles.view}>
                    <Card style={styles.cardForm}>
                        <View style={styles.viewCard}>
                            <Text style={styles.titlePwd}>──── Register ────</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Full Name'
                                placeholderTextColor='black'
                                onChangeText={value => this.onChangeText('email', value)}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='NIK'
                                placeholderTextColor='black'
                                onChangeText={value => this.onChangeText('email', value)}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Nomor Handphone'
                                placeholderTextColor='black'
                                onChangeText={value => this.onChangeText('email', value)}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Address'
                                placeholderTextColor='black'
                                onChangeText={value => this.onChangeText('email', value)}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Gender'
                                placeholderTextColor='black'
                                onChangeText={value => this.onChangeText('email', value)}
                            />
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.onSubmit}>
                                <Text style={styles.textSignin} >SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}

export default Register;
