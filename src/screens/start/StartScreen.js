import React from 'react';
import { Alert, StatusBar, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import {Dimensions} from "react-native";

const screen = Dimensions.get('screen');

const WithCTA = (props) => (
    <Onboarding
        showDone={false}
        onSkip={() => props.navigation.navigate('Login')}
        pages={[
            {
                title: 'Hey!',
                subtitle: 'Find Your Journey ',
                backgroundColor: '#66CEFC',
                image: (
                    <Image style={{width:400, height:300}}
                           source={require('../../../assets/images/1.png')} >
                    </Image>
                ),
            },
            {
                title: 'Send Messages',
                subtitle: 'You can reach everybody with us',
                backgroundColor: '#5e92f3',
                image: (
                    <Image style={{width:400, height:300}}
                           source={require('../../../assets/images/2.png')} >
                    </Image>
                ),
            },
            {
                title: 'Get Notified',
                subtitle: 'We will send you notification as soon as something happened',
                backgroundColor: '#0cabf1',
                image: (
                    <Image style={{width:400, height:300}}
                           source={require('../../../assets/images/3.png')} >
                    </Image>
                ),
            },
            {
                title: "That's Enough",
                subtitle: (
                    <Button
                        title={'Get Started'}
                        containerViewStyle={{ marginTop: 20 }}
                        backgroundColor={'white'}
                        borderRadius={5}
                        textStyle={{ color: '#003c8f' }}
                        onPress={() => props.navigation.navigate('Login')}
                    />
                ),
                backgroundColor: '#a5e3ff',
                image: (
                    <Image style={{width: screen.width / 2, height:screen.height / 3.3}}
                           source={require('../../../assets/images/mount.png')} >
                    </Image>
                ),
            },
        ]}
    />
);

export default WithCTA;
