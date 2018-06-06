import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    primaryColor,
    primaryBackgroundColor,
} from './../../styles/common'
import {
    Actions,
    ActionConst,
} from "react-native-router-flux";
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

const logoKolula = require('../../images/logos/logo_kolula_white.png');

export default class Login extends Component {

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

    componentDidMount() {
        setTimeout(() => {
            Actions.reservationBranch({ type: ActionConst.RESET });
        }, 500);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={primaryBackgroundColor}
                    barStyle="light-content"
                />
                <View style={[styles.viewColumn, { justifyContent: "center" }]}>
                    <Image source={logoKolula} style={{ marginTop: 100, marginBottom: 64 }} resizeMode='contain' />
                    <ActivityIndicator size={50} color="#b2e3e5" />
                </View>
            </View>
        )
    }
}