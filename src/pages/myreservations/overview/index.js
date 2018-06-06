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
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

const dummyReservationNext = {
    "reservations": [
        {
            "id": 7,
            "location_name": "Scharmützelsee",
            "items": "1 x Aufblas SUP XL",
            "items_desc": "Ein Aufblas SUP der Größe XL",
            "time": "01.06.2018 11:30 - 12:00 Uhr",
            "location_street": "Parkallee 1, 15526 Bad Saarow",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Scharmützelsee ist ein See in Brandenburg. Er liegt zwischen Frankfurt (Oder) und Berlin, südlich von FürstenwaldeSpree.",
            "longitude": 14.027054,
            "latitude": 52.239662,
            "contingent_id": 0,
            "new": 1
        },
        {
            "id": 6,
            "location_name": "Hufeisensee",
            "items": "2 x Aufblas SUP XS",
            "items_desc": "Ein Aufblas SUP der Größe XS",
            "time": "02.06.2018 10:30 - 18:00 Uhr",
            "location_street": "Schkeuditzer Str. 70, 06116 Halle (Saale)",
            "location_transport": "Halle, Alfred-Schneider-Str",
            "location_desc": "Der Hufeisensee, ein Tagebaurestloch, ist der größte See im Stadtgebiet von Halle (Saale). Er liegt im östlichen Teil zwischen den Ortsteilen Büschdorf und Kanena. In der Gegend wurde 1832 erstmals Braunkohle abgebaut. 1926 fand man größere Vorkommen und es entstand der Tagebau zwischen den beiden Ortsteilen. Nachdem die Braunkohlevorkommen 1942 abgebaut waren, wurde bis zur Stilllegung des Tagebaus in den 1960er Jahren Kies gefördert.",
            "longitude": 12.022662,
            "latitude": 51.466134,
            "contingent_id": 0,
            "new": 1
        },
        {
            "id": 5,
            "location_name": "Hufeisensee",
            "items": "12 x Aufblas SUP S",
            "items_desc": "Ein Aufblas SUP der Größe S",
            "time": "22.07.2018 10:30 - 15:00 Uhr",
            "location_street": "Schkeuditzer Str. 70, 06116 Halle (Saale)",
            "location_transport": "Halle, Alfred-Schneider-Str",
            "location_desc": "Der Hufeisensee, ein Tagebaurestloch, ist der größte See im Stadtgebiet von Halle (Saale). Er liegt im östlichen Teil zwischen den Ortsteilen Büschdorf und Kanena. In der Gegend wurde 1832 erstmals Braunkohle abgebaut. 1926 fand man größere Vorkommen und es entstand der Tagebau zwischen den beiden Ortsteilen. Nachdem die Braunkohlevorkommen 1942 abgebaut waren, wurde bis zur Stilllegung des Tagebaus in den 1960er Jahren Kies gefördert.",
            "longitude": 12.022662,
            "latitude": 51.466134,
            "contingent_id": 0,
            "new": 1
        }
    ]
};

const dummyReservation = {
    "reservations": [
        {
            "id": 4,
            "location_name": "Scharmützelsee",
            "items": "3 x Aufblas SUP XL",
            "items_desc": "Ein Aufblas SUP der Größe XL",
            "time": "11.03.2018 11:00 - 13:00 Uhr",
            "location_street": "Parkallee 1, 15526 Bad Saarow",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Scharmützelsee ist ein See in Brandenburg. Er liegt zwischen Frankfurt (Oder) und Berlin, südlich von FürstenwaldeSpree.",
            "longitude": 14.027054,
            "latitude": 52.239662,
            "contingent_id": 0,
            "new": 0
        },
        {
            "id": 3,
            "location_name": "Scharmützelsee",
            "items": "13 x Aufblas SUP Standard",
            "items_desc": "Ein Aufblas SUP der Standard Größe",
            "time": "10.03.2018 12:00 - 15:00 Uhr",
            "location_street": "Parkallee 1, 15526 Bad Saarow",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Scharmützelsee ist ein See in Brandenburg. Er liegt zwischen Frankfurt (Oder) und Berlin, südlich von FürstenwaldeSpree.",
            "longitude": 14.027054,
            "latitude": 52.239662,
            "contingent_id": 0,
            "new": 0
        },
        {
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
            "new": 0
        },
        {
            "id": 1,
            "location_name": "Scharmützelsee",
            "items": "1 x Aufblas SUP XS",
            "items_desc": "Ein Aufblas SUP der Größe XS",
            "time": "11.02.2018 10:30 - 14:30 Uhr",
            "location_street": "Parkallee 1, 15526 Bad Saarow",
            "location_transport": "Bad Saarow, Silberberg",
            "location_desc": "Der Scharmützelsee ist ein See in Brandenburg. Er liegt zwischen Frankfurt (Oder) und Berlin, südlich von FürstenwaldeSpree.",
            "longitude": 14.027054,
            "latitude": 52.239662,
            "contingent_id": 0
        },
        {
            "id": 0,
            "location_name": "Hufeisensee",
            "items": "2 x Aufblas SUP XS",
            "items_desc": "Ein Aufblas SUP der Größe XS",
            "time": "02.06.2018 10:30 - 18:00 Uhr",
            "location_street": "Schkeuditzer Str. 70, 06116 Halle (Saale)",
            "location_transport": "Halle, Alfred-Schneider-Str",
            "location_desc": "Der Hufeisensee, ein Tagebaurestloch, ist der größte See im Stadtgebiet von Halle (Saale). Er liegt im östlichen Teil zwischen den Ortsteilen Büschdorf und Kanena. In der Gegend wurde 1832 erstmals Braunkohle abgebaut. 1926 fand man größere Vorkommen und es entstand der Tagebau zwischen den beiden Ortsteilen. Nachdem die Braunkohlevorkommen 1942 abgebaut waren, wurde bis zur Stilllegung des Tagebaus in den 1960er Jahren Kies gefördert.",
            "longitude": 12.022662,
            "latitude": 51.466134,
            "contingent_id": 0,
            "new": 0
        }
    ]
};

export default class MyReservationsOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSourceNext: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            station: false,
            bike: false,
            switchCharge: false,
        };
    }

    componentWillMount() {

        // debugdata
        this.setState({
            dataSourceNext: this.state.dataSource.cloneWithRows(dummyReservationNext.reservations),
            dataSource: this.state.dataSource.cloneWithRows(dummyReservation.reservations),
            reservations: dummyReservation.reservations,
        });
    }

    renderReservations(reservations) {
        return (
            <TouchableOpacity onPress={() => Actions.myReservationsReservation({ reservation: reservations })}>
                <View style={styles.viewBorder}>
                    <View style={styles.viewColumn}>
                        <Text style={styles.textStandardBold}>{reservations.location_name}</Text>
                        <Text style={styles.textStandard}>{reservations.items}</Text>
                        <Text style={styles.textStandard}>{reservations.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.viewColumn}>
                    <View style={[styles.viewSeparator, styles.marginSpacer]}>
                        <Text style={styles.textSeparator} >Bevorstehende Mieten</Text>
                    </View>
                    <ListView
                        dataSource={this.state.dataSourceNext}
                        renderRow={this.renderReservations.bind(this)}
                        style={styles.listView}
                        enableEmptySections={true}
                    />
                    <View style={[styles.viewSeparator, styles.marginSpacer]}>
                        <Text style={styles.textSeparator} >Vergangene Mieten</Text>
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