import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native'
import styles from './styles';
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

export default class MyReservationsOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            station: false,
            bike: false,
            switchCharge: false,
        };
    }

    componentDidMount() {
        // check if props else get data again?
        if (this.props.hasOwnProperty('station')) {
            this.setState({ station: this.props.station });
        } else {
            this.setState({ station: mockStation });
        }
        if (this.props.hasOwnProperty('bike')) {
            this.setState({ bike: this.props.bike });
        } else {
            this.setState({ bike: mockBike });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewRow}>
                    <View style={styles.viewSeparator}>
                        <Text style={styles.textSeparator} >Bevorstehende Mieten</Text>
                    </View>
                    <View style={styles.viewBorder}>
                        <Text style={styles.textSeparator} >Bevorstehende Mieten</Text>
                    </View>
                    <View style={styles.viewSeparator}>
                        <Text style={styles.textSeparator} >Vergangene Mieten</Text>
                    </View>
                    <View style={styles.viewBorder}>
                        <Text style={styles.textSeparator} >Bevorstehende Mieten</Text>
                    </View>
                </View>
            </View>
        )
    }
}