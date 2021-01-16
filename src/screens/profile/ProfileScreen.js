import React, { Component } from 'react';
import { Container, ListItem, Card, View, Thumbnail, Icon, Button } from 'native-base';
import {CommonHeader} from "../../components/commonHeader";
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground, Text } from 'react-native';
import styles from './styles';



class ProfileScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader title="My Profile" hideLeftButton={true} />
                <View style={styles.content}>
                    <ScrollView>
                        <ImageBackground blurRadius={2} style={styles.image}
                            source={require('../../../assets/images/account.jpg')}>
                            <View style={{ alignItems: 'center', padding: 30 }}>
                                <Thumbnail large source={{ uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?w968h681" }} />
                                <Text style={{ color: '#ffffff' }}>Bambang</Text>
                            </View>
                        </ImageBackground>

                        <Card>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Nama {'\n'}</Text>
                                    <Text style={{ paddingLeft: '45%' }}> Bambang </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Phone Number {'\n'}</Text>
                                    <Text style={{ paddingLeft: '29%' }}> 087818783488</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Address</Text>
                                    <Text style={{ paddingLeft: '42%' }}> Tanggerang Selatan</Text>
                                </View>
                            </View>
                        </Card>

                        <Card>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Email {'\n'}</Text>
                                    <Text style={{ paddingLeft: '45%', color:'grey' }}> Bambang55@gmail.com </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Upload Id Card (KTP) {'\n'}</Text>
                                    <Text style={{ paddingLeft: '18%', color:'grey', fontStyle:'italic' }}> KTP has been added </Text>
                                </View>
                                <Text> Change Password</Text>
                            </View>
                        </Card>

                        <Text style={{ color: '#57bcff', padding: 10, fontStyle: 'italic' }} onPress={() => navigation.navigate('UpdateProfile')}> Updates Your Profile</Text>


                        <View style={{ paddingTop: 50 }}>
                            <Button style={styles.buttonSignout}>
                                <Text onPress={() => navigation.navigate('Login')} style={{ color: '#ffffff' }}>SIGN OUT</Text>
                            </Button>
                        </View>

                    </ScrollView>


                </View>
            </Container>
        );
    }
}

// const mapStateToProps = state => ({
//     savedData: state.savedItem.data,
//     data: state.items.data,
//     loading: state.items.loading
// });
// const mapDispatchToProps = {
//     findAll
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ViewMountScreen)
export default ProfileScreen;
