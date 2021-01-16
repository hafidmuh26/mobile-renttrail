import React, {Component} from 'react';
import {View, TouchableOpacity, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../../actions/login';
import {Text} from 'native-base';
import GoogleSignIns from '../../utils/GooogleSignIn';
import {showError, showSucces} from '../../utils/toast';
import styles from './styles';


class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                email: '',
                password: '',
            },
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const {datas, error, navigation} = this.props;

        if (prevProps.datas !== datas) {
            navigation.navigate('Main');
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    onLogin = () => {
        this.props.login(this.state.data);

    };

    onChange = (name, value) => {
        this.setState({data: {...this.state.data, [name]: value}});
    }

    render() {

        const {navigation} = this.props;
        const {data} = this.state;
        return (

            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require('../../../assets/images/mont.png')}/>
                </View>
                <Text style={styles.title}>RentTrail</Text>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Email'
                        placeholderTextColor='black'
                        value={data.email}
                        onChangeText={value => this.onChange('email', value)}
                    />
                    <TextInput
                        secureTextEntry
                        style={[styles.textInput]}
                        placeholder='Password'
                        placeholderTextColor='black'
                        value={data.password}
                        onChangeText={value => this.onChange('password', value)}
                    />
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.onLogin}>
                        <Text style={styles.textSignin}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonBottom}>
                    <Text style={styles.instructions}
                          onPress={() => navigation.navigate('Register')}>{"\n"} Register?</Text>
                    <Text>OR</Text>
                    <Text style={styles.instructions} onPress={() => navigation.navigate('Signup')}>Sign up {"\n"}</Text>
                </View>
                <View style={styles.google}>
                    <GoogleSignIns navigation={navigation}/>
                </View>

            </View>
        );
    }
}

const mapStateToProps = state => ({
    datas: state.loged.data,
    loading: state.loged.loading,
    error: state.loged.error,
});

const mapDispatchToProps = {
    login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
