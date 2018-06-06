import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    primaryColor,
} from './../../styles/common'
import { Actions } from "react-native-router-flux";
import { ActionConst } from "react-native-router-flux";
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

export default class Login extends Component {

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
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <Image source={Images.imgLogoColor} style={{ marginTop: 50 }} resizeMode='contain' />
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            placeholderTextColor="#9b9b9b"
                            placeholder={"E-Mail Adresse"}
                            underlineColorAndroid="transparent"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            placeholderTextColor="#9b9b9b"
                            placeholder={"Password"}
                            underlineColorAndroid="transparent"
                            keyboardType="visible-password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="go"
                            onChangeText={pwd => this.setState({ pwd })}
                        />
                    </View>
                    <View style={styles.viewFooter}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationPayment({ type: ActionConst.RESET })}>
                            <Text style={styles.textButtonPrimary} >LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.textForgotPwd} >Passwort vergessen?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}