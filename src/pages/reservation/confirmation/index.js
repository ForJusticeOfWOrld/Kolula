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

const mapDummy = require('../../../images/dummys/dummyBanner.png');

export default class ReservationConfirmation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reservation: false,
            user: false,
            debug: false
        };
    }

    componentWillMount() {
        // debugdata
        console.log("ReservationConfirmation props:")
        console.log(this.props);
        if (this.props.reservation && this.props.user) {
            this.setState({
                reservation: this.props.reservation,
                user: this.props.user
            });
        } else {
            this.setState({
                reservation: { tariff: { "time": 120, "desc": "2:00h", "price": 14.99 }, branch: dummyBranch, date: { "date": 22, "month": 11, "year": 2018 }, timeWindow: { "timeStart": "10:00", "timeEnd": "11:30" }, items: 5 },
                user: { email: "debugdaten@email.com", password: "password", surname: "Max", name: "Mustermann", street: "Musterweg 12", postCode: "12345", place: "Musterhausen" }
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={styles.viewBody}>
                        <Text style={styles.textLargeBold}>Viel Spaß</Text>
                        <ScrollView style={{}}>
                            <Text style={styles.textStandard}>Debug Ausgabe aller Werte:</Text>
                            <Text style={styles.textStandard}>branch id: {this.state.reservation.branch.id}</Text>
                            <Text style={styles.textStandard}>branch location_name: {this.state.reservation.branch.location_name}</Text>
                            <Text style={styles.textStandard}>branch location_street: {this.state.reservation.branch.location_street}</Text>
                            <Text style={styles.textStandard}>branch location_transport: {this.state.reservation.branch.location_transport}</Text>
                            <Text style={styles.textStandard}>branch location_desc: {this.state.reservation.branch.location_desc}</Text>
                            <Text style={styles.textStandard}>branch longitude: {this.state.reservation.branch.longitude}</Text>
                            <Text style={styles.textStandard}>branch latitude: {this.state.reservation.branch.latitude}</Text>
                            <Text style={styles.textStandard}>branch distance: {this.state.reservation.branch.distance}</Text>
                            <Text style={styles.textStandard}>branch tempWater: {this.state.reservation.branch.tempWater}</Text>
                            <Text style={styles.textStandard}>branch tempAir: {this.state.reservation.branch.tempAir}</Text>
                            <Text style={styles.textStandard}>branch weather: {this.state.reservation.branch.weather}</Text>
                            <Text style={styles.textStandard}>tariff time: {this.state.reservation.tariff.time}</Text>
                            <Text style={styles.textStandard}>tariff desc: {this.state.reservation.tariff.desc}</Text>
                            <Text style={styles.textStandard}>tariff price: {this.state.reservation.tariff.price}</Text>
                            <Text style={styles.textStandard}>date day: {this.state.reservation.date.date}</Text>
                            <Text style={styles.textStandard}>date month: {this.state.reservation.date.month}</Text>
                            <Text style={styles.textStandard}>date year: {this.state.reservation.date.year}</Text>
                            <Text style={styles.textStandard}>timeWindow timeStart: {this.state.reservation.timeWindow.timeStart}</Text>
                            <Text style={styles.textStandard}>timeWindow timeEnd: {this.state.reservation.timeWindow.timeEnd}</Text>
                            <Text style={styles.textStandard}>items: {this.state.reservation.items}</Text>
                            <Text style={styles.textStandard}>user email: {this.state.user.email}</Text>
                            <Text style={styles.textStandard}>user password: {this.state.user.password}</Text>
                            <Text style={styles.textStandard}>user surname: {this.state.user.surname}</Text>
                            <Text style={styles.textStandard}>user name: {this.state.user.name}</Text>
                            <Text style={styles.textStandard}>user street: {this.state.user.street}</Text>
                            <Text style={styles.textStandard}>user postCode: {this.state.user.postCode}</Text>
                            <Text style={styles.textStandard}>user place: {this.state.user.place}</Text>
                        </ScrollView>
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