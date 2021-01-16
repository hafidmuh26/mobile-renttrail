import React, { Component } from 'react';
import { Container, ListItem, Card, View, Thumbnail, Icon, Text, Button } from 'native-base';
import { CommonHeader } from "../../components/commonHeader";
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import styles from './styles';
import { connect } from "react-redux";
import { findAll, findById } from "../../actions/rents";
import { showError } from "../../utils/toast";

function RowRentUser({ item, onPress, token }) {
    return (
        <View style={{ padding: 8 }}>

            <View style={{ flexDirection: 'row' }}>
                <Icon style={{ color: '#57BCFF', fontSize: 15 }} type='FontAwesome5' name="store" />
                <Text style={{ color: '#57bcff' }}> {item.item.partner.name}</Text>
            </View>

            <Text style={{ borderBottomWidth: 1 }} />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => onPress(item)}>
                    <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                </TouchableOpacity>
                <View style={{ padding: 10, marginLeft: 15 }}>
                    <Text style={{ color: '#57BCFF' }}>{item.item.name}</Text>
                    <Text>Rp. {item.item.price}/Day</Text>
                    <Text note> {item.dateStart} - {item.dateEnd}</Text>
                    <Text note> {item.status}</Text>
                </View>
            </View>
            <Text style={{ borderBottomWidth: 1 }} />

        </View>
    );

}

class MyRentScreen extends Component {
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
                user: route.params?.user,
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

        if (prevProps.route !== route) {
            this.setState({ params: { ...this.state.params, user: prevProps.route.params.user } });
            console.log('prevdiUpdateRoute', this.state.params);
        } else
            if (prevProps.data !== data) {
                this.setState({ data: [...this.state.data, ...data.list] });
            } else if (error && prevProps.error !== error) {
                showError(error);
            }
    }

    reload({ search, sort = 'asc', page = 0, size, user } = {}) {
        this.props.findAll({ search: { name: search }, sort, page, size, user });
    }

    onDetailRent = item => {
        this.props.navigation.navigate('DetailRent', item ? { id: item.id } : null);
    }


    render() {
        const { navigation, route } = this.props;
        const { data } = this.state;

        return (

            <Container>
                <View style={styles.content}>
                    <ScrollView>

                        {/* <Card > */}
                        {/*    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>*/}
                        {/*        <View style={{ borderBottomWidth: 2, borderBottomColor: '#6200ee' }}>*/}
                        {/*            <Button>On Progress</Button>*/}
                        {/*        </View>*/}
                        {/*        <View>*/}
                        {/*            <Button onPress={() => navigation.navigate('MyRentHistory')}>History</Button>*/}
                        {/*        </View>*/}
                        {/*    </View>*/}
                        {/*</Card> */}
                        <Card>

                            {data.map((item, index) => {
                                return (
                                    <RowRentUser
                                        item={item}
                                        token={this.state.token}
                                        onPress={this.onDetailRent}
                                    />);
                            })}

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
                                    <View style={{ padding: 5, marginLeft: 15 }}>
                                        <Text style={{ color: '#57BCFF' }}>Camp</Text>
                                        <Text>Rp. 350/Day</Text>
                                        <Text> x3</Text>
                                        
                                            <View style={{ flexDirection: 'row' }}>
                                                <Button style={styles.button}>
                                                    <Icon style={{ color: 'black', fontSize: 10 }} type='FontAwesome5' name="minus" />
                                                </Button>
                                                <Text style={{ fontSize: 20 }}> 2 </Text>
                                                <Button style={styles.button}>
                                                    <Icon style={{ color: 'black', fontSize: 10 }} type='FontAwesome5' name="plus" />
                                                </Button>
                                            </View>
                                       
                                    </View>
                                </View>
                                <Text style={{ borderBottomWidth: 1 }} />

                                {/*    <View style={{ flexDirection: 'row' }}>*/}
                                {/*        <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('DetailEquipment')}>*/}
                                {/*            <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />*/}
                                {/*        </TouchableOpacity>*/}
                                {/*        <View style={{ padding: 10, marginLeft: 15 }}>*/}
                                {/*            <Text style={{ color: '#57BCFF' }}>Backpack</Text>*/}
                                {/*            <Text>Rp. 350/Day</Text>*/}
                                {/*            <Text> x3</Text>*/}
                                {/*        </View>*/}
                                {/*    </View>*/}
                                {/*    <Text style={{ borderBottomWidth: 1 }} />*/}
                            </View>
                        </Card>

                        {/*<Card style={{ padding: 10 }}>*/}
                        {/*    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>*/}
                        {/*        <Text>Subtotal (6 Items) </Text>*/}
                        {/*        <Text style={{ color: '#57bcff', paddingLeft: 100, paddingBottom: 30 }}>Rp, 1.450.000</Text>*/}
                        {/*    </View>*/}
                        {/*    <View style={{ flexDirection: 'row' }}>*/}
                        {/*        <Text>Total Payment </Text>*/}
                        {/*        <Text style={{ color: '#57bcff', paddingLeft: 120 }}>Rp, 1.450.000</Text>*/}
                        {/*    </View>*/}
                        {/*</Card>*/}

                    </ScrollView>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    data: state.rents.data,
    loading: state.rents.loading,
    error: state.rents.error,
});
const mapDispatchToProps = {
    findAll, findById
};

export default connect(mapStateToProps, mapDispatchToProps)(MyRentScreen);
