import React, {Component} from 'react';
import {Container, ListItem, Card, View, Thumbnail, Icon, CardItem, Text} from 'native-base';
import {CommonHeader} from '../../../../components/commonHeader';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {AsyncStorage, Image, ImageBackground} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-paper';
import {connect} from "react-redux";
import {findById} from "../../../../actions/partners";
import {findAll} from "../../../../actions/items";
import {showError} from "../../../../utils/toast";

function RowItems({item, onPress, token}) {
    return (
        <Card style={styles.cardStoreProduct}>
            <ListItem style={styles.item} onPress={() => onPress(item)}>
                <Thumbnail style={{width: 150, height: 120, borderRadius: 5}} square large
                           source={{uri: item.picture}}/>
                <View style={{paddingTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{item.name}</Text>
                        <Text note>{item.brand}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon style={{color: '#57BCFF', fontSize: 12}} type='FontAwesome5'
                              name="store"/>
                        <Text>{item.partner.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#57bcff'}}>Rp. {item.price}/day</Text>
                    </View>
                </View>
            </ListItem>
        </Card>
    );
}

class DetailStoreProduct extends Component {
    constructor(props) {
        super(props);

        const {route} = this.props;

        this.state = {
            id: route.params?.id,
            data: [],
            token: '',
            partner: {},
            params: {
                search: '',
                sort: 'asc',
                page: 0,
                size: 10,
                partner: route.params?.id,
            }
        }
    }

    componentDidMount() {
        const {id} = this.state;
        if (id) {
            this.props.findById(this.state.id);
        }
        this.reload(this.state.params);

        async function getToken() {
            const token = await AsyncStorage.getItem("token")
            this.setState({
                token: token
            });

        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {dataItem, data, error} = this.props;

        if (prevProps.dataItem !== dataItem) {
            this.setState({data: [...dataItem.list]})
        } else if (prevProps.data !== data) {
            this.setState({partner: {...data}})
        } else if (prevProps.error !== error) {
            showError(error);
        }
    }

    reload({search, sort = 'asc', page = 0, size, partner} = {}) {
        this.props.findAll({search: {name: search}, sort, page, size, partner});
    }

    onDetailEquipmentChoosen = item => {
        this.props.navigation.navigate('DetailEquipmentChoosen', item ? {id: item.id} : null);
    }

    render() {
        const {navigation} = this.props;
        const {data, partner, token} = this.state;

        return (

            <Container>
                <CommonHeader navigation={navigation} title="Store Products"/>
                <View style={styles.content}>
                    <ScrollView>
                        <ImageBackground style={styles.image} source={{uri: partner.picture}}/>

                        <View style={styles.viewCard}>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}>
                                    <View>
                                        <Text style={{color: '#57BCFF'}}>{partner.name}</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon style={{color: 'grey', fontSize: 20}} type='FontAwesome'
                                                  name="map-marker"/>
                                            <Text>{partner.address}</Text>
                                        </View>
                                        <Text> {partner.telp}</Text>
                                    </View>
                                </ListItem>
                            </Card>
                        </View>
                        <Card>
                            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                                <View style={{borderBottomWidth: 2, borderBottomColor: '#6200ee'}}>
                                    <Button>Product</Button>
                                </View>
                                <View>
                                    <Button onPress={() => navigation.navigate('StoreCategory')}>Category</Button>
                                </View>
                            </View>
                        </Card>

                        <View style={styles.viewCardProduct}>
                            {data.map((item, index) => {
                                    return (
                                        <RowItems
                                            key={index}
                                            onPress={this.onDetailEquipmentChoosen}
                                            item={item}
                                            token={token}
                                        />
                                    )
                                }
                            )}

                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item}
                                          onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{width: 150, height: 120, borderRadius: 5}} square large
                                               source={{uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg"}}/>
                                    <View style={{paddingTop: 10}}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon style={{color: '#57BCFF', fontSize: 12}} type='FontAwesome5'
                                                  name="store"/>
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{color: '#57bcff'}}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item}
                                          onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{width: 150, height: 120, borderRadius: 5}} square large
                                               source={{uri: "https://ae01.alicdn.com/kf/HTB1pWvXIFXXXXXwXVXXq6xXFXXXg/2016-on-sale-6-8-10-12-person-2-bedroom-1-living-room-awning-sun-shelter.jpg"}}/>
                                    <View style={{paddingTop: 10}}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon style={{color: '#57BCFF', fontSize: 12}} type='FontAwesome5'
                                                  name="store"/>
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{color: '#57bcff'}}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item}
                                          onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{width: 150, height: 120, borderRadius: 5}} square large
                                               source={{uri: "https://www.abc-of-rockclimbing.com/wp-content/uploads/2019/02/best-6-person-tent-1.jpg"}}/>
                                    <View style={{paddingTop: 10}}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon style={{color: '#57BCFF', fontSize: 12}} type='FontAwesome5'
                                                  name="store"/>
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{color: '#57bcff'}}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreProduct}>
                                <ListItem style={styles.item}
                                          onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{width: 150, height: 120, borderRadius: 5}} square large
                                               source={{uri: "https://contents.mediadecathlon.com/p709700/k$488b6690bb4696cf0d995308cf9a7f33/isothermal-12-to-15-l-cover-for-hiking-water-bottles-blue.jpg?&f=800x800"}}/>
                                    <View style={{paddingTop: 10}}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon style={{color: '#57BCFF', fontSize: 12}} type='FontAwesome5'
                                                  name="store"/>
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{color: '#57bcff'}}> Rp. 350k/Day</Text>
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

const mapStateToProps = state => ({
    dataItem: state.items.data,
    data: state.partnerById.data,
    loading: state.partnerById.loading,
    error: state.partnerById.error,
});
const mapDispatchToProps = {
    findById, findAll
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailStoreProduct);
