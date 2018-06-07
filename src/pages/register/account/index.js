import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
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
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

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
    "tariffs": [{ "time": 60, "desc": "1:00h", "price": 9.99 }, { "time": 90, "desc": "1:30h", "price": 12.99 }, { "time": 120, "desc": "2:00h", "price": 14.99 }, { "time": 180, "desc": "3:00h", "price": 19.99 }, { "time": 240, "desc": "4:00h", "price": 29.99 }],
};

export default class RegisterAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: { email: "", password: "", surname: "", name: "", postCode: "", place: "", street: "", isSmall: true },
            isTermsChecked: true,
            reservation: false,
            apiCallWorking: false,
            debug: false
        };
    }

    handlePressCheckedBox = (checked) => {
        this.setState({
            isTermsChecked: checked,
        });
    };

    handleSelectRadioButtonSmall = (checked) => {
        this.setState({
            user: { ...this.state.user, isSmall: true }
        });
    };

    handleSelectRadioButtonLarge = (checked) => {
        this.setState({
            user: { ...this.state.user, isSmall: false }
        });
    };

    componentWillMount() {
        // debugdata
        console.log("RegisterAccount props:")
        console.log(this.props);
        if (this.props.reservation && this.props.user) {
            this.setState({
                reservation: this.props.reservation,
                user: this.props.user,
            });
        } else {
            this.setState({
                reservation: { tariff: { "time": 120, "desc": "2:00h", "price": 14.99 }, branch: dummyBranch, date: { "date": 22, "month": 11, "year": 2018 }, timeWindow: { "timeStart": "10:00", "timeEnd": "11:30" }, items: 5 },
                user: { email: "debugdaten@email.com" }
            });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={[styles.viewBody, styles.viewEmail]}>
                        <Text style={styles.textLargeBold} >Login Daten</Text>
                        <View style={styles.borderWrapper}>
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor="#9b9b9b"
                                    placeholder={"EMail"}
                                    defaultValue={this.state.user.email}
                                    underlineColorAndroid="transparent"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={email => this.setState({ user: { ...this.state.user, email: email } })}
                                />
                            </View>
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor="#9b9b9b"
                                    placeholder={"Passwort"}
                                    underlineColorAndroid="transparent"
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    secureTextEntry
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={password => this.setState({ user: { ...this.state.user, password: password } })}
                                />
                            </View>
                        </View>
                        <Text style={styles.textLargeBold} >Persönliche Daten</Text>
                        <View style={styles.borderWrapper}>
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor="#9b9b9b"
                                    placeholder={"Vor -und Nachname *"}
                                    underlineColorAndroid="transparent"
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={surname => this.setState({ user: { ...this.state.user, surname: surname } })}
                                />
                            </View>
                        </View>
                        <View style={styles.borderWrapper}>
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor="#9b9b9b"
                                    placeholder={"Straße und Hausnummer *"}
                                    underlineColorAndroid="transparent"
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={name => this.setState({ user: { ...this.state.user, name: name } })}
                                />
                            </View>
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor="#9b9b9b"
                                    placeholder={"Adresszusatz"}
                                    underlineColorAndroid="transparent"
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={street => this.setState({ user: { ...this.state.user, street: street } })}
                                />
                            </View>
                            <View style={[styles.viewRow, { flex: 0 }]}>
                                <View style={[styles.viewInput, { width: 100, alignSelf: 'auto' }]}>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholderTextColor="#9b9b9b"
                                        placeholder={"Postleitzahl *"}
                                        underlineColorAndroid="transparent"
                                        keyboardType="numeric"
                                        autoCapitalize="none"
                                        returnKeyType="next"
                                        editable={!this.state.apiCallWorking}
                                        onChangeText={postCode => this.setState({ user: { ...this.state.user, postCode: postCode } })}
                                    />
                                </View>
                                <View style={[styles.viewInput, { marginLeft: 4, flex: 1 }]}>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholderTextColor="#9b9b9b"
                                        placeholder={"Stadt *"}
                                        underlineColorAndroid="transparent"
                                        keyboardType="default"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        returnKeyType="next"
                                        editable={!this.state.apiCallWorking}
                                        onChangeText={place => this.setState({ user: { ...this.state.user, place: place } })}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.borderWrapper}>
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor="#9b9b9b"
                                    placeholder={"Vor -und Nachname *"}
                                    underlineColorAndroid="transparent"
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={surname => this.setState({ user: { ...this.state.user, surname: surname } })}
                                />
                            </View>
                            <CheckBox
                                label="lch bin über 18 Jahre alt *"
                                size={20}
                                checked={this.state.user.isSmall}
                                onPress={this.handleSelectRadioButtonSmall}
                                uncheckedIconName="radio-button-unchecked"
                                checkedIconName="radio-button-checked"
                            />
                        </View>
                        <Text style={styles.textLargeBold} >Körpergröße</Text>
                        <View style={styles.borderWrapper}>
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholderTextColor="#9b9b9b"
                                    placeholder={"Vor -und Nachname *"}
                                    underlineColorAndroid="transparent"
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={surname => this.setState({ user: { ...this.state.user, surname: surname } })}
                                />
                            </View>
                            <Text style={styles.textStandard} >Diese Angabe benötigen wir, um ein Board in einem für dich gut erreichbarem Fach zu reservieren. Falls dies nicht möglich sein sollte, bitten wir dies zu entschuldigen.</Text>
                        </View>
                        <View style={styles.borderWrapper}>
                            <View style={[styles.viewRow, { alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-start', }]}>
                                <CheckBox
                                    label=""
                                    size={20}
                                    checked={this.state.user.isSmall}
                                    onPress={this.handleSelectRadioButtonSmall}
                                    uncheckedIconName="radio-button-unchecked"
                                    checkedIconName="radio-button-checked"
                                />
                                <Text style={styles.textStandard} >Ich habe die AGB gelesen</Text>
                            </View>
                            <View style={[styles.viewRow, { alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-start', }]}>
                                <CheckBox
                                    label=""
                                    size={20}
                                    checked={!this.state.user.isSmall}
                                    onPress={this.handleSelectRadioButtonLarge}
                                    uncheckedIconName="radio-button-unchecked"
                                    checkedIconName="radio-button-checked"
                                />
                                <Text style={styles.textStandard} >Ich akzeptiere die Datenschutzerklärung</Text>
                            </View>
                        </View>
                        {/* <View style={[styles.viewRow, { alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-start', }]}>
                            <CheckBox
                                label=""
                                size={30}
                                checked={this.state.isTermsChecked}
                                onPress={this.handlePressCheckedBox}
                            />
                            <Text style={styles.textStandardBold} >Ich habe die AGB gelesen</Text>
                        </View> */}
                    </View>
                    <View style={[styles.viewFooter, { marginTop: 8 }]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationPayment({ reservation: this.state.reservation, user: this.state.user })}>
                            <Text style={styles.textButtonPrimary} >ACCOUNT ERSTELLEN</Text>
                        </TouchableOpacity>
                        {/* {
                            (this.state.isTermsChecked === true) ? (
                                <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationPayment({ reservation: this.state.reservation, user: this.state.user })}>
                                    <Text style={styles.textButtonPrimary} >ACCOUNT ERSTELLEN</Text>
                                </TouchableOpacity>
                            ) : (this.state.debug === true) ? (
                                <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => console.log(this.state)}>
                                    <Text style={styles.textButtonPrimary} >ACCOUNT ERSTELLEN</Text>
                                </TouchableOpacity>
                            ) : (
                                        <View style={styles.viewButtonInactive}>
                                            <Text style={styles.textButtonInactive} >ACCOUNT ERSTELLEN</Text>
                                        </View>
                                    )
                        } */}
                    </View>
                </View>
            </ScrollView>
        )
    }
}