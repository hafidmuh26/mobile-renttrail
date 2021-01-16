import React, { Component } from 'react';
import { Container, ListItem, Card, View, Thumbnail, Icon, CardItem, Text } from 'native-base';
import { CommonHeader } from '../../../../components/commonHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Image, ImageBackground } from 'react-native';
import styles from './styles';



class DetailStoreChoosen extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="Store Detail Products" />
                <View style={styles.content}>
                    <ScrollView>
                        <ImageBackground style={styles.imageChoosen} source={{ uri: "http://images.malkelapagading.com/album/3493//eigersmbjan2017-3.jpg" }} />

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

                        <View style={styles.viewCardProduct}>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://ae01.alicdn.com/kf/HTB1PnExKf9TBuNjy0Fcq6zeiFXaQ/50L-Waterproof-Hiking-Backpack-Men-Trekking-Travel-Backpacks-For-Women-Sport-Bag-Outdoor-Climbing-Mountaineering-Bags.jpg_640x640.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Camp for Life</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/205x205/1/90/1/src/g/3/4/7/8/1/7/24347817_B.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> The best Camp</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/205x205/1/90/1/src/g/4/5/3/0/0/9/24453009_B.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/205x205/1/90/1/src/g/3/1/4/5/7/1/20314571_B.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large source={{ uri: "https://contents.mediadecathlon.com/p709700/k$488b6690bb4696cf0d995308cf9a7f33/isothermal-12-to-15-l-cover-for-hiking-water-bottles-blue.jpg?&f=800x800" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5' name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
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
// export default connect(mapStateToProps, mapDispatchToProps)(DetailStoreChoosen)
export default DetailStoreChoosen;
