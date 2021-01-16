import React, { Component } from 'react'
import { Text, View, Image, Dimensions, RefreshControl, TouchableOpacity, AsyncStorage } from 'react-native'
import Swiper from 'react-native-swiper'
import { CommonHeader } from '../../../../components/commonHeader';
import { Container, Content, Card, Icon, Button, Fab, Thumbnail } from 'native-base';
import { findById } from "../../../../actions/items";
import { connect } from "react-redux";
import { showError } from "../../../../utils/toast";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker';
import { save } from "../../../../actions/rents";

const { width } = Dimensions.get('window')

const styles = {

    slide: {
        justifyContent: 'center',
        backgroundColor: 'transparant'
    },
    image: {
        alignSelf: 'center',
        width,
        height: 240,
    },
    paginationStyle: {
        position: 'absolute',
        right: 10
    },
    paginationText: {
        color: 'blue',
        fontSize: 20
    },
    button: {
        backgroundColor: '#57bcff',
        height: 30,

    }
}

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'grey' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

class DetailEqChoosen extends Component {
    constructor(props) {
        super(props);

        const { route } = this.props;

        this.state = {
            id: route.params?.id,
            token: '',
            data: [],
            partner: {},
            rent: {
                id: '',
                totalPrice: '',
                dateStart: '',
                dateEnd: '',
                item: '',
                user: '',
                status: "booked",
            },
        }
    }

    componentDidMount() {
        const { id } = this.state;
        this.reload(id);


        async function getToken() {
            const token = await AsyncStorage.getItem("token")
            this.setState({
                token: token
            });

        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, error, route, savedRent, errorRent, navigation } = this.props;
        const { rent } = this.state;

        if (prevProps.route !== route) {
            this.onRefresh();
        } else if (prevProps.data !== data) {
            this.setState({
                data: { ...data },
                partner: { ...data.partner },
            });
        } else if (prevProps.savedRent !== savedRent) {
            navigation.navigate('MyRent', rent ? { user: rent.user } : null);
        } else if (errorRent && prevProps.errorRent !== errorRent) {
            showError(errorRent);
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    reload(id) {
        if (id) {
            this.props.findById(this.state.id);
        }
    }

    onRefresh = () => {
        const { route } = this.props;
        this.setState({ id: route.params?.id },
            () => this.reload(this.state.id));
    }

    onStoreProduct = () => {
        const { partner } = this.state;
        this.props.navigation.navigate('StoreProduct', partner ? { id: partner.id } : null);
    }

    onDetailEquipment = item => {
        this.props.navigation.navigate('DetailEquipment', item ? { name: item } : null);
    }

    onSetState = () => {
        const { data } = this.state;
        this.setState({
            rent: {
                ...this.state.rent,
                totalPrice: data.price,
                item: data.id,
                user: data.partner.id
            }
        });
    }

    onRent = () => {
        this.props.save(this.state.rent);
    }

    onChangeDateStart = (date) => {
        this.setState({ rent: { ...this.state.rent, dateStart: date } });
        this.onSetState();
    }

    onChangeDateEnd = (date) => {
        this.setState({ rent: { ...this.state.rent, dateEnd: date } })
    }

    render() {
        const { navigation } = this.props;
        const { data, token, partner, id } = this.state;

        return (
            <Container>

                <CommonHeader navigation={navigation} title="Equipments" />
                <Content style={{ paddingBottom: 60, marginTop: 0 }}>

                    <Swiper
                        containerStyle={styles.image}
                        renderPagination={renderPagination}
                        loop={false}
                    >
                        <Image style={styles.image}
                            source={require('../../../../../assets/images/camp.jpg')} />
                        <Image style={styles.image}
                            source={require('../../../../../assets/images/camp2.jpg')} />
                        <Image style={styles.image} source={require('../../../../../assets/images/camp3.jpg')} />
                        <Image style={styles.image} source={require('../../../../../assets/images/camp4.jpg')} />
                    </Swiper>
                    <Card style={{ height: 90, marginBottom: 0 }}>
                        <View style={{ margin: 18 }}>
                            <Text>{data.brand}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ color: '#57BCFF', fontSize: 15 }} type='FontAwesome5' name="store" />
                                <Text style={{ color: '#57bcff' }}
                                    onPress={this.onStoreProduct}>{partner.outlet}</Text>
                            </View>
                            <Text style={{ color: '#57bcff' }}> Rp. {data.price}/Day</Text>
                        </View>
                    </Card>
                    <Card style={{ height: 370 }}>
                        <View>
                            <View style={{ flexDirection: 'row', margin: 18 }}>
                                <Text style={{ paddingRight: 70 }}>Stock</Text>
                                <Text>16</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 18 }}>
                                <Text style={{ paddingRight: 70 }}>Variety</Text>
                                <Text>{data.variety}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 18 }}>
                                <Text style={{ paddingRight: 50 }}>Category</Text>
                                <Text style={{ color: '#57bcff' }}
                                    onPress={() => this.onDetailEquipment(data.name)}>{data.name}</Text>
                            </View>
                        </View>
                        <Text style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }} />
                        <Text style={{ margin: 18 }}> Outlet</Text>
                        <View>
                            <View style={{ flexDirection: 'row', margin: 18 }}>
                                <Text style={{ paddingRight: 70 }}>Address</Text>
                                <Text>{partner.address}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: 18 }}>
                                <Text style={{ paddingRight: 70 }}>Telp</Text>
                                <Text>{partner.telp}</Text>
                            </View>
                        </View>


                    </Card>

                    <Card style={{ height: 150 }}>
                        <Text style={{ paddingLeft: width / 20, marginTop: 10 }}>Date Pick</Text>
                        <View style={{ alignItems: 'center' }}>
                            <DatePicker
                                style={{ width: width / 1.3 }}
                                date={this.state.rent.dateStart}
                                mode="date"
                                showIcon="false"
                                format="YYYY-MM-DD"
                                minDate="2020-05-05"
                                placeholder="Select Date"
                                onDateChange={(date) => {
                                    this.onChangeDateStart(date)
                                }}
                            />
                        </View>
                        <Text style={{ paddingLeft: width / 20, marginTop: 10 }}>Date Return</Text>
                        <View style={{ alignItems: 'center' }}>
                            <DatePicker
                                style={{ width: width / 1.3 }}
                                date={this.state.rent.dateEnd}
                                mode="date"
                                showIcon="false"
                                format="YYYY-MM-DD"
                                minDate="2020-05-05"
                                placeholder="Select Date"
                                onDateChange={(date) => {
                                    this.onChangeDateEnd(date)
                                }}
                            />
                        </View>
                    </Card>
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={styles.button}>
                                <Icon style={{ color: 'black', fontSize: 10 }} type='FontAwesome5' name="minus" />
                            </Button>
                            <Text style={{ fontSize: 20 }}> 0 </Text>
                            <Button style={styles.button}>
                                <Icon style={{ color: 'black', fontSize: 10 }} type='FontAwesome5' name="plus" />
                            </Button>
                        </View>
                    </View>


                </Content>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Button style={{ backgroundColor: "#57BCFF", width: 140 }} onPress={() => navigation.navigate('CartScreen')}>
                        <View style={{ flexDirection: 'row', fontSize: 40, alignItems: 'center' }}>
                            <Icon style={{ color: 'black' }} type='FontAwesome5' name="cart-arrow-down" />
                            <Text>Add Cart</Text>
                        </View>
                    </Button>
                    <Button style={{ backgroundColor: "#57bcff", width: 140 }} onPress={() => navigation.navigate('MyRent')}>
                        <View style={{ flexDirection: 'row', fontSize: 40, alignItems: 'center' }}>
                            <Icon style={{ color: 'black' }} type='FontAwesome5' name="calendar-check" />
                            <Text>Booking</Text>
                        </View>
                    </Button>
                    <Button style={{ backgroundColor: "#57BCFF", width: 140 }} onPress={this.onRent}>
                        <View style={{ flexDirection: 'row', fontSize: 40, alignItems: 'center' }}>
                            <Icon style={{ color: 'black' }} type='FontAwesome5' name="shopping-bag" />
                            <Text>Rent Now</Text>
                        </View>
                    </Button>
                </View>


            </Container>
        )
    }
}

const mapStateToProps = state => ({
    savedRent: state.savedRent.data,
    errorRent: state.savedRent.error,
    data: state.itemById.data,
    error: state.itemById.error,
    loading: state.itemById.loading
});
const mapDispatchToProps = {
    findById, save
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailEqChoosen);

