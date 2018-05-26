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

const dummyNearBranch = {
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

const dummyBranches = {
    "branches": [
        {
            "id": 0,
            "location_name": "Scharmützelsee",
            "items": "3 x Aufblas SUP XL",
            "items_desc": "Ein Aufblas SUP der Größe XL",
            "time": "11.03.2018 11:00 - 13:00 Uhr",
            "location_street": "Parkallee 1, 15526 Bad Saarow",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Scharmützelsee ist ein See in Brandenburg. Er liegt zwischen Frankfurt (Oder) und Berlin, südlich von FürstenwaldeSpree.",
            "longitude": 14.027054,
            "latitude": 52.239662,
            "contingent_id": 0,
            "new": 0,
            "distance": 14,
            "tempWater": "11",
            "tempAir": "18",
            "weather": "cloudy",
            "highlights": ["Scharmützelsee Highlight 1", " Scharmützelsee Highlight 2", " Scharmützelsee Highlight 3", "Highlight 4"],
            "tariffs": [{"time": 60, "desc": "1:00h", "price": 9.99},{"time": 90, "desc": "1:30h", "price": 12.99},{"time": 120, "desc": "2:00h", "price": 14.99},{"time": 180, "desc": "3:00h", "price": 19.99},{"time": 240, "desc": "4:00h", "price": 29.99}],
        },
        {
            "id": 1,
            "location_name": "Helenesee",
            "items": "13 x Aufblas SUP Standard",
            "items_desc": "Ein Aufblas SUP der Standard Größe",
            "time": "10.03.2018 12:00 - 15:00 Uhr",
            "location_street": "Seeweg 12, 15316 Frankfurt (Oder)",
            "location_transport": "Helenesee, Frankfurt (Oder)",
            "location_desc": "Der Helenesee ist ein See in der Nähe von Frankfurt (Oder) im Oder-Spree-Seengebiet. Er ist ein Naherholungsgebiet und liegt im Landschaftsschutzgebiet Ehemaliges Grubengelände Finkenheerd, in dem sich auch der südöstlich anschließende Katjasee befindet.",
            "longitude": 15.027054,
            "latitude": 51.239662,
            "contingent_id": 0,
            "new": 0,
            "distance": 22,
            "tempWater": "8",
            "tempAir": "12",
            "weather": "cloudy",
            "highlights": ["Helenesee Highlight 1", " Helenesee Highlight 2", "Helenesee Highlight 3"],
            "tariffs": [{"time": 60, "desc": "1:00h", "price": 9.99},{"time": 90, "desc": "1:30h", "price": 12.99},{"time": 120, "desc": "2:00h", "price": 14.99},{"time": 180, "desc": "3:00h", "price": 19.99},{"time": 240, "desc": "4:00h", "price": 29.99}],
        },
        {
            "id": 3,
            "location_name": "Senftenberger See",
            "items": "1 x Aufblas SUP XS",
            "items_desc": "Ein Aufblas SUP der Größe XS",
            "time": "11.02.2018 10:30 - 14:30 Uhr",
            "location_street": "Parkallee 1, 15526 Bad Saarow",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Senftenberger See, früher auch Speicherbecken Niemtsch, liegt im Lausitzer Seenland, einer künstlich geschaffenen Seenkette. Der See befindet sich an der Grenze von Nieder- und Oberlausitz zwischen der südbrandenburgischen Stadt Senftenberg und deren Ortsteilen Niemtsch und Großkoschen im Landkreis Oberspreewald-Lausitz. Der Senftenberger See gehört mit einer Fläche von 1300 Hektar zu den größten künstlich angelegten Seen Deutschlands.",
            "longitude": 13.027054,
            "latitude": 51.259662,
            "contingent_id": 0,
            "distance": 56,
            "tempWater": "12",
            "tempAir": "14",
            "weather": "rainy",
            "highlights": ["Senftenberger See Highlight 1", " Highlight 2", "Highlight 3", "Highlight 4", "Highlight 5", "Highlight 6", "Highlight 7", "Highlight 8"],
            "tariffs": [{"time": 60, "desc": "1:00h", "price": 9.99},{"time": 90, "desc": "1:30h", "price": 12.99},{"time": 120, "desc": "2:00h", "price": 14.99},{"time": 180, "desc": "3:00h", "price": 19.99},{"time": 240, "desc": "4:00h", "price": 29.99}],
        }
    ]
};

export default class ReservationBranches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            reservation: false,
        };
    }

    componentWillMount() {
        console.log("ReservationBranches props:")
        console.log(this.props);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dummyBranches.branches),
            reservation: {branch: dummyNearBranch},
        });
    }

    renderBranches(branches) {
        return (
            <TouchableOpacity onPress={() => Actions.reservationBranchDetail({ reservation: {branch: branches} })}>
                <View style={styles.viewBorder}>
                    <View style={[styles.viewColumn, styles.viewMargin]}>
                        <Text style={styles.textStandardBold}>{branches.location_name}</Text>
                        <Text style={styles.textStandard}>{branches.location_street}</Text>
                        <Text style={styles.textStandard}>{branches.distance} km entfernt</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1, height: undefined, width: undefined,}}>
                    <View style={styles.viewColumn}>
                        <View style={styles.viewRow}>
                            <Text style={[styles.textLargeBold, styles.marginSpacer]} >Nächste Station</Text>
                        </View>
                        <TouchableOpacity onPress={() => Actions.reservationBranchDetail({ reservation: {branch: dummyNearBranch} })}>
                        <View style={[styles.viewColumn, styles.viewBorder]}>
                            <View style={[styles.viewMap]}>
                                <Image source={mapDummy} style={{flex: 1, height: undefined, width: undefined, minHeight: 150}} resizeMode={'cover'} />
                            </View>
                            <View style={[styles.viewColumn, styles.viewMargin]}>
                                <Text style={styles.textStandardBold} >{dummyNearBranch.location_name}</Text>
                                <Text style={styles.textStandard} >{dummyNearBranch.distance} km entfernt</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={[styles.viewSeparator, styles.marginSpacer]}>
                            <Text style={styles.textSeparator} >Weitere Stationen</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderBranches.bind(this)}
                                style={styles.listView}
                                enableEmptySections={true}
                            />
                        </View>
                        <View style={styles.viewButtonInactive}>
                            <Text style={styles.textNoStationHeading} >Keine Station in der Nähe?</Text>
                            <Text style={styles.textNoStation} >Standort vorschlagen & Updates erhalten</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}