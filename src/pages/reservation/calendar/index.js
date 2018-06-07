import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
    DatePickerAndroid,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'

const options = [
    'Cancel', 
    'Apple', 
    <Text style={{color: 'yellow'}}>Banana</Text>,
    'Watermelon', 
    <Text style={{color: 'red'}}>Durian</Text>
  ]

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

const dummyTariffs = [
    { "time": 60, "desc": "1:00h", "price": 9.99 },
    { "time": 90, "desc": "1:30h", "price": 12.99 },
    { "time": 120, "desc": "2:00h", "price": 14.99 },
    { "time": 180, "desc": "3:00h", "price": 19.99 },
    { "time": 240, "desc": "4:00h", "price": 29.99 }
];

export default class ReservationCalendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            reservation: false,
            actualDate: false,
            actualDateString: "",
            isDatePickerVisible: false,
            isTimePickerVisible: false,
        };

    }
    showActionSheet = () => {
        this.ActionSheet.show()
      }
    _showDatePicker = () => this.setState({ isDatePickerVisible: true });
    _showTimePicker = () => this.setState({ isTimePickerVisible: true });

    _hideDatePicker = () => this.setState({ isDatePickerVisible: false });
    _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDatePicker();
    };
    _handleTimePicked = (time) => {
        console.log('A time has been picked: ', time);
        this._hideTimePicker();
    };
    componentWillMount() {
        console.log("ReservationCalendar props:")
        console.log(this.props);
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        // debugdata
        this.setState({
            actualDate: { "date": date, "month": month, "year": year },
            actualDateString: (date + '-' + month + '-' + year),
        });
        if (this.props.reservation.branch) {
            this.setState({
                reservation: this.props.reservation,
                dataSource: this.state.dataSource.cloneWithRows(this.props.reservation.branch.tariffs),
            });
        } else {
            this.setState({
                reservation: { branch: dummyBranch },
                dataSource: this.state.dataSource.cloneWithRows(dummyBranch.tariffs),
            });
        }
    }

    renderTariffs(tariffs) {
        return (
            <TouchableOpacity onPress={() => Actions.reservationResource({ reservation: { ...this.state.reservation, tariff: tariffs, date: this.state.actualDate } })}>
                <View style={[styles.viewButtonSecondary, styles.viewRow, { justifyContent: "space-between", marginTop: 8, }]}>
                    <Text style={[styles.textButtonSecondary, { flex: 1 }]}>{tariffs.desc}</Text>
                    <Text style={[styles.textButtonSecondary, { width: 80 }]}>{tariffs.price} €</Text>
                </View>
            </TouchableOpacity>
        );
    }

    async showPicker() {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date()
            });

            if (action == DatePickerAndroid.dateSetAction) {
                console.log(year + ' ' + month + ' ' + day);
                this.setState({
                    actualDate: { "date": day, "month": (month + 1), "year": year },
                    actualDateString: (day + '-' + (month + 1) + '-' + year),
                });
            }

        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.viewSpaceBetween}>
                    <View style={styles.viewBody}>
                        <View style={[styles.viewSeparator, styles.marginSpacer]}>
                            <Text style={styles.textSeparator} >Datum wählen</Text>
                        </View>
                        <TouchableOpacity style={styles.viewButtonSecondary} onPress={() => this.showPicker()}>
                            <Text style={styles.textButtonSecondary} >{this.state.actualDateString}</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={this._showDatePicker}>
                                <Text>Show DatePicker</Text>
                            </TouchableOpacity>
                            <DateTimePicker
                                isVisible={this.state.isDatePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDatePicker}
                                mode='date'
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={this._showTimePicker}>
                                <Text>Show TimePicker</Text>
                            </TouchableOpacity>
                            <DateTimePicker
                                isVisible={this.state.isTimePickerVisible}
                                onConfirm={this._handleTimePicked}
                                onCancel={this._hideTimePicker}
                                mode='time'
                            />
                        </View>
                    </View>
                    <View style={styles.viewFooter}>
                        <View style={[styles.viewSeparator, styles.marginSpacer, { alignSelf: 'stretch' }]}>
                            <Text style={[styles.textSeparator, { alignSelf: 'stretch', }]} >Tarif wählen</Text>
                        </View>
                        <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
                        <ActionSheet
                          ref={o => this.ActionSheet = o}
                          title={<Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>}
                          options={options}
                          cancelButtonIndex={0}
                          destructiveButtonIndex={4}
                          onPress={(index) => { /* do something */ }}
                        />
                        <View style={[styles.viewColumn, { alignSelf: 'stretch', }]}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderTariffs.bind(this)}
                                style={styles.viewColumn}
                                enableEmptySections={true}
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.bottomButton}>
                                <Text style={styles.bottomText}>WEITER</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}