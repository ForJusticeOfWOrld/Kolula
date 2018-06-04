import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

import { Actions, ActionConst } from 'react-native-router-flux';
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

export default class MyReservationsCancel extends Component {

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
                            <View style={styles.viewColumn}>
                                <Text style={styles.textLargeBold} >Stornierung angefordert</Text>
                                <Text style={styles.textLarge} >Du erhälst eine Stornierungsbestätigung mit einem Gutscheincode</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        <TouchableOpacity style={styles.viewButton} onPress={() => Actions.myReservationsOverview({type: ActionConst.RESET})}>
                            <Text style={styles.buttonSecondary} >ALLES KLAR!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}