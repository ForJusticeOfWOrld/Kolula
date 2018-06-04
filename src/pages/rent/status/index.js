import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    primaryColor,
    secondaryColor,
    backgroundColor,
} from './../../../styles/common'
import CountdownCircle from 'react-native-countdown-circle'

import { Actions } from "react-native-router-flux";
import { ActionConst } from "react-native-router-flux";
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

const mapDummy = require('../../../images/dummys/dummyBanner.png');

export default class RentStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            debug: false,
            timer: 320,
        };
    }

    componentWillMount() {
        // debugdata
        console.log("ReservationRules props:")
        console.log(this.props);
    }

    timeIsOver () {
        Alert.alert(
            'Zeit abgelaufen',
            'Ihre Miete ist abgelaufen',
            [
                {text: 'Miete verlängern', onPress: () =>  Actions.reservationBranch({type: ActionConst.RESET})},
                {text: 'Miete beenden', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
        )
    };

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={styles.viewBody}>
                        <View style={[styles.viewColumn, {height: 100, flex: 0}]}>
                            <Text style={styles.textLargeBold}>Aktuelle Buchung</Text>
                            <Text style={styles.textStandardBold}>11:30 - 13:30 Uhr</Text>
                        </View>
                        <View style={[styles.viewColumn, {height: 100, flex: 1}]}>
                            <TouchableOpacity style={[styles.viewButtonSecondary, {marginTop: 16}]} onPress={() => Actions.rentStatus({type: ActionConst.RESET})}>
                                <Text style={styles.textButtonSecondary} >TÜR ÖFFNEN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.viewButtonSecondary, {marginTop: 16}]} onPress={() => Actions.rentStatus({type: ActionConst.RESET})}>
                                <Text style={styles.textButtonSecondary} >SCHADEN MELDEN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.viewButtonSecondary, {marginTop: 16}]} onPress={() => Actions.rentStatus({type: ActionConst.RESET})}>
                                <Text style={styles.textButtonSecondary} >VERLÄNGERUNG PRÜFEN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                            <CountdownCircle
                                seconds={11}
                                radius={64}
                                borderWidth={16}
                                color={primaryColor}
                                bgColor={backgroundColor}
                                textStyle={{ fontSize: 44, fontWeight: 'bold', }}
                                onTimeElapsed={() => this.timeIsOver() }
                            />
                        </View>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.rentStatus({type: ActionConst.RESET})}>
                            <Text style={[styles.textButtonPrimary, {fontSize: 19}]} >BUCHUNG BEENDEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}