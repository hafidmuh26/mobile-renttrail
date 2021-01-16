import React, { Component } from 'react';
import { Container, ListItem, Card, View, Text, Thumbnail, Icon, Body, Right } from 'native-base';
import { CommonHeader } from '../../../../components/commonHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { AsyncStorage } from "react-native";
import { findAll } from "../../../../actions/items";
import { connect } from "react-redux";
import { showError } from "../../../../utils/toast";

function RowItemsName({ onPress, item, token }) {
    return (
        <Card style={styles.cardStore}>
            <ListItem style={styles.item}
                onPress={() => onPress(item)}>
                <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} large source={{
                    uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg",
                    headers: { Authorization: 'Bearer ' + token }
                }} />
                <View style={{ paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>{item.name}</Text>
                        <Text style={{ color: 'grey' }}> {item.brand}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5'
                            name="store" />
                        <Text>{item.partner.outlet}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#57bcff' }}>Rp. {item.price}/day</Text>
                    </View>
                </View>
            </ListItem>
        </Card>
    );

}

class DetailEqScreen extends Component {
    constructor(props) {
        super(props);

        const { route } = this.props;

        this.state = {
            data: [],
            token: '',
            params: {
                search: '',
                sort: 'asc',
                page: 0,
                size: 10,
                name: route.params?.name,
            }
        }
    }

    componentDidMount() {
        this.reload(this.state.params);

        async function getToken() {
            const token = await AsyncStorage.getItem("token")
            this.setState({
                token: token
            });

        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, error, route } = this.props;

        if (prevProps.data !== data) {
            this.setState({ data: [...this.state.data, ...data.list] });
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    reload({ search, sort = 'asc', page = 0, size, name } = {}) {
        this.props.findAll({ search: { name: search }, sort, page, size, name });
    }

    onDetailEquipmentChoosen = item => {
        this.props.navigation.navigate('DetailEquipmentChoosen', item ? { id: item.id } : null);
    }

    render() {
        const { navigation } = this.props;
        const { data } = this.state;

        return (

            <Container>
                <View style={styles.content}>

                    <ScrollView>

                        <View style={styles.viewCard}>
                            {data.map((item, index) => {
                                return (
                                    <RowItemsName
                                        key={index}
                                        onPress={this.onDetailEquipmentChoosen}
                                        item={item}
                                        token={this.state.token}
                                    />
                                )
                            }
                            )}

                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}
                                    onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large
                                        source={{ uri: data.picture }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Camp for Life</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5'
                                                name="store" />
                                            <Text>{data.name}</Text>
                                            <Text>{data.brand}</Text>
                                            <Text note>{data.variety}</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}>{data.price}</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}
                                    onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large
                                        source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/51acFNA-ALL._AC_.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> The best Camp</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5'
                                                name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}
                                    onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large
                                        source={{ uri: "https://ak1.ostkcdn.com/images/products/15439589/6-Person-Tent-Water-Resistant-Dome-Tent-for-Camping-With-Removable-Rain-Fly-And-Carry-Bag-Blue-By-Wakeman-Outdoors-3101c1f2-c6d9-4eec-b49b-04452a635dc6_600.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5'
                                                name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}
                                    onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large
                                        source={{ uri: "https://ae01.alicdn.com/kf/HTB1pWvXIFXXXXXwXVXXq6xXFXXXg/2016-on-sale-6-8-10-12-person-2-bedroom-1-living-room-awning-sun-shelter.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5'
                                                name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}
                                    onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large
                                        source={{ uri: "https://www.abc-of-rockclimbing.com/wp-content/uploads/2019/02/best-6-person-tent-1.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5'
                                                name="store" />
                                            <Text> Eiger Official Store</Text>
                                        </View>
                                        <Text style={{ color: '#57bcff' }}> Rp. 350k/Day</Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}
                                    onPress={() => navigation.navigate('DetailEquipmentChoosen')}>
                                    <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} square large
                                        source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/91OJdHx3vsL._SX679_.jpg" }} />
                                    <View style={{ paddingTop: 10 }}>
                                        <Text> Costway:Waterproof</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5'
                                                name="store" />
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

const mapStateToProps = state => ({
    data: state.items.data,
    error: state.items.error,
    loading: state.items.loading
});
const mapDispatchToProps = {
    findAll
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailEqScreen);
