import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import MapView from 'react-native-maps';
import CheckBox from 'react-native-icon-checkbox';
import styles from './styles';
import { Actions } from "react-native-router-flux";
import {
    primaryColor,
} from './../../../styles/common'
import ReservationRules from "../../reservation/rules";

dummyReservation = "Temp";

const dummyBranch = {
    "id": 2,
    "location_name": "Hufeisensee",
    "items": "4 x Aufblas SUP L",
    "items_desc": "Ein Aufblas SUP der Größe L",
    "time": "24.02.2018 10:30 - 18:00 Uhr",
    "location_street": "Schkeuditzer Str. 70, 06116 Halle (Saale)",
    "location_transport": "Halle, Alfred-Schneider-Str",
    "location_desc": "Der Hufeisensee, ein Tagebaurestloch, ist der größte See im Stadtgebiet von Halle (Saale). Er liegt im östlichen Teil zwischen den Ortsteilen Büschdorf und Kanena. In der Gegend wurde 1832 erstmals Braunkohle abgebaut. 1926 fand man größere Vorkommen und es entstand der Tagebau zwischen den beiden Ortsteilen. Nachdem die Braunkohlevorkommen 1942 abgebaut waren, wurde bis zur Stilllegung des Tagebaus in den 1960er Jahren Kies gefördert.",
    "longitude": 12.022662,
    "latitude": 51.466134,
    "contingent_id": 0,
    "new": 0,
    "distance": 12,
    "tempWater": "15",
    "tempAir": "24",
    "weather": "sunny",
    "highlights": ["Hufeisensee Highlight 1", " Hufeisensee Highlight 2", "Highlight 3", "Highlight 4", "Highlight 5"],
    "tariffs": [{"time": 60, "desc": "1:00h", "price": 9.99},{"time": 90, "desc": "1:30h", "price": 12.99},{"time": 120, "desc": "2:00h", "price": 14.99},{"time": 180, "desc": "3:00h", "price": 19.99},{"time": 240, "desc": "4:00h", "price": 29.99}],
};

export default class RegisterAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: false,
            password: false,
            surname: false,
            name: false,
            postCode: false,
            place: false,
            street: false,
            isSmall: true,
            isTermsChecked: false,
            newReservation: false,
            apiCallWorking: false,
            //debugdata
            tariff: false,
            branch: false,
            date: false,
            timeWindow: false,
            items: false,
        };
    }

    handlePressCheckedBox = (checked) => {
        this.setState({
            isTermsChecked: checked,
        });
    }

    handleSelectRadionButtonSmall = (checked) => {
        this.setState({
            isSmall: true,
        });
    }

    handleSelectRadionButtonLarge = (checked) => {
        this.setState({
            isSmall: false,
        });
    }
    componentWillMount() {
        // debugdata
        console.log("RegisterAccount props:")
        console.log(this.props);
        if (this.props.tariff && this.props.branch && this.props.date && this.props.items) {
            this.setState({
                tariff: this.props.tariff,
                branch: this.props.branch,
                date: this.props.date,
                timeWindow: this.props.timeWindow,
                items: this.props.items,
                email: this.props.email,
            });
        } else {
            this.setState({
                tariff: {"time": 120, "desc": "2:00h", "price": 14.99},
                branch: dummyBranch,
                date: {"date": 22, "month": 11, "year": 2018},
                timeWindow: {"timeStart": "10:00", "timeEnd": "11:30"},
                items: 5,
                email: "debugdaten@email.com"
            });
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={[styles.viewBody, styles.viewEmail]}>
                        <View style={styles.viewInput}>
                            <TextInput
                                style={styles.inputText}
                                placeholderTextColor={primaryColor}
                                placeholder={"E-Mail Adresse"}
                                underlineColorAndroid="transparent"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                editable={!this.state.apiCallWorking}
                                onChangeText={email => this.setState({email})}
                            />
                        </View>
                        <View style={styles.viewInput}>
                            <TextInput
                                style={styles.inputText}
                                placeholderTextColor={primaryColor}
                                placeholder={"Neues Passwort"}
                                underlineColorAndroid="transparent"
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                secureTextEntry
                                editable={!this.state.apiCallWorking}
                                onChangeText={password => this.setState({password})}
                            />
                        </View>
                        <Text style={styles.textLargeBold} >Persönliche Daten</Text>
                        <View style={styles.viewInput}>
                            <TextInput
                                style={styles.inputText}
                                placeholderTextColor={primaryColor}
                                placeholder={"Vorname"}
                                underlineColorAndroid="transparent"
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                editable={!this.state.apiCallWorking}
                                onChangeText={surname => this.setState({surname})}
                            />
                        </View>
                        <View style={styles.viewInput}>
                            <TextInput
                                style={styles.inputText}
                                placeholderTextColor={primaryColor}
                                placeholder={"Nachname"}
                                underlineColorAndroid="transparent"
                                keyboardType="default"
                                autoCapitalize="none"
                                returnKeyType="next"
                                editable={!this.state.apiCallWorking}
                                onChangeText={name => this.setState({name})}
                            />
                        </View>
                        <View style={styles.viewInput}>
                            <TextInput
                                style={styles.inputText}
                                placeholderTextColor={primaryColor}
                                placeholder={"Straße"}
                                underlineColorAndroid="transparent"
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                editable={!this.state.apiCallWorking}
                                onChangeText={street => this.setState({street})}
                            />
                        </View>
                        <View style={[styles.viewRow, {flex: 0}]}>
                            <View style={[styles.viewInput, {width: 80, alignSelf: 'auto'}]}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor={primaryColor}
                                    placeholder={"PLZ"}
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={postCode => this.setState({postCode})}
                                />
                            </View>
                            <View style={[styles.viewInput, {marginLeft: 4, flex: 1}]}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor={primaryColor}
                                    placeholder={"Ort"}
                                    underlineColorAndroid="transparent"
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={place => this.setState({place})}
                                />
                            </View>
                        </View>
                        <View style={[styles.viewRow, {alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-start',}]}>
                            <CheckBox
                                label=""
                                size={20}
                                checked={this.state.isSmall}
                                onPress={this.handleSelectRadionButtonSmall}
                                uncheckedIconName="radio-button-unchecked"
                                checkedIconName="radio-button-checked"
                            />
                            <Text style={styles.textStandard} >Ich bin kleiner als 1,70m</Text>
                        </View>
                        <View style={[styles.viewRow, {alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-start',}]}>
                            <CheckBox
                                label=""
                                size={20}
                                checked={!this.state.isSmall}
                                onPress={this.handleSelectRadionButtonLarge}
                                uncheckedIconName="radio-button-unchecked"
                                checkedIconName="radio-button-checked"
                            />
                            <Text style={styles.textStandard} >Ich bin mindestens 1,70m</Text>
                        </View>
                        <Text style={styles.textStandard} >Diese Angabe benötigen wir, um ein Board in einem für dich gut erreichbarem Fach zu reservieren.</Text>
                        <View style={[styles.viewRow, {alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-start',}]}>
                            <CheckBox
                                label=""
                                size={30}
                                checked={this.state.isTermsChecked}
                                onPress={this.handlePressCheckedBox}
                            />
                            <Text style={styles.textStandardBold} >Ich habe die AGB gelesen</Text>
                        </View>
                    </View>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        {
                            (this.state.isTermsChecked === true) ? (
                            <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationRules()}>
                                <Text style={styles.textButtonPrimary} >WEITER</Text>
                            </TouchableOpacity>
                            ) : (
                            <View style={styles.viewButtonInactive}>
                                <Text style={styles.textButtonInactive} >WEITER</Text>
                            </View>
                            )
                        }
                    </View>
                </View>
            </View>
        )
    }
}