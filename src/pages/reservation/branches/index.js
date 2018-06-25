import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    StatusBar,
    DeviceEventEmitter,
    Platform,
} from 'react-native';
import Permissions from 'react-native-permissions'
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
import geolib from 'geolib';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

const ASPECT_RATIO = 4 / 2;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapMarkerGeneric = require('../../../images/icons/icon_map_marker_generic.png');
const mapMarker = require('../../../images/icons/icon_map_marker_kolula.png');

export default class ReservationBranches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            reservation: false,
            distance: '',
            locationPermission: '',
            geoDistance: false,
        };
    }

    componentWillMount() {
        // this.apiGet();
        console.log("ReservationBranches props:")
        console.log(this.props);
    }

    componentDidMount() {
        // this.checkLocationPermission();
        this.apiGet();
        this.fetchLocation();
        DeviceEventEmitter.addListener('locationProviderStatusChange', function (status) {
            console.log('Location Enabled', status);
            if (status.enabled) this.fetchLocation();
        });
        Permissions.check('location').then(response => {
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
            this.setState({ locationPermission: response })
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
        LocationServicesDialogBox.stopListener();
    }

    // Request permission to access photos
    _requestPermission = () => {
        Permissions.request('location').then(response => {
            // Returns once the user has chosen to 'allow' or to 'not allow' access
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
            this.setState({ locationPermission: response })
        })
    }

    checkLocationPermission() {
        if (Platform.OS === 'android') {
            LocationServicesDialogBox.checkLocationServicesIsEnabled({
                message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
                ok: "YES",
                cancel: "NO",
                enableHighAccuracy: true,
                showDialog: true,
                openLocationServices: true,
                preventOutSideTouch: false,
                preventBackClick: false,
                providerListener: true
            }).then(success => {
                console.log('Location Test', success); // success => {alreadyEnabled: false, enabled: true, status: "enabled"}
                this.fetchLocation();
            }).catch(error => {
                console.log('Location Error', error.message); // error.message => "disabled"
            });
        } else {
            this.fetchLocation();
        }
    }

    fetchLocation() {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                this.currentCoord = {
                    latitude: coords.latitude,
                    longitude: coords.longitude
                };
                this.getDistances();
            },
            error => console.log('Location Error1', error),
            {
                timeout: 50000,
                enableHighAccuracy: true,
            });
        this.watchID = navigator.geolocation.watchPosition(
            ({ coords }) => {
                this.currentCoord = {
                    latitude: coords.latitude,
                    longitude: coords.longitude
                };
                this.getDistances();
            },
            (error) => {
                console.log('Location Error2', error)
            });
    }

    getDistances() {
        let dataSource = this.state.dataSource;
        if (this.currentCoord) {
            dataSource = dataSource.map(item => {
                let distance = 0;
                if (!isNaN(item.latitude) && !isNaN(item.longitude)) {
                    distance = geolib.getDistance(this.currentCoord, {
                        latitude: item.latitude,
                        longitude: item.longitude
                    });
                    if (!isNaN(distance)) {
                        this.setState({ geoDistance: true });
                    }
                } else {
                    this.setState({ diff: 'false' })
                }
                return { ...item, distance };
            }).sort((a, b) => a.distance > b.distance ? 1 : -1);
        }
        console.log('Test Data', dataSource);
        this.setState({ dataSource });
    }

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
            this.setState({
                dataSource: data.data,
            });
            this.getDistances();
        } else {
            //alert(data.Message);
        }
    };

    renderBranches(branches) {
        const { geoDistance } = this.state;
        return (
            <TouchableOpacity onPress={() => Actions.reservationBranchDetail({ reservation: branches })}>
                <View style={[styles.viewBorder, { marginTop: 16, backgroundColor: "#FFF" }]}>
                    <View style={[styles.viewRow, { margin: 8 }]}>
                        <View style={[styles.viewColumn, styles.viewMargin]}>
                            <Text style={styles.textStandardBold}>{branches.name}</Text>
                            <Text style={styles.textStandard}>{branches.location_addres.street}, {branches.location_addres.zip_code} {branches.location_addres.city}</Text>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={[styles.textStandard, { fontSize: 18, color: "#000" }]}>{!geoDistance ? '' : (branches.distance / 1000.0).toFixed(2) + 'km'}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { locationPermission, diff, geoDistance } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={primaryBackgroundColor}
                    barStyle="light-content"
                />
                <ScrollView style={{ flex: 1, height: undefined, width: undefined, }}>
                    <View style={[styles.viewColumn]}>
                        <View style={styles.viewRow}>
                            <Text style={[styles.textLargeBold, { textAlign: "center", flex: 1, color: "#FFF", marginTop: 12, fontSize: 26 }]} >{geoDistance ? 'Nächste Station' : ''}</Text>
                        </View>
                        <View>
                            {geoDistance ?
                                <View style={[styles.viewColumn, styles.viewBorderMap, { backgroundColor: "#FFF", marginHorizontal: containerPaddingHorizontal, marginBottom: containerPaddingVertical }]}>
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
                                        <View style={{ height: 36, width: 20, marginLeft: -20 }}>
                                            <Image source={mapMarkerGeneric} style={{ flex: 1 }} resizeMode='contain' />
                                        </View>
                                        <View style={[styles.viewColumn, { marginLeft: 25, flexDirection: 'row', justifyContent: 'space-between' }]}>
                                            <View>
                                                <Text style={styles.textStandardBold} >{this.state.dataSource[0] ? this.state.dataSource[0].name : ''}</Text>
                                                <Text style={styles.textStandard}>{this.state.dataSource[0] ? this.state.dataSource[0].location_addres.street + ',' + this.state.dataSource[0].location_addres.zip_code + ' ' + this.state.dataSource[0].location_addres.city : ''}</Text>
                                            </View>
                                            <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                                                <Text style={styles.textStandardBold} >{this.state.dataSource[0] ? (this.state.dataSource[0].distance / 1000.0).toFixed(2) + 'km' : ''}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                :
                                <View style={[styles.viewColumn, styles.viewBorderMap, { backgroundColor: "#FFF", marginHorizontal: containerPaddingHorizontal, marginBottom: containerPaddingVertical }]}>
                                    <View style={styles.mapView}>
                                        <Text style={styles.topOnMap}>Ohne deine Erlaubnis der</Text>
                                        <Text style={styles.midOnMap}>Ortungsdienste können wir dir nicht das volle Kolula Erlebnis bieten. Bitte aktiviere deine Ortungsdienste.</Text>
                                        <Text style={styles.bottomOnMap}>Ortungsdienste zulassen</Text>
                                    </View>
                                </View>
                            }
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
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}