import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import MapView from 'react-native-maps';
import styles from './styles';
import {
    primaryColor,
} from './../../../styles/common'
import { Actions } from "react-native-router-flux";

const ASPECT_RATIO = 4 / 2;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapDummy = require('../../../images/dummys/mapdummy.png');

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

export default class MyReservationsReservation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tariff: false,
            branch: false,
            date: false,
            timeWindow: false,
            items: false,
        };
    }

    componentWillMount() {
        // debugdata
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
                    <View style={styles.viewBody}>
                        <ScrollView style={styles.viewColumn}>
                            <Text style={[styles.textLargeBold, styles.marginSpacer]} >Zusammenfassung</Text>
                            <View style={[styles.viewRow, styles.marginSpacer]}>
                                <View style={styles.viewIcon}>
                                    <Icon name="chevron-circle-up" size={32} color={primaryColor} />
                                </View>
                                <View style={styles.viewColumn}>
                                    <Text style={styles.textStandardBold} >{this.state.items} Aufblas-SUP</Text>
                                    <Text style={styles.textStandard} >Ein normales SUP.</Text>
                                </View>
                            </View>
                            <View style={[styles.viewRow, styles.marginSpacer]}>
                                <View style={styles.viewIcon}>
                                    <Icon name="calendar" size={32} color={primaryColor} />
                                </View>
                                <View style={styles.viewColumn}>
                                    <Text style={styles.textStandardBold} >{this.state.date.date + "-" + this.state.date.month + "-" + this.state.date.year}</Text>
                                    <Text style={styles.textStandard} >{this.state.timeWindow.timeStart + " - " + this.state.timeWindow.timeEnd + " Uhr"}</Text>
                                </View>
                            </View>
                            <View style={[styles.viewColumn, styles.marginSpacer]}>
                                <Text style={styles.textStandardBold} >{this.state.branch.location_name}</Text>
                                <Text style={styles.textStandard} >{this.state.branch.location_street}</Text>
                                <View style={styles.viewRow}>
                                    <View style={styles.viewIconSmall}>
                                        <Icon name="info-circle" size={16} color={primaryColor} />
                                    </View>
                                    <Text style={styles.textStandard} >{this.state.branch.location_transport}</Text>
                                </View>
                            </View>
                            <View style={[styles.viewMap, styles.marginSpacer, {height: 200}]}>
                                <Image source={mapDummy} style={{flex: 1}} resizeMode={'cover'} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.myReservationsCancel()}>
                            <Text style={styles.textButtonPrimary} >REGISTRIEREN UND BUCHEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}