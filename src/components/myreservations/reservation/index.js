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

const ASPECT_RATIO = 4 / 2;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MyReservationsReservation extends Component {

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
                <ScrollView style={styles.viewColumn}>
                    <Text style={[styles.largeFontSizeBold, styles.marginSpacer]} >{this.props.reservation.new ? 'Bevorstehende Miete' : 'Vergangene Miete'}</Text>
                    <View style={[styles.viewRow, styles.marginSpacer]}>
                        <View style={styles.viewIcon}>
                            <Icon name="chevron-circle-up" size={32} color={primaryColor} />
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={styles.textStandardBold} >{this.props.reservation.items}</Text>
                            <Text style={styles.textStandard} >{this.props.reservation.items_desc}</Text>
                        </View>
                    </View>
                    <View style={[styles.viewRow, styles.marginSpacer]}>
                        <View style={styles.viewIcon}>
                            <Icon name="calendar" size={32} color={primaryColor} />
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={styles.textStandardBold} >{this.props.reservation.items}</Text>
                            <Text style={styles.textStandard} >{this.props.reservation.items_desc}</Text>
                        </View>
                    </View>
                    <View style={[styles.viewColumn, styles.marginSpacer]}>
                        <Text style={styles.textStandardBold} >{this.props.reservation.location_name}</Text>
                        <Text style={styles.textStandard} >{this.props.reservation.location_street}</Text>
                        <View style={styles.viewRow}>
                            <View style={styles.viewIconSmall}>
                                <Icon name="info-circle" size={16} color={primaryColor} />
                            </View>
                            <Text style={styles.textStandard} >{this.props.reservation.location_transport}</Text>
                        </View>
                    </View>
                    <View style={[styles.viewMap, styles.marginSpacer]}>

                    </View>
                </ScrollView>
            </View>
        )
    }
}