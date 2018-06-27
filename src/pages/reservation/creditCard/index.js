import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    WebView,
    SafeAreaView
} from 'react-native'; 
import styles from './styles';
import { Actions } from "react-native-router-flux";
 
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
export default class CreditCard extends Component {

    constructor(props) {
        super(props);
       
    }

    _onChange = form => console.log(form);

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <CreditCardInput onChange={this._onChange} />
            </SafeAreaView>
        )
    }
}