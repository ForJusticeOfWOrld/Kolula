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
                            placeholderTextColor={primaryColor}
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
                            placeholderTextColor={primaryColor}
                            placeholder={"Password"}
                            underlineColorAndroid="transparent"
                            keyboardType="visible-password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="go"
                            onChangeText={pwd => this.setState({ pwd })}
                        />
                    </View>
                    <View style={[styles.viewFooter, { marginTop: 8 }]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationBranch({ type: ActionConst.RESET })}>
                            <Text style={styles.textButtonPrimary} >FERTIG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}