import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { signup } from '../../actions/signup';
import { Text, Container, Header, Content, Card, CardItem, Icon, Button } from 'native-base';
import { showError } from '../../utils/toast';


class SignupScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                name: '',
                email: '',
                password: '',
            },
        };
    }

    componentDidUpdate(prevProps) {
        const { data, navigation, error } = this.props;

        if (prevProps.data !== data) {
            navigation.navigate('Login');
        } else if(error && prevProps.error !== error ) {
            showError(error);
        }
    }

    onSubmit = () => {
        this.props.signup(this.state.data);
    };

    onChangeText = (name, value) => {
        this.setState({ data: { ...this.state.data, [name]: value } });
    }

    render() {

        const { navigation } = this.props;
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require('../../../assets/images/mont.png')} />
                </View>
                <Text style={styles.title}>RentTrail</Text>
                <View style={styles.view}>
                    <Card style={styles.cardForm}>
                        <View style={styles.viewCard}>
                            <Text style={styles.titlePwd}>───── Sign Up ─────</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Username'
                                placeholderTextColor='black'
                                value={data.name}
                                onChangeText={value => this.onChangeText('name', value)}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Email'
                                placeholderTextColor='black'
                                value={data.email}
                                onChangeText={value => this.onChangeText('email', value)}
                            />
                            <TextInput
                                secureTextEntry
                                style={[styles.textInput]}
                                placeholder='Password'
                                placeholderTextColor='black'
                                value={data.password}
                                onChangeText={value => this.onChangeText('password', value)}
                            />
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.onSubmit}>
                                <Text style={styles.textSignin}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
                <View style={styles.textBottom}>
                    <Text>Already have an account? <Text style={styles.textLogin} onPress={() => navigation.navigate('Login')}>Log in.{"\n"}</Text></Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    data: state.signup.data,
    loading: state.signup.loading,
    error: state.signup.error,
});


const mapDispatchToProps = {
    signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
