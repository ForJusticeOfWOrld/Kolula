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
        if (this.props.reservation.branch) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.reservation.branch.highlights),
                reservation: this.props.reservation,
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
                                            <Text style={styles.textStandard} >{reservation.location_addres.street + ',' + reservation.location_addres.zip_code + ' ' + reservation.location_addres.city}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={[styles.viewFooter, { marginTop: 8 }]}>
                        {/* <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationCalendar({ reservation: this.state.reservation })}> */}
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationCalendar({})}>
                            <Text style={styles.textButtonPrimary} >SUP MIETEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}