import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { login } from '../../actions/login';
import { Text, Container, Header, Content, Card, CardItem, Icon, Button } from 'native-base';



class ForgotPwdScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: '',
                password: '',
            },
        };
    }

    componentDidUpdate(prevProps) {
        const { data, navigation } = this.props;
        if (prevProps.data !== data) {
            if (data?.username != null) {
                navigation.navigate('Main');
            }
        }
    }

    login = () => {
        this.props.login(this.state.data);
    };

    onChangeText = (name, value) => {
        this.setState({ data: { ...this.state.data, [name]: value } });
    }

    onLoginPres = () => { };

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
                            <Text style={styles.titlePwd}>── Forgot Password ──</Text>
                            <Text style={styles.textMessage}>Enter your E-mail address and we'll send you a link to reset your password</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Email address'
                                placeholderTextColor='black'
                                value={data.email}
                                onChangeText={value => this.onChangeText('email', value)}
                            />
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.login}>
                                <Text style={styles.textSignin} onPress={() => navigation.navigate('Main')}>SUMBIT</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    data: state.login?.data,
    loading: state.login?.loading,
    error: state.login?.error,
});


const mapDispatchToProps = {
    login,
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPwdScreen);
