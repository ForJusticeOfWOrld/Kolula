import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

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

const dummyReservationNext = [
    {"timeStart": "10:00", "timeEnd": "11:30"},
    {"timeStart": "11:00", "timeEnd": "12:30"},
    {"timeStart": "13:00", "timeEnd": "14:30"},
    {"timeStart": "14:00", "timeEnd": "15:30"},
    {"timeStart": "15:00", "timeEnd": "16:30"}
];

export default class ReservationResource extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            tariff: false,
            branch: false,
            date: false,
            time: false,
            items: 0,
        };
    }

    componentWillMount() {
        console.log("ReservationResource props:")
        console.log(this.props);
        // debugdata
        if (this.props.tariff && this.props.branch && this.props.date) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.branch.tariffs),
                tariff: this.props.tariff,
                branch: this.props.branch,
                date: this.props.date,
            });
        } else {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dummyReservationNext),
                tariff: {"time": 120, "desc": "2:00h", "price": 14.99},
                branch: dummyBranch,
                date: {"date": 22, "month": 11, "year": 2018},
            });
        }
    }

    addItem(){
        this.setState({
            items: (this.state.items + 1),
        });
    }

    subtractItem(){
        if (this.state.items > 0){
            this.setState({
                items: (this.state.items - 1),
            });
        } else {
            this.setState({
                items: 0,
            });
        }
    }

    renderReservations(timeWindow) {
        return (
            <View style={styles.viewSeparator}>
                <View style={styles.viewRow}>
                    <View style={{flex: 1, width: 100}}>
                        <Text style={styles.textStandardBold}>{timeWindow.timeStart + " - " + timeWindow.timeEnd}</Text>
                    </View>
                    <TouchableOpacity style={styles.viewButtonSecondary} onPress={() => Actions.reservationSummary({ tariff: this.state.tariff, branch: this.state.branch, date: this.state.date, timeWindow: timeWindow, items: this.state.items })}>
                        <Text style={styles.textButtonSecondary}>Auswählen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.viewColumn}>
                    <View style={[styles.viewRow, styles.marginSpacer, styles.viewSpaceBetween]}>
                        <View style={styles.viewColumn}>
                            <Text style={styles.textStandardBold} >1x Aufblas-SUP</Text>
                            <Text style={styles.textStandard} >Ein normales SUP.</Text>
                        </View>
                        <View style={[styles.viewRow, {width: 130, height: 40, justifyContent: 'flex-end',}]}>
                            <TouchableOpacity style={[styles.viewBorder, {width: 40, height: 40}]} onPress={() => this.subtractItem()}>
                                <Text style={styles.textButtonSecondary}>-</Text>
                            </TouchableOpacity>
                            <View style={[styles.viewBorder, {width: 40, height: 40}]}>
                                <Text style={styles.textButtonSecondary} >{this.state.items}</Text>
                            </View>
                            <TouchableOpacity style={[styles.viewBorder, {width: 40, height: 40}]} onPress={() => this.addItem()}>
                                <Text style={styles.textButtonSecondary}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.viewSeparator, styles.marginSpacer]}>
                        <Text style={styles.textSeparator} >Verfügbare Zeiten</Text>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderReservations.bind(this)}
                        style={styles.listView}
                        enableEmptySections={true}
                    />
                </ScrollView>
            </View>
        )
    }
}