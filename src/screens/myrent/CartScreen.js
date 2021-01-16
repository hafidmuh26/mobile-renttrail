import React, { Component } from 'react';
import { Container, ListItem, Card, View, Text, Thumbnail, Icon, Body, Right, Button } from 'native-base';
import { CommonHeader } from '../../components/commonHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { AsyncStorage } from "react-native";
import { findAll } from "../../actions/items";
import { connect } from "react-redux";
import { showError } from "../../utils/toast";

// function RowItemsName({ onPress, item, token }) {
//     return (
//         <Card style={styles.cardStore}>
//             <ListItem style={styles.item}
//                 onPress={() => onPress(item)}>
//                 <Thumbnail style={{ width: 150, height: 120, borderRadius: 5 }} large source={{
//                     uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg",
//                     headers: { Authorization: 'Bearer ' + token }
//                 }} />
//                 <View style={{ paddingTop: 10 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Text>{item.name}</Text>
//                         <Text style={{ color: 'grey' }}> {item.brand}</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Icon style={{ color: '#57BCFF', fontSize: 12 }} type='FontAwesome5'
//                             name="store" />
//                         <Text>{item.partner.outlet}</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Text style={{ color: '#57bcff' }}>Rp. {item.price}/day</Text>
//                     </View>
//                 </View>
//             </ListItem>
//         </Card>
//     );

// }

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
                <CommonHeader navigation={navigation} title="YourCarts" />
                <View style={styles.content}>


                    {/* 
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

                        </View> */}


                    <Card>
                        <View style={{ padding: 8 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ color: '#57BCFF', fontSize: 15 }} type='FontAwesome5' name="store" />
                                <Text onPress={() => navigation.navigate('StoreProduct')} style={{ color: '#57bcff' }}> Eiger Official Store</Text>
                            </View>
                            <Text style={{ borderBottomWidth: 1 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('DetailEquipment')}>
                                    <Thumbnail large source={{ uri: "https://ae01.alicdn.com/kf/HTB1NOxibp9gSKJjSspbq6zeNXXal/Mountainskin-Men-s-Softshell-Jacket-Windstopper-Waterproof-Hiking-Jackets-Outdoor-Thick-Winter-Coats-Trekking-Camping-Ski.jpg" }} />
                                </TouchableOpacity>
                                <View style={{ padding: 5, marginLeft: 15 }}>
                                    <Text style={{ color: '#57BCFF' }}>Jakcet</Text>
                                    <Text>Rp. 350/Day</Text>
                                    <Text> x3</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection:'row', justifyContent:'space-between', marginVertical:10}}>
                                <Button style={{ backgroundColor: "#57bcff", width: 100 }} onPress={() => navigation.navigate('MyRent')}>
                                    <View style={{ flexDirection: 'row', fontSize: 40, alignItems: 'center' }}>
                                        <Icon style={{ color: 'black' }} type='FontAwesome5' name="calendar-check" />
                                        <Text>Booking</Text>
                                    </View>
                                </Button>
                                <Button style={{ backgroundColor: "#57BCFF", width: 100 }} onPress={this.onRent}>
                                    <View style={{ flexDirection: 'row', fontSize: 40, alignItems: 'center' }}>
                                        <Icon style={{ color: 'black' }} type='FontAwesome5' name="shopping-bag" />
                                        <Text>RentNow</Text>
                                    </View>
                                </Button>
                            </View>
                            <Text style={{ borderBottomWidth: 1 }} />

                        </View>
                    </Card>







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
