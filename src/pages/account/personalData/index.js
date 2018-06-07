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
import { ActionConst } from "react-native-router-flux";
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';
import CardView from 'react-native-cardview'

const mapDummy = require('../../../images/dummys/dummyBanner.png');

export default class AccountPersonalData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            debug: false,
        };
    }

    componentWillMount() {
        // debugdata
        console.log("ReservationRules props:")
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={styles.cardWrapper}>
                        <CardView
                            style={{ width: 350, height: 100 }}
                            cardElevation={3}
                            cardMaxElevation={3}
                            cornerRadius={5}>
                            <Text>
                                Vor- und Nachname
                        </Text>
                        </CardView>
                    </View>
                    <View style={styles.cardWrapper}>

                        <CardView
                            style={{ width: 350, height: 300 }}
                            cardElevation={3}
                            cardMaxElevation={3}
                            cornerRadius={5}>
                            <Text>
                                Straß und Hausnummer
                        </Text>
                        </CardView>
                    </View>
                    <View style={styles.cardWrapper}>

                        <CardView
                            style={{ width: 350, height: 100 }}
                            cardElevation={3}
                            cardMaxElevation={3}
                            cornerRadius={5}>
                            <Text>
                                Handynummer
                        </Text>
                        </CardView>
                    </View>
                    <View style={[styles.viewFooter, { marginTop: 8 }]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationBranch({ type: ActionConst.RESET })}>
                            <Text style={styles.textButtonPrimary} >FERTIG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}