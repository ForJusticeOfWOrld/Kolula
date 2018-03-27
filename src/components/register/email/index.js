import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import MapView from 'react-native-maps';
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

export default class RegisterEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: false,
            newReservation: false,
            apiCallWorking: false,
            //debugdata
            tariff: false,
            branch: false,
            date: false,
            timeWindow: false,
            items: false,
        };
    }

    componentWillMount() {
        // debugdata
        console.log("RegisterEmail props:")
        console.log(this.props);
        if (this.props.tariff && this.props.branch && this.props.date && this.props.items) {
            this.setState({
                tariff: this.props.tariff,
                branch: this.props.branch,
                date: this.props.date,
                timeWindow: this.props.timeWindow,
                items: this.props.items,
            });
        } else {
            this.setState({
                tariff: {"time": 120, "desc": "2:00h", "price": 14.99},
                branch: dummyBranch,
                date: {"date": 22, "month": 11, "year": 2018},
                timeWindow: {"timeStart": "10:00", "timeEnd": "11:30"},
                items: 5,
            });
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={[styles.viewBody, styles.viewEmail]}>
                        <View style={styles.viewInput}>
                            <TextInput
                                style={styles.inputText}
                                placeholderTextColor={primaryColor}
                                placeholder={"E-Mail Adresse"}
                                underlineColorAndroid="transparent"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="go"
                                editable={!this.state.apiCallWorking}
                                onChangeText={email => this.setState({email})}
                            />
                        </View>
                        <TouchableOpacity style={[styles.viewButtonSecondary, {marginTop: 18}]} onPress={() => Actions.myReservationsCancel()}>
                            <Text style={styles.textButtonSecondary} >Login with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.registerAccount({tariff: this.state.tariff, branch: this.state.branch, date: this.state.date, timeWindow: this.state.timeWindow, items: this.state.items, email: this.state.email})}>
                            <Text style={styles.textButtonPrimary} >WEITER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}