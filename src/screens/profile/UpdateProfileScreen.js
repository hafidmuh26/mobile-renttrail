import React, { Component } from 'react';
import { Container, ListItem, Card, View, Thumbnail, Input, Button, Item, Label } from 'native-base';
import { CommonHeader } from '../../components/commonHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import styles from './styles';


const options = {
    title: 'Select Image',
    takePhotoButtonTitle: 'Take Photo...',
    chooseFromLibraryButtonTitle: 'Choose from Library...',
}

class UpdateProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            pic: null
        }
    }

    myfun = () => {
        //alert('click');

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            }

            else {
                let source = { uri: response.uri };


                this.setState({
                    avatarSource: source,
                    pic: response.data
                });
            }
        });
    }

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="Update Your Profile" />
                <View style={styles.content}>
                    <ScrollView>
                        <ImageBackground blurRadius={2} style={styles.image}
                            source={require('../../../assets/images/account.jpg')}>
                            <View style={{ alignItems: 'center', padding: 30 }}>
                                <TouchableOpacity onPress={this.myfun}>
                                    <Thumbnail large source={{ uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?w968h681" }} />
                                </TouchableOpacity>
                                <Text style={{ color: '#ffffff' }}>Bambang</Text>
                            </View>
                        </ImageBackground>

                        <Card>
                            <View>
                                <Item flotingLabel >
                                    <Label>Name</Label>
                                    <Input style={styles.input} />
                                </Item>
                            </View>
                            <View>
                                <Item flotingLabel >
                                    <Label>Phone Number</Label>
                                    <Input style={styles.input} keyboardType={"number-pad"} />
                                </Item>
                            </View>
                            <View>
                                <Item flotingLabel >
                                    <Label>Address</Label>
                                    <Input style={styles.input} />
                                </Item>
                            </View>
                        </Card>

                        <Card>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Email {'\n'}</Text>
                                    <Text style={{ paddingLeft: '45%', color: 'grey' }}> Bambang55@gmail.com </Text>
                                </View>
                                <TouchableOpacity onPress={this.myfun}>
                                <Text style={{color:'#57bcff'}}> Upload Id Card (KTP) {'\n'}</Text>
                                </TouchableOpacity>
                                <Text> Change Password</Text>
                            </View>
                        </Card>


                        <View style={{ paddingTop: 50 }}>
                            <Button style={styles.buttonSave}>
                                <Text onPress={() => navigation.navigate('Profile')} style={{ color: '#ffffff' }}>SAVE</Text>
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
export default UpdateProfileScreen;
