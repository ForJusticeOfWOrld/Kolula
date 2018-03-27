import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    primaryColor,
} from './../../../styles/common'
import { Actions } from "react-native-router-flux";
import { ActionConst } from "react-native-router-flux";

const mapDummy = require('../../../images/dummys/dummyBanner.png');

export default class RentStart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            debug: false,
        };
    }

    componentWillMount() {
        // debugdata
        console.log("ReservationRules props:")
        console.log(this.props);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={styles.viewBody}>
                        <Text style={styles.textLargeBold}>RentStart Dummy</Text>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.rentStatus()}>
                            <Text style={styles.textButtonPrimary} >FERTIG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}