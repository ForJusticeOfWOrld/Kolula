import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    primaryColor,
} from './../../../styles/common'
import { Actions } from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

const mapDummy = require('../../../images/dummys/dummyBanner.png');

const ruleCards = [
    {
        name: '1',
        text: 'Lorem 1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: require('../../../images/rules/rules01.png'),
    },
    {
        name: '2',
        text: 'Lorem 2 dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: require('../../../images/rules/rules02.png'),
    },
    {
        name: '3',
        text: 'Labore 3 et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: require('../../../images/rules/rules03.png'),
    },
    {
        name: '4',
        text: 'Nummer 4 o dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: require('../../../images/rules/rules04.png'),
    },
];

export default class ReservationRules extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reservation: false,
            user: false,
            debug: false,
        };
    }

    componentWillMount() {
        // debugdata
        console.log("ReservationRules props:")
        console.log(this.props);
        if (this.props.reservation && this.props.user) {
            this.setState({
                reservation: this.props.reservation,
                user: this.props.user
            });
        } else {
            this.setState({
                reservation: { tariff: {"time": 120, "desc": "2:00h", "price": 14.99}, branch: dummyBranch, date: {"date": 22, "month": 11, "year": 2018}, timeWindow: {"timeStart": "10:00", "timeEnd": "11:30"}, items: 5 },
                user: {email: "debugdaten@email.com", password: "password", surname: "Max", name: "Mustermann", street: "Musterweg 12", postCode: "12345", place: "Musterhausen" }
            });
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={styles.viewBody}>
                        <Swiper
                            paginationStyle={{ bottom: +44}}
                            loop
                        >
                            {
                                ruleCards.map((item, key) => {
                                    return (
                                        <View key={key} style={styles.viewSlide}>
                                            <View style={styles.viewSlideImage}>
                                                <Image source={item.image} style={{flex: 1}} resizeMode={'contain'} />
                                            </View>
                                            {
                                                (item.text != '') && (
                                                    <View style={styles.viewSlideDescription}>
                                                        <Text>
                                                            <Text style={styles.textStandard}>{item.text}</Text>
                                                        </Text>
                                                    </View>
                                                )
                                            }
                                            <View style={styles.viewSlideFooter} />
                                        </View>
                                    );
                                })
                            }
                        </Swiper>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationConfirmation({ reservation: this.state.reservation, user: this.state.user })}>
                            <Text style={styles.textButtonPrimary} >ALLES KLAR!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}