import React, {Component} from 'react'
import {Text, View, Image, Dimensions, RefreshControl, TouchableOpacity, AsyncStorage, Alert} from 'react-native'
import Swiper from 'react-native-swiper'
import {CommonHeader} from "../../components/commonHeader";
import {Container, Content, Card, Icon, Button, Fab, Thumbnail} from 'native-base';
import {connect} from "react-redux";
import {showError} from "../../utils/toast";
import {ScrollView} from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker';
import {findById} from "../../actions/rents";
import QRCode from "react-native-qrcode-svg";

const {width} = Dimensions.get('window')

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

        backgroundColor: '#57BCFF',
        height: 30,

    }
}

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{color: 'grey'}}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

class DetailRentScreen extends Component {
    constructor(props) {
        super(props);

        const {route} = this.props;

        this.state = {
            id: route.params?.id,
            token: '',
            data: [],
            partner: {},
            item: {},
        }
    }

    componentDidMount() {
        const {id} = this.state;
        this.reload(id);

        async function getToken() {
            const token = await AsyncStorage.getItem("token")
            this.setState({
                token: token
            });

        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {data, error} = this.props;

        if (prevProps.data !== data) {
            this.setState({
                data: {...data},
                partner: {...data.item.partner},
                item: {...data.item},
            });
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    reload(id) {
        if (id) {
            this.props.findById(this.state.id);
        }
    }

    onDeleteBTN = () => {
        this.alert(' OnDelete')
    }

    render() {
        const {navigation} = this.props;
        const {data, id, partner, item} = this.state;

        return (
            <Container>

                <CommonHeader navigation={navigation} title="Equipments"/>
                <Content style={{paddingBottom: 60, marginTop: 0}}>


                    <Card>
                        <View style={{margin: 18, alignItems:'center'}}>
                            <QRCode value={id.toString()} size={200} />
                        </View>
                    </Card>
                    <Card style={{height: 90, marginBottom: 0}}>
                        <View style={{margin: 18}}>
                            <Text>{item.brand}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon style={{color: '#57BCFF', fontSize: 15}} type='FontAwesome5' name="store"/>
                                <Text style={{color: '#57bcff'}}
                                      onPress={this.onStoreProduct}>{partner.name}</Text>
                            </View>
                            <Text style={{color: '#57bcff'}}> Rp. {item.price}/Day</Text>
                        </View>
                    </Card>
                    <Card style={{height: 370}}>
                        <View>
                            <View style={{flexDirection: 'row', margin: 18}}>
                                <Text style={{paddingRight: 70}}>Stock</Text>
                                <Text>16</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 18}}>
                                <Text style={{paddingRight: 70}}>Variety</Text>
                                <Text>{item.variety}</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 18}}>
                                <Text style={{paddingRight: 50}}>Category</Text>
                                <Text>{item.name}</Text>
                            </View>
                        </View>
                        <Text style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}/>
                        <Text style={{margin: 18}}> Outlet</Text>
                        <View>
                            <View style={{flexDirection: 'row', margin: 18}}>
                                <Text style={{paddingRight: 70}}>Address</Text>
                                <Text>{partner.address}</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 18}}>
                                <Text style={{paddingRight: 70}}>Telp</Text>
                                <Text>{partner.telp}</Text>
                            </View>
                        </View>

                    </Card>

                    <Card style={{height: 150}}>
                        <View>
                            <View style={{flexDirection: 'row', margin: 18}}>
                                <Text style={{paddingRight: 70}}>Date Pick</Text>
                                <Text>{data.dateStart}</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 18}}>
                                <Text style={{paddingRight: 70}}>Date Return</Text>
                                <Text>{data.dateEnd}</Text>
                            </View>
                        </View>
                    </Card>

                </Content>

            </Container>
        )
    }
}

const mapStateToProps = state => ({
    data: state.rentById.data,
    error: state.rentById.error,
    loading: state.rentById.loading
});
const mapDispatchToProps = {
    findById,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailRentScreen);
