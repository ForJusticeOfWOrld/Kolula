import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import {
    primaryColor,
    primaryBackgroundColor,
    containerPaddingHorizontal,
    containerPaddingVertical,
} from './../../../styles/common'
import { Actions } from "react-native-router-flux";
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

const ASPECT_RATIO = 4 / 2;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapMarkerGeneric = require('../../../images/icons/icon_map_marker_generic.png');
const mapMarker = require('../../../images/icons/icon_map_marker_kolula.png');
const mapDummy = require('../../../images/dummys/mapdummy.png');

const dummyNearBranch = {
    "id": 2,
    "location_name": "Seerestaurant Tom",
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
    "tariffs": [{ "time": 60, "desc": "1:00h", "price": 9.99 }, { "time": 90, "desc": "1:30h", "price": 12.99 }, { "time": 120, "desc": "2:00h", "price": 14.99 }, { "time": 180, "desc": "3:00h", "price": 19.99 }, { "time": 240, "desc": "4:00h", "price": 29.99 }],
};

const dummyBranches = {
    "branches": [
        {
            "id": 0,
            "location_name": "Strandbad Wannsee",
            "items": "3 x Aufblas SUP XL",
            "items_desc": "Ein Aufblas SUP der Größe XL",
            "time": "11.03.2018 11:00 - 13:00 Uhr",
            "location_street": "Wannsee, 14129 Berlin",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Scharmützelsee ist ein See in Brandenburg. Er liegt zwischen Frankfurt (Oder) und Berlin, südlich von FürstenwaldeSpree.",
            "longitude": 14.027054,
            "latitude": 52.239662,
            "contingent_id": 0,
            "new": 0,
            "distance": 5,
            "tempWater": "11",
            "tempAir": "18",
            "weather": "cloudy",
            "highlights": ["Scharmützelsee Highlight 1", " Scharmützelsee Highlight 2", " Scharmützelsee Highlight 3", "Highlight 4"],
            "tariffs": [{ "time": 60, "desc": "1:00h", "price": 9.99 }, { "time": 90, "desc": "1:30h", "price": 12.99 }, { "time": 120, "desc": "2:00h", "price": 14.99 }, { "time": 180, "desc": "3:00h", "price": 19.99 }, { "time": 240, "desc": "4:00h", "price": 29.99 }],
        },
        {
            "id": 1,
            "location_name": "Eiscafé Antonio",
            "items": "13 x Aufblas SUP Standard",
            "items_desc": "Ein Aufblas SUP der Standard Größe",
            "time": "10.03.2018 12:00 - 15:00 Uhr",
            "location_street": "Scharmützelsee,15526 Bad Saarow",
            "location_transport": "Helenesee, Frankfurt (Oder)",
            "location_desc": "Der Helenesee ist ein See in der Nähe von Frankfurt (Oder) im Oder-Spree-Seengebiet. Er ist ein Naherholungsgebiet und liegt im Landschaftsschutzgebiet Ehemaliges Grubengelände Finkenheerd, in dem sich auch der südöstlich anschließende Katjasee befindet.",
            "longitude": 15.027054,
            "latitude": 51.239662,
            "contingent_id": 0,
            "new": 0,
            "distance": 77,
            "tempWater": "8",
            "tempAir": "12",
            "weather": "cloudy",
            "highlights": ["Helenesee Highlight 1", " Helenesee Highlight 2", "Helenesee Highlight 3"],
            "tariffs": [{ "time": 60, "desc": "1:00h", "price": 9.99 }, { "time": 90, "desc": "1:30h", "price": 12.99 }, { "time": 120, "desc": "2:00h", "price": 14.99 }, { "time": 180, "desc": "3:00h", "price": 19.99 }, { "time": 240, "desc": "4:00h", "price": 29.99 }],
        },
        {
            "id": 3,
            "location_name": "Strandbad Senftenberger See",
            "items": "1 x Aufblas SUP XS",
            "items_desc": "Ein Aufblas SUP der Größe XS",
            "time": "11.02.2018 10:30 - 14:30 Uhr",
            "location_street": "Senftenberger See, 01968 Senftenberg",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Senftenberger See, früher auch Speicherbecken Niemtsch, liegt im Lausitzer Seenland, einer künstlich geschaffenen Seenkette. Der See befindet sich an der Grenze von Nieder- und Oberlausitz zwischen der südbrandenburgischen Stadt Senftenberg und deren Ortsteilen Niemtsch und Großkoschen im Landkreis Oberspreewald-Lausitz. Der Senftenberger See gehört mit einer Fläche von 1300 Hektar zu den größten künstlich angelegten Seen Deutschlands.",
            "longitude": 13.027054,
            "latitude": 51.259662,
            "contingent_id": 0,
            "distance": 90,
            "tempWater": "12",
            "tempAir": "14",
            "weather": "rainy",
            "highlights": ["Senftenberger See Highlight 1", " Highlight 2", "Highlight 3", "Highlight 4", "Highlight 5", "Highlight 6", "Highlight 7", "Highlight 8"],
            "tariffs": [{ "time": 60, "desc": "1:00h", "price": 9.99 }, { "time": 90, "desc": "1:30h", "price": 12.99 }, { "time": 120, "desc": "2:00h", "price": 14.99 }, { "time": 180, "desc": "3:00h", "price": 19.99 }, { "time": 240, "desc": "4:00h", "price": 29.99 }],
        },
        {
            "id": 4,
            "location_name": "Café Helensee",
            "items": "1 x Aufblas SUP XS",
            "items_desc": "Ein Aufblas SUP der Größe XS",
            "time": "11.02.2018 10:30 - 14:30 Uhr",
            "location_street": "Helensee, 15263 Frankfurt Oder",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Senftenberger See, früher auch Speicherbecken Niemtsch, liegt im Lausitzer Seenland, einer künstlich geschaffenen Seenkette. Der See befindet sich an der Grenze von Nieder- und Oberlausitz zwischen der südbrandenburgischen Stadt Senftenberg und deren Ortsteilen Niemtsch und Großkoschen im Landkreis Oberspreewald-Lausitz. Der Senftenberger See gehört mit einer Fläche von 1300 Hektar zu den größten künstlich angelegten Seen Deutschlands.",
            "longitude": 13.027054,
            "latitude": 51.259662,
            "contingent_id": 0,
            "distance": 120,
            "tempWater": "12",
            "tempAir": "14",
            "weather": "rainy",
            "highlights": ["Senftenberger See Highlight 1", " Highlight 2", "Highlight 3", "Highlight 4", "Highlight 5", "Highlight 6", "Highlight 7", "Highlight 8"],
            "tariffs": [{ "time": 60, "desc": "1:00h", "price": 9.99 }, { "time": 90, "desc": "1:30h", "price": 12.99 }, { "time": 120, "desc": "2:00h", "price": 14.99 }, { "time": 180, "desc": "3:00h", "price": 19.99 }, { "time": 240, "desc": "4:00h", "price": 29.99 }],
        }
    ]
};

export default class ReservationBranches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            reservation: false,
        };
    }

    componentWillMount() {
        this.apiGet();
        console.log("ReservationBranches props:")
        console.log(this.props);
    }

    renderBranches(branches) {
        return (
            <TouchableOpacity onPress={() => Actions.reservationBranchDetail({ reservation: branches })}>
                <View style={[styles.viewBorder, { marginTop: 16, backgroundColor: "#FFF" }]}>
                    <View style={[styles.viewRow, { margin: 8 }]}>
                        <View style={[styles.viewColumn, styles.viewMargin]}>
                            <Text style={styles.textStandardBold}>{branches.name}</Text>
                            <Text style={styles.textStandard}>{branches.location_street}</Text>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={[styles.textStandard, { fontSize: 18, color: "#000" }]}>{branches.geofence / 1000} km</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    apiPost() {
        fetch("https://dev.inbooma.net/api/locations", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdWg3ZnQ2Zi00ZjU4LTQ5NWYtYTc3YS1iNGE0YjI2aDEyZDQiLCJleHAiOjE1NDY2MDUwMjR9.NHAxDEbMQnmZ3DNSOEagcMiKxXg9bZoUuHkz8q5ZAcg'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    useremail: this.state.user.toLowerCase(),
                    // useremail: 'mob.web@yahoo.com',
                    password: this.state.pass,
                    // password: 'System1234',
                }
            )
        })
            .then((response) => response.text())
            .then((responseData) => {
                this._checkJson(responseData)

            })
            .done();
        // this.props.navigation.navigate('HomePage');

    }
    _checkJson(jsonData) {//alert(JSON.stringify(jsonData))

        var data = JSON.parse(jsonData);

        if (data.status == 200) {
            this.props.setUser(data.userinfo);
            //alert(data.userinfo._id)
            this.props.navigation.navigate('HomePage');
        } else {
            alert(data.Message);
        }
    };

    apiGet() {
        fetch("https://dev.inbooma.net/api/locations", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxZWQ3NGRiZC0xNTFhLTQzMjctYWU5NC00ZDE3YmM3ZTY5NDIiLCJleHAiOjE1NDY4NDg3NDR9.dYllBo2sCVQWC0RZGulG8X-m4zzEHF8ZxNEpTGlkjkw'
            },
            method: "GET",
        })
            .then((response) => response.text())
            .then((responseData) => {
                this._checkJsonForgetAquariums(responseData)

            })
            .done();
    }
    _checkJsonForgetAquariums(jsonData) {

        var data = JSON.parse(jsonData);

        if (data.success) {
            // this.props.navigation.navigate('HomePage');
            this.setState({
                dataSource: data.data,
            });
        } else {
            //alert(data.Message);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={primaryBackgroundColor}
                    barStyle="light-content"
                />
                <ScrollView style={{ flex: 1, height: undefined, width: undefined, }}>
                    <View style={[styles.viewColumn]}>
                        <View style={styles.viewRow}>
                            <Text style={[styles.textLargeBold, { textAlign: "center", flex: 1, color: "#FFF", marginTop: 12, fontSize: 26 }]} >Nächste Station</Text>
                        </View>
                        <View onPress={() => Actions.reservationBranchDetail({ reservation: { data: dummyNearBranch } })}>
                            <View style={[styles.viewColumn, styles.viewBorderMap, { backgroundColor: "#FFF", marginHorizontal: containerPaddingHorizontal, marginBottom: containerPaddingVertical }]}>
                                {/* <Image source={mapDummy} style={{ flex: 1, height: undefined, width: undefined, minHeight: 150 }} resizeMode={'cover'} /> */}
                                <View style={styles.mapView}>
                                    <MapView
                                        style={styles.mapView}
                                        provider={MapView.PROVIDER_GOOGLE}
                                        region={{
                                            latitude: this.state.dataSource[0] ? this.state.dataSource[0].latitude : 0,
                                            longitude: this.state.dataSource[0] ? this.state.dataSource[0].longitude : 0,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                    >
                                        <Marker
                                            coordinate={{ latitude: this.state.dataSource[0] ? this.state.dataSource[0].latitude : 0, longitude: this.state.dataSource[0] ? this.state.dataSource[0].longitude : 0 }}
                                            image={mapMarker}
                                        />
                                    </MapView>
                                </View>
                                <View style={[styles.viewRow, { justifyContent: "center", alignContent: "center", margin: 12 }]}>
                                    <View style={{ height: 36, width: 30 }}>
                                        <Image source={mapMarkerGeneric} style={{ flex: 1 }} resizeMode='contain' />
                                    </View>
                                    <View style={[styles.viewColumn, { marginLeft: 40, flexDirection: 'row', justifyContent: 'space-between' }]}>
                                        <View>
                                            <Text style={styles.textStandardBold} >{this.state.dataSource[0] ? this.state.dataSource[0].name : ''}</Text>
                                            <Text style={styles.textStandard} >{this.state.dataSource[0] ? this.state.dataSource[0].location_street : ''}</Text>
                                        </View>
                                        <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                                            <Text style={styles.textStandardBold} >{this.state.dataSource[0] ? this.state.dataSource[0].geofence / 1000 + ' km' : ''}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.viewColumn, { backgroundColor: "#f7f7f7", paddingHorizontal: containerPaddingHorizontal, paddingVertical: 8 }]}>
                            <View style={[styles.viewSeparator]}>
                                <Text style={styles.textLarge} >Alle Stationen</Text>
                            </View>
                            <View style={styles.viewColumn}>
                                <FlatList
                                    keyExtractor={(item, index) => index}
                                    data={this.state.dataSource}
                                    renderItem={({ item, index }) => this.renderBranches(item)}
                                    style={styles.listView}
                                />
                            </View>
                            {/* <View style={[styles.viewButtonInactive, { marginTop: 16, padding: 8 }]}>
                                <Text style={styles.textNoStationHeading} >Keine Station in der Nähe?</Text>
                                <Text style={styles.textNoStation} >Standort vorschlagen & Updates erhalten</Text>
                            </View> */}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}