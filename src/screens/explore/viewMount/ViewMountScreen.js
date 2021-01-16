import React, { Component } from 'react';
import { Container, ListItem, Card, View, Thumbnail, Icon } from 'native-base';
import {CommonHeader} from "../../../components/commonHeader";
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground, Text } from 'react-native';
import styles from './styles';



class ViewMountScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="Merbabu Mountain" />
                <View style={styles.content}>
                    <ScrollView>
                        <ImageBackground style={styles.image} source={require('../../../../assets/images/merbabu.jpg')} />

                        <View style={styles.viewCard}>
                            <Card style={styles.cardStore}>
                                <ListItem style={styles.item}>
                                    <View>
                                        <Text> Merbabu Maountain</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                            <Text> Pamulang,Tanggerang</Text>
                                        </View>
                                        <Text> Length : 8.5 km{"\n"}</Text>
                                        <Text >
                                            Mount Merbabu (Indonesian: Gunung Merbabu) is a dormant
                                            stratovolcano in Central Java province on the Indonesian island
                                            of Java. The name Merbabu could be loosely translated as
                                            'Mountain of Ash' from the Javanese combined words; Meru means
                                            "mountain" and awu or abu means "ash". Merbabu can be climbed from
                                            several routes originating from the town of Kopeng on the north east sideside, and also from Selo on
                                            the southern side. A climb from Kopeng to Kenteng Songo takes
                                            between 8 and 10 hours

                                        </Text>
                                    </View>
                                </ListItem>
                            </Card>
                            <Card style={styles.cardStoreImage}>
                                <ListItem style={styles.item}>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <Text> Here some pictures about Merbabu Mountain{"\n"}</Text>

                                        <View style={{ paddingRight: 3, paddingBottom:3 }}>
                                            <Thumbnail style={styles.thumImage} source={require('../../../../assets/images/merbabu3.jpg')} />
                                        </View>
                                        <View style={{ paddingRight: 3 }}>
                                            <Thumbnail style={styles.thumImage} source={require('../../../../assets/images/merbabu1.jpg')} />
                                        </View>
                                        <View style={{ paddingRight: 3, paddingBottom:3 }}>
                                            <Thumbnail style={styles.thumImage} source={require('../../../../assets/images/merbabu4.jpg')} />
                                        </View>
                                        <View style={{ paddingRight: 3 }}>
                                            <Thumbnail style={styles.thumImage} source={require('../../../../assets/images/merbabu2.jpg')} />
                                        </View>
                                        <View style={{ paddingRight: 3,paddingBottom:3  }}>
                                            <Thumbnail style={styles.thumImage} source={require('../../../../assets/images/merbabu5.jpg')} />
                                        </View>
                                        <View style={{ paddingRight: 3 }}>
                                            <Thumbnail style={styles.thumImage} source={require('../../../../assets/images/merbabu2.jpg')} />
                                        </View>
                                        <View style={{ paddingRight: 3 }}>
                                            <Thumbnail style={styles.thumImage} source={require('../../../../assets/images/merbabu5.jpg')} />
                                        </View>
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
// export default connect(mapStateToProps, mapDispatchToProps)(ViewMountScreen)
export default ViewMountScreen;
