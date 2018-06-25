
import React, { Component } from 'react';

import {
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Picker,
    SafeAreaView
} from 'react-native';

import DatePicker from 'react-native-datepicker'

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    primaryColor,
} from './../../styles/common'

import { Actions } from "react-native-router-flux";
import { ActionConst } from "react-native-router-flux";
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

export default class BoardSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            debug: false,
            email: '',
            pwd: '',
        };
    }

    componentWillMount() {
        // debugdata
        console.log("ReservationRules props:")
        console.log(this.props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image resizeMode='stretch' source={Icons.iconBoardBlack} style={styles.boardicon}/>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Text style={styles.normalText}>
                                SUP-Aufblasbar
                            </Text>
                            <Text style={[styles.smallText, {color: 'grey'}]}>
                                leichtes Board für Anfänger
                            </Text>
                        </View>
                        <View style={{flex:1}}/>
                        <View style={{borderColor: 'rgba(0, 160.65, 160.65, 1)', paddingHorizontal: 10, borderWidth: 2, borderRadius: 10}}>
                            <Text style={{fontSize: 20,color: 'rgba(0, 160.65, 160.65, 1)'}}>
                                1   v
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image resizeMode='stretch' source={Icons.iconBoardDarkGrey} style={styles.boardicon}/>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Text style={[styles.normalText, {color: 'grey'}]}>
                                SUP-Hardboard
                            </Text>
                            <Text style={[styles.smallText, {color: 'grey'}]}>
                                das Board für Profis
                            </Text>
                        </View>
                        <View style={{flex:1}}/>
                        <View style={{borderColor: 'rgb(183, 220, 222)', paddingHorizontal: 10, borderWidth: 2, borderRadius: 10}}>
                            <Text style={{fontSize: 20,color: 'rgb(183, 220, 222)'}}>
                                0   v
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image resizeMode='stretch' source={Icons.iconInfoDark} style={styles.iconInfoDark}/>
                        <Text style={[styles.smallText, {marginBottom: 0, color: 'grey'}]}>
                            {' '}Erst buchbar ab der 2. Buchung
                        </Text>
                    </View>
                    <View style={{height: 30}}/>
                    <Text style={styles.normalText}>
                        Verfügbare Zeiten
                    </Text>
                    <View style={{height: 1, backgroundColor: 'grey', marginBottom: 16}}/>
                    <TouchableOpacity style={styles.shadowContainer}>
                        <Text style={{fontSize: 20 }}>
                            frühere Zeiten
                        </Text>
                        <Text style={{fontSize: 20,color: 'rgba(0, 160.65, 160.65, 1)'}}>
                            Prüfen
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shadowContainer}>
                        <Text style={{fontSize: 20, color: 'grey' }}>
                            10:00 – 11:00
                        </Text>
                        <Text style={{fontSize: 20, color: 'grey'}}>
                            Nicht Verfügbar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shadowContainer}>
                        <Text style={{fontSize: 20 }}>
                            11:30 – 12:30
                        </Text>
                        <Text style={{fontSize: 20,color: 'rgba(0, 160.65, 160.65, 1)'}}>
                            Auswählen
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shadowContainer}>
                        <Text style={{fontSize: 20 }}>
                            spätere Zeiten
                        </Text>
                        <Text style={{fontSize: 20,color: 'rgba(0, 160.65, 160.65, 1)'}}>
                            Prüfen
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.viewFooter}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationPayment({ type: ActionConst.RESET })}>
                            <Text style={styles.textButtonPrimary} >WEITER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
