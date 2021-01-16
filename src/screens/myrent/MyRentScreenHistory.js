import React, { Component } from 'react';
import { Container, ListItem, Card, View, Thumbnail, Icon } from 'native-base';
import { CommonHeader } from '../../components/commonHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';


class MyRentScreenHistory extends Component {

    alert = (msg) => {
        console.log(msg)
    }

    onDeleteBTN = () => {
        this.alert(' OnDelete')
    }

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="My Rent" />
                <View style={styles.content}>
                    <ScrollView>

                        <Card >
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <View>
                                    <Button onPress={() => navigation.navigate('MyRent')}>On Progress</Button>
                                </View>
                                <View style={{ borderBottomWidth: 2, borderBottomColor: '#6200ee' }}>
                                    <Button>History</Button>
                                </View>
                            </View>
                        </Card>
                        <Card>
                            <View style={{ padding: 8 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon style={{ color: '#57BCFF', fontSize: 15 }} type='FontAwesome5' name="store" />
                                    <Text onPress={() => navigation.navigate('StoreProduct')} style={{ color: '#57bcff' }}> Eiger Official Store</Text>
                                </View>

                                <Text style={{ borderBottomWidth: 1 }} />
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('DetailEquipment')}>
                                        <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                    </TouchableOpacity>
                                    <View style={{ padding: 10, marginLeft: 15 }}>
                                        <Text style={{ color: '#57BCFF' }}>Camp</Text>
                                        <Text>Rp. 350/Day</Text>
                                        <Text> x3</Text>
                                    </View>
                                </View>
                                <Text style={{ borderBottomWidth: 1 }} />

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('DetailEquipment')}>
                                        <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                    </TouchableOpacity>
                                    <View style={{ padding: 10, marginLeft: 15 }}>
                                        <Text style={{ color: '#57BCFF' }}>Backpack</Text>
                                        <Text>Rp. 350/Day</Text>
                                        <Text> x3</Text>
                                    </View>
                                </View>
                                <Text style={{ borderBottomWidth: 1 }} />
                            </View>
                        </Card>

                        <Card style={{ padding: 10 }}>
                            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                <Text>Subtotal (6 Items) </Text>
                                <Text style={{ color: '#57bcff', paddingLeft: 100, paddingBottom: 30 }}>Rp, 1.450.000</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>Total Payment </Text>
                                <Text style={{ color: '#57bcff', paddingLeft: 120 }}>Rp, 1.450.000</Text>
                            </View>
                        </Card>





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
export default MyRentScreenHistory;
