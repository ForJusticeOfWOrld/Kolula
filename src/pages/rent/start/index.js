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

const mapDummy = require('../../../images/rules/rules01.png');

export default class RentStart extends Component {

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
                    <View style={styles.viewBody}>
                        <View style={[styles.viewColumn, { height: 100, flex: 0 }]}>
                            <Text style={styles.textLargeBold}>Aktuelle Buchung</Text>
                            <Text style={styles.textStandardBold}>11:30 - 13:30 Uhr</Text>
                        </View>
                        <View style={[styles.viewImage, { height: 700 }]}>
                            <Image source={mapDummy} style={{ flex: 1 }} resizeMode={'contain'} />
                        </View>
                    </View>
                    <View style={[styles.viewFooter, { marginTop: 8 }]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.rentStatus({ type: ActionConst.RESET })}>
                            <Text style={[styles.textButtonPrimary, { fontSize: 19 }]} >TÜR ÖFFNEN & BUCHUNG STARTEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}