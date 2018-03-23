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

export default class ReservationsBranch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            working: false,
        };
    }

    componentWillMount() {
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={styles.viewBody}>
                        <ScrollView style={styles.viewColumn}>
                            <Text style={[styles.textLargeBold, styles.marginSpacer]} >Vergangene Miete</Text>
                            <View style={[styles.viewRow, styles.marginSpacer]}>
                                <View style={styles.viewIcon}>
                                    <Icon name="chevron-circle-up" size={32} color={primaryColor} />
                                </View>
                                <View style={styles.viewColumn}>
                                    <Text style={styles.textStandardBold} >Test</Text>
                                    <Text style={styles.textStandard} >Test123</Text>
                                </View>
                            </View>
                            <View style={[styles.viewRow, styles.marginSpacer]}>
                                <View style={styles.viewIcon}>
                                    <Icon name="calendar" size={32} color={primaryColor} />
                                </View>
                                <View style={styles.viewColumn}>
                                    <Text style={styles.textStandardBold} >Testi</Text>
                                    <Text style={styles.textStandard} >Testi12</Text>
                                </View>
                            </View>
                            <View style={[styles.viewColumn, styles.marginSpacer]}>
                                <Text style={styles.textStandardBold} >Lalelu</Text>
                                <Text style={styles.textStandard} >Lalelu12</Text>
                                <View style={styles.viewRow}>
                                    <View style={styles.viewIconSmall}>
                                        <Icon name="info-circle" size={16} color={primaryColor} />
                                    </View>
                                    <Text style={styles.textStandard} >Mimimi</Text>
                                </View>
                            </View>
                            <View style={[styles.viewMap, styles.marginSpacer]}>
                                <Image source={mapDummy} style={{flex: 1}} resizeMode={'cover'} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        <TouchableOpacity style={styles.viewButton} onPress={() => Actions.myReservationsCancel()}>
                            <Text style={styles.buttonSecondary} >Keine Station in der Nähe?</Text>
                            <Text style={styles.buttonSecondary} >Standort vorschlagen & Updates erhalten</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}