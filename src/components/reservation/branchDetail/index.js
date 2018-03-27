import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import MapView from 'react-native-maps';
import styles from './styles';
import {
    primaryColor,
} from './../../../styles/common'
import { Actions } from "react-native-router-flux";

const ASPECT_RATIO = 4 / 2;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapDummy = require('../../../images/dummys/mapdummy.png');
const bannerDummy = require('../../../images/dummys/dummyBanner.png');

const dummyNearBranch = {
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
    "highlights": ["Highlight 1", "Highlight 2", "Highlight 3", "Highlight 4", "Highlight 5",],
};

export default class ReservationsBranch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            branch: false,
        };
    }

    componentWillMount() {
        if (this.props.branch) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.branch.highlights),
                branch: this.props.branch,
            });
        } else {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dummyNearBranch.highlights),
                branch: dummyNearBranch,
            });
        }
    }

    renderBranches(highlights) {
        return (
                <View style={styles.viewRow}>
                        <Text style={styles.textStandard}>* {highlights}</Text>
                </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.viewSpaceBetween}>
                    <View style={[styles.viewHeader]}>
                        <Image source={bannerDummy} style={{flex: 1, height: 100, minWidth: 200}} resizeMode={'cover'} />
                    </View>
                    <ScrollView style={styles.viewBody}>

                        <View style={[styles.viewRow, styles.marginSpacer, {justifyContent: "space-between"}]}>
                            <View style={styles.viewColumn}>
                            <Text style={styles.textStandardBold} >{this.state.branch.location_name}</Text>
                                <Text style={styles.textStandard} >{this.state.branch.location_street}</Text>
                                <Text style={styles.textStandard} >{this.state.branch.distance} km entfernt</Text>
                            </View>
                            <View style={{flexDirection: 'row', width: 60}}>
                                <View style={styles.viewColumn}>
                                    <View style={styles.viewIconSmall}>
                                        <Icon name="tint" size={16} color={primaryColor} />
                                    </View>
                                    <Text style={styles.textStandard} >{this.state.branch.tempWater}°</Text>
                                </View>
                                <View style={styles.viewColumn}>
                                    <View style={styles.viewIconSmall}>
                                        {
                                            this.state.branch.weather === "sunny" ? (
                                                <Icon name="sun-o" size={16} color={primaryColor} />
                                            ) : (this.state.branch.weather === "cloudy") ? (
                                                <Icon name="cloud" size={16} color={primaryColor} />
                                            ) : (this.state.branch.weather === "rainy") ? (
                                                <Icon name="mixcloud" size={16} color={primaryColor} />
                                            ) : (
                                                <Icon name="sun-o" size={16} color={primaryColor} />
                                            )
                                        }
                                    </View>
                                    <Text style={styles.textStandard} >{this.state.branch.tempAir}°</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewColumn}>
                            <View style={[styles.viewSeparator, styles.marginSpacer]}>
                                <Text style={styles.textSeparator} >Highlights</Text>
                            </View>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderBranches.bind(this)}
                                style={styles.listView}
                                enableEmptySections={true}
                            />
                        </View>
                        <View style={[styles.viewMap, styles.marginSpacer]}>
                            <Image source={mapDummy} style={{flex: 1, height: undefined, width: undefined, minHeight: 150}} resizeMode={'cover'} />
                        </View>
                        <Text style={styles.textStandardBold} >{this.state.branch.location_name}</Text>
                        <Text style={styles.textStandard} >{this.state.branch.location_street}</Text>
                        <View style={styles.viewRow}>
                            <View style={styles.viewIconSmall}>
                                <Icon name="info-circle" size={16} color={primaryColor} />
                            </View>
                            <Text style={styles.textStandard} >{this.state.branch.location_transport}</Text>
                        </View>

                    </ScrollView>
                    <View style={[styles.viewFooter, {marginTop: 8}]}>
                        <TouchableOpacity style={styles.viewButtonPrimary} onPress={() => Actions.reservationsCalendar()}>
                            <Text style={styles.textButtonPrimary} >SUP MIETEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}