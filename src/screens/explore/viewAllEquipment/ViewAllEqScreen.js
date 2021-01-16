import React, { Component } from 'react';
import { Container, ListItem, Card, View, Text, Thumbnail, Icon, Left, Right, Button, Body, Item } from 'native-base';
import { CommonHeader } from '../../../components/commonHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';



class ViewAllEqScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <View style={styles.content}>

                    <ScrollView >
                        <View>
                            <Card style={{ width: 390, borderRadius: 8 }}>
                                <ListItem style={styles.items} onPress={() => navigation.navigate('DetailEquipment')}>
                                    <Left><Button style={styles.iconHome}>
                                        <Thumbnail square source={{ uri: "https://www.backpacker.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTY3ODY0ODgxMzY0NjA4Mjcz/119fgg_shells_tnf_bjk.jpg" }} />
                                    </Button>
                                    </Left>
                                    <Body>
                                        <Text>Jacket</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            </Card>
                            <Card style={{ width: 390, borderRadius: 8 }}>
                                <ListItem style={styles.items} onPress={() => navigation.navigate('DetailEquipment')}>
                                    <Left><Button style={styles.iconHome}>
                                        <Thumbnail square source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                    </Button>
                                    </Left>
                                    <Body>
                                        <Text>Camp</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            </Card>
                            <Card style={{ width: 390, borderRadius: 8 }}>
                                <ListItem style={styles.items} onPress={() => navigation.navigate('DetailEquipment')}>
                                    <Left><Button style={styles.iconHome}>
                                        <Thumbnail square source={{ uri: "https://jeramadventurestore.com/pictures/items/sepatu-hiking-gunung-outdoor-pro-krypton-black-grey-1412_1.jpg" }} />
                                    </Button>
                                    </Left>
                                    <Body>
                                        <Text>Backpack</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
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
export default ViewAllEqScreen;
