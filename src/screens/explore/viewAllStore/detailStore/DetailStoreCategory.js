import React, { Component } from 'react';
import { Container, ListItem, Card, View, Thumbnail, Icon, CardItem, Text } from 'native-base';
import { CommonHeader } from '../../../../components/commonHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Image, ImageBackground } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper'


class DetailStoreCategory extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="Store Detail Categories" />
                <View style={styles.content}>
                    <ScrollView>
                        <ImageBackground style={styles.image} source={{ uri: "http://images.malkelapagading.com/album/3493//eigersmbjan2017-3.jpg" }} />

                        <View style={styles.viewCard}>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}>
                                    <View>
                                        <Text style={{ color: '#57BCFF' }}> Eiger Official Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                            <Text> Pamulang,Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km</Text>
                                    </View>
                                </ListItem>
                            </Card>
                        </View>
                        <Card >
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <View>
                                    <Button onPress={() => navigation.navigate('StoreProduct')} >Product</Button>
                                </View>
                                <View style={{ borderBottomWidth: 2, borderBottomColor:'#6200ee' }}>
                                    <Button>Category</Button>
                                </View>
                            </View>
                        </Card>

                        <View style={styles.viewCard}>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('StoreChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://contents.mediadecathlon.com/p709700/k$488b6690bb4696cf0d995308cf9a7f33/isothermal-12-to-15-l-cover-for-hiking-water-bottles-blue.jpg?&f=800x800" }} />
                                    <View style={{ paddingTop: 10, paddingLeft:20 }}>
                                        <Text> Backpack Hiking</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text> 6 Product</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => onPress(item)}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/51acFNA-ALL._AC_.jpg" }} />
                                    <View style={{ paddingTop: 10, paddingLeft:20 }}>
                                        <Text> The best Camp</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text> 6 Product</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => onPress(item)}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://www.backpacker.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTY3ODY0ODgxMzY0NjA4Mjcz/119fgg_shells_tnf_bjk.jpg" }} />
                                    <View style={{ paddingTop: 10, paddingLeft:20 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text> 6 Product</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => onPress(item)}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://jeramadventurestore.com/pictures/items/sepatu-hiking-gunung-outdoor-pro-krypton-black-grey-1412_1.jpg" }} />
                                    <View style={{ paddingTop: 10, paddingLeft:20 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text> 6 Product</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => onPress(item)}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                    <View style={{ paddingTop: 10, paddingLeft:20 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text> 6 Product</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => onPress(item)}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/91OJdHx3vsL._SX679_.jpg" }} />
                                    <View style={{ paddingTop: 10, paddingLeft:20 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text> 6 Product</Text>
                                    </View>
                                </ListItem>
                            </Card>
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
// export default connect(mapStateToProps, mapDispatchToProps)(DetailStoreCategory)
export default DetailStoreCategory;
