import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import MapView from 'react-native-maps';
import CheckBox from 'react-native-icon-checkbox';
import styles from './styles';
import { Actions } from "react-native-router-flux";
import {
    primaryColor,
} from './../../../styles/common'

dummyReservation = "Temp";

const dummyBranch = {
    "id": 2,
    "location_name": "Hufeisensee",
    "items": "4 x Aufblas SUP L",
    "items_desc": "Ein Aufblas SUP der Größe L",
    "time": "24.02.2018 10:30 - 18:00 Uhr",
    "location_street": "Schkeuditzer Str. 70, 06116 Halle (Saale)",
    "location_transport": "Halle, Alfred-Schneider-Str",
    "location_desc": "Der Hufeisensee, ein Tagebaurestloch, ist der größte See im Stadtgebiet von Halle (Saale). Er liegt im östlichen Teil zwischen den Ortsteilen Büschdorf und Kanena. In der Gegend wurde 1832 erstmals Braunkohle abgebaut. 1926 fand man größere Vorkommen und es entstand der Tagebau zwischen den beiden Ortsteilen. Nachdem die Braunkohlevorkommen 1942 abgebaut waren, wurde bis zur Stilllegung des Tagebaus in den 1960er Jahren Kies gefördert.",
    "longitude": 12.022662,
    "latitude": 51.466134,
    "contingent_id": 0,
    "new": 0,
    "distance": 12,
    "tempWater": "15",
    "tempAir": "24",
    "weather": "sunny",
    "highlights": ["Hufeisensee Highlight 1", " Hufeisensee Highlight 2", "Highlight 3", "Highlight 4", "Highlight 5"],
    "tariffs": [{"time": 60, "desc": "1:00h", "price": 9.99},{"time": 90, "desc": "1:30h", "price": 12.99},{"time": 120, "desc": "2:00h", "price": 14.99},{"time": 180, "desc": "3:00h", "price": 19.99},{"time": 240, "desc": "4:00h", "price": 29.99}],
};

export default class ReservationPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: false,
            reservation: false,
            isPayment: true,
        };
    }

    handlePressCheckedBox = (checked) => {
        this.setState({
            isTermsChecked: checked,
        });
    };

    handleSelectPayment = () => {
        this.setState({
            isPayment: true,
        });
    };

    handleSelectCoupon = () => {
        this.setState({
            isPayment: false,
        });
    };

    componentWillMount() {
        // debugdata
        console.log("ReservationPayment props:")
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
                    <View style={[styles.viewBody, styles.viewEmail]}>

                        <View style={[styles.viewRow, {flex: 0}]}>
                            {
                                (this.state.isPayment === true) ? (
                                    <View style={styles.viewButtonPrimary}>
                                        <Text style={styles.textButtonPrimary} >Paypal</Text>
                                    </View>
                                ) : (
                                    <TouchableOpacity style={styles.viewButtonInactive} onPress={() => this.handleSelectPayment}>
                                        <Text style={styles.textButtonInactive} >Paypal</Text>
                                    </TouchableOpacity>
                                )
                            }
                            {
                                (this.state.isPayment === false) ? (
                                    <View style={styles.viewButtonPrimary}>
                                        <Text style={styles.textButtonPrimary} >Gutschein</Text>
                                    </View>
                                ) : (
                                    <TouchableOpacity style={styles.viewButtonInactive} onPress={() => this.handleSelectCoupon}>
                                        <Text style={styles.textButtonInactive} >Gutschein</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style={[styles.viewColumn, styles.viewBorder, {flex: 0, height: 220, alignSelf: 'stretch', marginTop: 24, padding: 8}]}>
                            <View style={styles.viewColumn}>
                                <Text style={styles.textStandardBold} >{this.state.reservation.items} Aufblas-SUP</Text>
                                <Text style={styles.textStandard} >Ein normales SUP.</Text>
                            </View>
                            <View style={styles.viewColumn}>
                                <Text style={styles.textStandardBold} >{this.state.reservation.date.date + "-" + this.state.reservation.date.month + "-" + this.state.reservation.date.year}</Text>
                                <Text style={styles.textStandardBold} >{this.state.reservation.timeWindow.timeStart + " - " + this.state.reservation.timeWindow.timeEnd + " Uhr"}</Text>
                            </View>
                            <View style={[styles.viewColumn, styles.marginSpacer]}>
                                <Text style={styles.textStandardBold} >{this.state.reservation.branch.location_name}</Text>
                                <Text style={styles.textStandard} >{this.state.reservation.branch.location_street}</Text>
                            </View>
                            <Text style={[styles.textLargeBold, styles.marginSpacer]} >{this.state.reservation.tariff.price*this.state.reservation.items} €</Text>
                        </View>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8, height: 40}]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationRules({ reservation: this.state.reservation, user: this.state.user })}>
                            <Text style={styles.textButtonPrimary} >WEITER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}