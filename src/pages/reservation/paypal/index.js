import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    WebView,
} from 'react-native'; 
import styles from './styles';
import { Actions } from "react-native-router-flux";
 
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';
 
export default class Paypal extends Component {

    constructor(props) {
        super(props);
       
    }
 
    render() {
        return (
            <WebView
                source={{uri: 'https://www.paypal.com/login'}}
                style={{marginTop: 20}}
            />
        )
    }
}