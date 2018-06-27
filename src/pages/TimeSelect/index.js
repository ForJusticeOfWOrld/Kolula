
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

export default class TimeSelect extends Component {

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
                    <DatePicker
                        style={{width: Metrics.buttonWidth}}
                        date={this.state.date}
                        mode="datetime"
                        placeholder="select date"
                        format="ddd DD MMM HH:mm"
                        minDate="2018-05-01"
                        maxDate="2020-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date, time) => { console.log('Date=', time); this.setState({date: time})}}
                    />
                    <View style={{height: 50}}/>
                    <Text style={styles.normalText}>
                        Dauer Wählen
                    </Text>
                    <View style={{height: 1, backgroundColor: 'grey', marginBottom: 16}}/>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ backgroundColor: 'white', width: Metrics.buttonWidth }}
                        itemStyle={{borderColor: 'grey', borderWidth: 1}}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="1 Stunde" value="1" />
                        <Picker.Item label="1 Stunde 30 Minuten" value="2" />
                        <Picker.Item label="2 Stunde" value="3" />
                        <Picker.Item label="2 Stunde 30 Minuten" value="4" />
                        <Picker.Item label="3 Stunde" value="5" />
                    </Picker>
                    <View style={styles.viewFooter}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.boardSelect({ type: ActionConst.PUSH })}>
                            <Text style={styles.textButtonPrimary} >WEITER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
