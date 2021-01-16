import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon,Button} from 'native-base';
import styles from './styles';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { showError } from './toast';
import { connect } from 'react-redux';
import { oauth } from '../actions/oauth';


class GoogleSignIns extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id:'',
            name:'',
            email:'',
            provider:'google',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {data, navigation, error} = this.props;
        
        if(prevProps.data !== data) {
            navigation.navigate('Main');
        } else if (error && prevProps.error !== error) {
            //showError(error);
            console.log(error);
            
            
            
        }
    }

    componentDidMount() {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '825440118120-cmei1tadrv16c0pdobcd974le9pfrgv4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            //accountName: '', // [Android] specifies an account name on the device that should be used
            //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({id: userInfo.user.id, name: userInfo.user.name, 
                email: userInfo.user.email, picture: userInfo.user.photo});
            this.props.oauth(this.state);
            //this.setState({ userInfo });
            console.log(this.state);
            
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                //user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    render() {
        return (
            <View>
               <Button style={styles.buttonGoogle} onPress={this._signIn}>
                    <Icon active name="logo-googleplus" />
                    <Text style={styles.text}>Sign In with Google</Text>
                </Button>
            </View>
        )
    }
} 

const mapStateToProps = state => ({
    data: state.oauthed.data,
    loading: state.oauthed.loading,
    error: state.oauthed.error,
});

const mapDispatchToProps = {
    oauth
}

export default connect(mapStateToProps, mapDispatchToProps) (GoogleSignIns);