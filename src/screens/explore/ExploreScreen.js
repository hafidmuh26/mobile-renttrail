import React, {Component} from 'react';
import {
    Container,
    Text,
    Image,
    View,
    Thumbnail,
    Item,
    Input,
    Icon,
    Card,
    ListItem,
    Body,
    Left,
    Right,Button
} from 'native-base';
import {CommonHeader} from '../../components/commonHeader';
import {ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage} from "react-native";
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {findAll} from '../../actions/items';
import {connect} from 'react-redux';
import {showError} from '../../utils/toast';


function ViewItem({onPress, item, token}) {
    return (
        <TouchableOpacity style={{paddingRight: 10}} onPress={() => onPress(item)}>
            <Thumbnail large source={{
                uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg",
                headers: {Authorization: 'Bearer ' + token}
            }}/>
            <Text style={styles.titleSub}>{item.name}</Text>
        </TouchableOpacity>
    );
}

class ExploreScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            search: '',
            token: '',
            params: {
                search: '',
                sort: 'asc',
                page: 0,
                size: 5,
            }
        };
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
        const {data, error} = this.props

        if (prevProps.data !== data) {
            this.setState({data: [...this.state.data, ...data.list]})
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    reload({search, sort = 'asc', page = 0, size} = {}) {
        this.props.findAll({search: {name: search}, sort, page, size});
    }

    onDetailEquipment = item => {
        this.props.navigation.navigate('DetailEquipment', item ? {name: item.name} : null);
    }

    render() {
        const {search, navigation} = this.props;
        const {data} = this.state;

        return (
            <ScrollView>
                <Container>
                    <Text style={{fontSize: 20, paddingLeft: 10, paddingTop: 10}}>Find your equipment</Text>
                    <Item style={styles.buttonSearch} rounded>
                        <TouchableOpacity transparent onPress={this.onSearch}>
                            <Icon name='search' style={{color: '#57BCFF', alignItems: 'flex-start'}}/>
                        </TouchableOpacity>
                        <Input placeholder='Search here...' value={search}
                               onChangeText={search => this.setState({search})}/>
                    </Item>

                    <View style={styles.container}>
                        <ScrollView>
                            <Text style={styles.title}> Stores</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.titleSub}> Explore nearby store around you</Text>
                                <Text style={{color: '#57BCFF', paddingLeft: 90}}
                                      onPress={() => navigation.navigate('ViewAllStore')}> View all</Text>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View
                                    style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 15, flexDirection: 'row'}}>
                                    <Card style={styles.cardStore}>
                                        <ListItem style={styles.item}
                                                  onPress={() => navigation.navigate('StoreProduct')}>
                                            <Thumbnail style={{width: 143, height: 120, borderRadius: 5}} square large
                                                       source={{uri: "http://images.malkelapagading.com/album/3493//eigersmbjan2017-3.jpg"}}/>
                                            <View style={{paddingTop: 10}}>
                                                <Text style={{color: '#57BCFF'}}> Eiger Official Store</Text>
                                                <View style={{flexDirection: 'row'}}>
                                                    <Icon style={{color: 'grey', fontSize: 20}} type='FontAwesome'
                                                          name="map-marker"/>
                                                    <Text> Ciputat,Tanggerang</Text>
                                                </View>
                                                <Text> Length : 8.5 km</Text>
                                            </View>
                                        </ListItem>
                                    </Card>
                                    <Card style={styles.cardStore}>
                                        <ListItem style={styles.item}
                                                  onPress={() => navigation.navigate('StoreProduct')}>
                                            <Thumbnail style={{width: 143, height: 120, borderRadius: 5}} square large
                                                       source={{uri: "https://i.pinimg.com/564x/7f/12/da/7f12daa312e5bce43a6e37d3c98110f4.jpg"}}/>
                                            <View style={{paddingTop: 10}}>
                                                <Text style={{color: '#57BCFF'}}> Backpack Store</Text>
                                                <View style={{flexDirection: 'row'}}>
                                                    <Icon style={{color: 'grey', fontSize: 20}} type='FontAwesome'
                                                          name="map-marker"/>
                                                    <Text> Ciputat,Tanggerang</Text>
                                                </View>
                                                <Text> Length : 8.5 km</Text>
                                            </View>
                                        </ListItem>
                                    </Card>
                                    <Card style={styles.cardStore}>
                                        <ListItem style={styles.item}
                                                  onPress={() => navigation.navigate("StoreCategory")}>
                                            <Thumbnail style={{width: 143, height: 120, borderRadius: 5}} square large
                                                       source={{uri: "https://cdn.mimivanderhaven.com/images/articles/Lucky-NB-March2019.jpg?mtime=20190329134119"}}/>
                                            <View style={{paddingTop: 10}}>
                                                <Text style={{color: '#57BCFF'}}> Shoes Official Store</Text>
                                                <View style={{flexDirection: 'row'}}>
                                                    <Icon style={{color: 'grey', fontSize: 20}} type='FontAwesome'
                                                          name="map-marker"/>
                                                    <Text> Ciputat,Tanggerang</Text>
                                                </View>
                                                <Text> Length : 8.5 km</Text>
                                            </View>
                                        </ListItem>
                                    </Card>
                                </View>
                            </ScrollView>

                            {/*<Text style={styles.title}> Equipments</Text>*/}
                            {/*<View style={{flexDirection: 'row'}}>*/}
                            {/*    <Text style={styles.titleSub}> Explore all equipments</Text>*/}
                            {/*    <Text style={{color: '#57BCFF', paddingLeft: 150}}*/}
                            {/*          onPress={() => navigation.navigate('ViewAllEquipment')}> View all</Text>*/}
                            {/*</View>*/}

                            {/* <View style={{ paddingLeft: 10, paddingTop: 10, paddingBottom: 15, flexDirection: 'row', flexWrap: 'wrap' }}> */}
                            {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('DetailEquipment')}>
                                        <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                        <Text style={styles.titleSub}>   Camp</Text>
                                    </TouchableOpacity>
                                    <View style={{ paddingRight: 10 }}>
                                        <Thumbnail large source={{ uri: "https://jeramadventurestore.com/pictures/items/sepatu-hiking-gunung-outdoor-pro-krypton-black-grey-1412_1.jpg" }} />
                                        <Text style={styles.titleSub}>  Shoes</Text>
                                    </View>
                                    <View style={{ paddingRight: 10 }}>
                                        <Thumbnail large source={{ uri: "https://www.backpacker.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTY3ODY0ODgxMzY0NjA4Mjcz/119fgg_shells_tnf_bjk.jpg" }} />
                                        <Text style={styles.titleSub}> Jacket</Text>
                                    </View>
                                    <View style={{ paddingRight: 10 }}>
                                        <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                        <Text style={styles.titleSub}>Backpack</Text>
                                    </View>
                                    <View style={{ paddingRight: 10 }}>
                                        <Thumbnail large source={{ uri: "https://contents.mediadecathlon.com/p709700/k$488b6690bb4696cf0d995308cf9a7f33/isothermal-12-to-15-l-cover-for-hiking-water-bottles-blue.jpg?&f=800x800" }} />
                                        <Text style={styles.titleSub}>   Camp</Text>
                                    </View>
                                    <View style={{ paddingRight: 10 }}>
                                        <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                        <Text style={styles.titleSub}>Backpack</Text>
                                    </View>
                                    <View style={{ paddingRight: 10 }}>
                                        <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                        <Text style={styles.titleSub}>   Camp</Text>
                                    </View>
                                    <View style={{ paddingRight: 10 }}>
                                        <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                        <Text style={styles.titleSub}>Backpack</Text>
                                    </View>
                                </ScrollView> */}
                            {/* </View> */}
                            {/*<View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 15, flexDirection: 'row'}}>*/}
                            {/*    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>*/}
                            {/*        {data.map((item, index) => {*/}
                            {/*                return (*/}
                            {/*                    <ViewItem*/}
                            {/*                        key={index}*/}
                            {/*                        onPress={this.onDetailEquipment}*/}
                            {/*                        item={item}*/}
                            {/*                        token={this.state.token}/>*/}
                            {/*                )*/}
                            {/*            }*/}
                            {/*        )}*/}
                            {/*    </ScrollView>*/}
                            {/*</View>*/}

                            <Text style={styles.title}> Most Hiking Mountain</Text>
                            <Card style={styles.cardMount}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('ViewMount')}>
                                    <Left>
                                        <Thumbnail style={{width: 110, height: 120, borderRadius: 10}}
                                                   source={{uri: "https://gunung.id/wp-content/uploads/2017/10/Estimasi-Biaya-Mendaki-Gunung-Merbabu.jpg"}}/>
                                    </Left>
                                    <View>
                                        <Text> Merbabu Mountain</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon style={{color: 'grey', fontSize: 24}} type='FontAwesome'
                                                  name="map-marker"/>
                                            <Text> Pamulang, Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km</Text>
                                    </View>
                                    <Right>
                                        <Icon name="arrow-forward"/>
                                    </Right>
                                </ListItem>
                            </Card>

                            <Card style={styles.cardMount}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('ViewMount')}>
                                    <Left>
                                        <Thumbnail style={{width: 110, height: 120, borderRadius: 10}}
                                                   source={{uri: "https://www.remotelands.com/remotenew1/dist/images/country/indonesia/city/85/m160801038.jpg"}}/>
                                    </Left>
                                    <View style={{paddingRight: 20}}>
                                        <Text> Renjani Mountain</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon style={{color: 'grey', fontSize: 24}} type='FontAwesome'
                                                  name="map-marker"/>
                                            <Text> Ciputat, Tanggerang</Text>
                                        </View>
                                        <Text> Length : 10.5 km</Text>
                                    </View>
                                    <Right>
                                        <Icon name="arrow-forward"/>
                                    </Right>
                                </ListItem>
                            </Card>

                            <Card style={styles.cardMount}>
                                <ListItem style={styles.item} onPress={() => navigation.navigate('ViewMount')}>
                                    <Left>
                                        <Thumbnail style={{width: 110, height: 120, borderRadius: 10}}
                                                   source={{uri: "https://www.twisata.com/wp-content/uploads/2015/06/Gambar-Gunung-Bromo-300x160.jpg"}}/>
                                    </Left>
                                    <View style={{paddingRight: 20}}>
                                        <Text> Bromo Mountain</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon style={{color: 'grey', fontSize: 24}} type='FontAwesome'
                                                  name="map-marker"/>
                                            <Text> Malang, Jawa Timur</Text>
                                        </View>
                                        <Text> Length : 20 km</Text>
                                    </View>
                                    <Right>
                                        <Icon name="arrow-forward"/>
                                    </Right>
                                </ListItem>
                            </Card>

                        </ScrollView>
                    </View>


                </Container>
            </ScrollView>

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

export default
connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
