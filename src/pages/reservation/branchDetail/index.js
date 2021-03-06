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
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import {
    primaryColor,
    containerPaddingHorizontal,
    containerPaddingVertical,
    primaryBackgroundColor,
} from './../../../styles/common'
import { Actions } from "react-native-router-flux";
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

const ASPECT_RATIO = 4 / 2;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapMarkerGeneric = require('../../../images/icons/icon_map_marker_generic.png');
const mapMarker = require('../../../images/icons/icon_map_marker_kolula.png');
const mapDummy = require('../../../images/dummys/mapdummy.png');
const bannerDummy = require('../../../images/dummys/dummyBanner.png');

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
    "highlights": ["Highlight 1", "Highlight 2", "Highlight 3", "Highlight 4", "Highlight 5",],
};

export default class ReservationBranchDetail extends Component {

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
        console.log("ReservationBranchDetail props:")
        console.log(this.props);
        if (this.props.reservation.branch) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.reservation.branch.highlights),
                reservation: this.props.reservation,
            });
        } else {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dummyNearBranch.highlights),
                reservation: { branch: dummyNearBranch, }
            });
        }
    }

    renderBranches(highlights) {
        return (
            <View style={styles.viewRow}>
                <Text style={styles.textStandard}>* {highlights}</Text>
            </View>
        );
    }

    render() {
        const { reservation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={[styles.viewHeader]}>
                        <Image source={bannerDummy} style={{ flex: 1, height: 100, minWidth: 200 }} resizeMode={'cover'} />
                    </View>
                    <ScrollView style={styles.viewBody}>
                        <View style={[styles.viewColumn, styles.viewBorderMap, { backgroundColor: "#FFF", marginHorizontal: containerPaddingHorizontal, marginBottom: containerPaddingVertical }]}>
                            <Text style={[styles.textStandardBold, { marginLeft: 10 }]} >Highlights</Text>
                            <Text style={[styles.textStandard, { marginLeft: 15 }]} >&#183; {reservation.description}</Text>
                        </View>

                        <View>
                            <View style={[styles.viewColumn, styles.viewBorderMap, { backgroundColor: "#FFF", marginHorizontal: containerPaddingHorizontal, marginBottom: containerPaddingVertical }]}>
                                <View style={styles.mapView}>
                                    <MapView
                                        style={styles.mapView}
                                        provider={MapView.PROVIDER_GOOGLE}
                                        region={{
                                            latitude: reservation.latitude,
                                            longitude: reservation.longitude,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                    >
                                        <Marker
                                            coordinate={{ latitude: reservation.latitude, longitude: reservation.longitude }}
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
                                            <Text style={styles.textStandardBold} >{reservation.name}</Text>
                                            <Text style={styles.textStandard} >{reservation.location_addres.street+ ',' + reservation.location_addres.zip_code + ' ' + reservation.location_addres.city }</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={[styles.viewFooter, { marginTop: 8 }]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationCalendar({})}>
                            <Text style={styles.textButtonPrimary} >SUP MIETEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}