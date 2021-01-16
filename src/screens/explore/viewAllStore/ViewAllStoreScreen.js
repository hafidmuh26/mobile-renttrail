import React, { Component } from 'react';
import { Container, ListItem, Card, View, Text, Thumbnail, Icon } from 'native-base';
import { CommonHeader } from '../../../components/commonHeader';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';



class ViewAllStoreScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="All Stores " />
                <View style={styles.content}>
                    <Text style={styles.title}>Here all stores ... </Text>
                    <ScrollView>
                        <View style={styles.viewCard}>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate("StoreProduct")}>
                                    <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "http://images.malkelapagading.com/album/3493//eigersmbjan2017-3.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text style={{ color: '#57BCFF'}}> Eiger Official Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                            <Text> Ciputat,Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate("StoreProduct")}>
                                    <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://i.pinimg.com/564x/7f/12/da/7f12daa312e5bce43a6e37d3c98110f4.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text style={{ color: '#57BCFF'}}> Backpack Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                            <Text> Ciputat,Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate("StoreProduct")}>
                                    <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://cdn.mimivanderhaven.com/images/articles/Lucky-NB-March2019.jpg?mtime=20190329134119" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text style={{ color: '#57BCFF'}}> Shoes Official Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                            <Text> Ciputat,Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate("StoreProduct")}>
                                    <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://www.timeinternational.co.id/wp-content/uploads/fossil-pondok-indah-mall-2-1.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text style={{ color: '#57BCFF'}}> Shoes Official Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                            <Text> Ciputat,Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate("StoreProduct")}>
                                    <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://thumbs.dreamstime.com/b/fila-fashion-shop-logo-sign-fila-sports-retail-store-front-shopping-mall-china-fila-logo-sports-retail-shop-front-153635855.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text style={{ color: '#57BCFF'}}> Shoes Official Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                            <Text> Ciputat,Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate("StoreProduct")}>
                                    <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://media.glassdoor.com/l/7a/d7/99/80/store-front-in-the-mall.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text style={{ color: '#57BCFF'}}> Shoes Official Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                            <Text> Ciputat,Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km</Text>
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
// export default connect(mapStateToProps, mapDispatchToProps)(ViewAllStoreScreen)
export default ViewAllStoreScreen;
