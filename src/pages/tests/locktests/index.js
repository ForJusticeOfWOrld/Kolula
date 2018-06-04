import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

const lockClosed = require('../../../images/icons/icon_lock_closed.png');
const lockOpen = require('../../../images/icons/icon_lock_open.png');

const api_host_live = "kolula.ddns.net:62157";
const api_host_debug = "kolula.ddns.net:62157";
const api_host_staging = "kolula.ddns.net:62157";
const dummy_host_value = "kolula.ddns.net:62157";
const api_path = "api/v1.0";

const api_dummy_user_token = "api/v1.0";
const use_api_dummy_user_token = false;
const debug_log_api = true;
const debug_log_api_level = true;

const dummyState = {
    "lock1": "1",
    "lock10": "1",
    "lock11": "1",
    "lock12": "1",
    "lock2": "1",
    "lock3": "1",
    "lock4": "1",
    "lock5": "1",
    "lock6": "1",
    "lock7": "1",
    "lock8": "1",
    "lock9": "1",
    "switch1": "1",
    "switch10": "1",
    "switch11": "1",
    "switch12": "1",
    "switch2": "1",
    "switch3": "1",
    "switch4": "1",
    "switch5": "1",
    "switch6": "1",
    "switch7": "1",
    "switch8": "1",
    "switch9": "1",
    "timestamp": "Wed, 23 May 2018 15:56:00.587894"
};

const lockObjectConst = {
    "action":"open_lock",
    "lock1":"open",
    "lock2":"open",
    "lock3":"open",
    "lock4":"open",
    "lock5":"open",
    "lock6":"open",
    "lock7":"open",
    "lock8":"open",
    "lock9":"open",
    "lock10":"open",
    "lock11":"open",
    "lock12":"open"
};

export default class MyReservationsOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            listViewDataReady: false,
            stateArray: [],
            fetchTries: 0,
        };
    }

    componentDidMount() {
        this.getState();
    }

    async fetchApi(fetchData) {
        // use a specific host for the apicall
        let fetch_api_host = api_host_live;
        switch(dummy_host_value) {
            case "debug":
                fetch_api_host = api_host_debug;
                break;
            case "staging":
                fetch_api_host = api_host_staging;
                break;
        }
        let api_url = 'http://' + fetch_api_host + '/' + api_path + '/' + fetchData.path;

        if (fetchData.hasOwnProperty("suffix") && fetchData.suffix !== ""){
            api_url += fetchData.suffix;
        }

        // put together the header
        let fetchHeader = {
            'Content-Type': 'application/json',
        };

        // if specific call need the JWT-token, add the authorization header
        if( fetchData.hasOwnProperty("authorization") && fetchData.authorization == true ) {
            if (use_api_dummy_user_token) {
                console.log('(api (fetchApi)) WARNING using debugheader from config.js');
                if (debug_log_api && debug_log_api_level > 1) {
                    console.log('(api (fetchApi)) added header: Authorization: = "Bearer "' + api_dummy_user_token);
                }
                fetchHeader["Authorization"] = "Bearer " + api_dummy_user_token;
            } else {
                let getStore = store.getState();
                if (getStore.hasOwnProperty("api") && getStore.api.hasOwnProperty("userToken") && getStore.api.userToken != '') {
                    if (debug_log_api && debug_log_api_level > 1) {
                        console.log('(api (fetchApi)) added header: Authorization: = "Bearer "' + getStore.api.userToken);
                    }
                    fetchHeader["Authorization"] = "Bearer " + getStore.api.userToken;
                } else {
                    console.log("ERROR no userToken -> login")
                }
            }
        }

        // add content-length to header if body is set
        if(fetchData.hasOwnProperty("body")) {
            let lengthTemp = fetchData.body + "";
            fetchHeader["Content-length"] = lengthTemp.length;
            if (debug_log_api && debug_log_api_level > 1) {
                console.log('(api (fetchApi)) added header' + lengthTemp.length);
            }
        }

        // debugoutput according to debuglevel
        if (debug_log_api) {
            console.log('(api (fetchApi)) url: ' + api_url);
            if (debug_log_api_level > 1) {
                console.log('(api (fetchApi)) fetchHeader:');
                console.log(fetchHeader);
                console.log('(api (fetchApi)) fetchData:');
                console.log(fetchData);
            }
        }

        // make the API call
        let response = await fetch(api_url, {
            method: fetchData.method,
            headers: fetchHeader,
            body: JSON.stringify(fetchData.body),
        });
        if (debug_log_api) {
            console.log('(api (fetchApi)) response:');
            console.log(response);
        }
        let body = await response.json();

        // debugoutput according to debuglevel
        if (debug_log_api) {
            console.log('(api (fetchApi)) body:');
            console.log(body);
        }
        /*
        if (debug_toast_api) {
            if (body.success) {
                Toast.showWithGravity( 'API call: ' + fetchData.method + ' ./' + fetchData.path + ' success', Toast.LONG, Toast.BOTTOM);
            } else {
                let errorToastData = "";
                if ( body.hasOwnProperty("data") && body.data.hasOwnProperty("code") ){
                    errorToastData += body.data.code;
                    if ( body.data.hasOwnProperty("message") ){
                        errorToastData += ": " + body.data.message;
                    }
                    1            }
                Toast.showWithGravity( 'API call: ' + fetchData.method + ' ./' + fetchData.path + ' error: ' + errorToastData, Toast.LONG, Toast.BOTTOM);
            }
        }
        */
        return body;
    }

    async makeArray( arrayToProcess ) {
        let stateDataArray = [];
        let finalArray = [];
        let lockStateArray = [];

        if ( Object.keys(arrayToProcess).length > 1) {
            Object.entries(arrayToProcess).map(function(key) {
                if (key[0].substring(0, 4) === "lock") {
                    stateDataArray.push({id: parseInt(key[0].substring(4)), lockName: key[0], lockState: parseInt(key[1]), type: key[0].substring(0, 4)});
                } else if (key[0].substring(0, 6) === "switch") {
                    stateDataArray.push({id: parseInt(key[0].substring(6)), switchName: key[0], switchState: parseInt(key[1]), type: key[0].substring(0, 6)});
                }
            });

            lockStateArray = stateDataArray.splice(0, Math.floor(stateDataArray.length / 2));

            for (let i1 = 0; i1 < lockStateArray.length; i1++) {
                for (let i2 = 0; i2 < stateDataArray.length; i2++) {
                    if (lockStateArray[i1].id == stateDataArray[i2].id) {
                        finalArray.push({"id":lockStateArray[i1].id, "lockName": lockStateArray[i1].lockName, "lockState": lockStateArray[i1].lockState, "switchName": stateDataArray[i2].switchName, "switchState": stateDataArray[i2].switchState});
                    }
                }
            }

            finalArray.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });

            console.log("makeArray(): finalArray sorted:");
            console.log(finalArray);

            if (finalArray.length > 0 ){
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(finalArray),
                    listViewDataReady: true,
                    stateArray: finalArray,
                });
                return finalArray;
            } else {
                console.log("makeArray(): finalArray was empty");
                return false;
            }
        } else {
            console.log("makeArray(): arrayToProcess not > 1");
            console.log(arrayToProcess);
            return false;
        }
    }

    async getState() {
        let stateFetchData = null;
        this.setState({
            listViewDataReady: false,
            stateArray: [],
        });

        let getStateData = {
            method: "GET",
            path: "get_state",
            authorization: false,
        };

        try {
            stateFetchData = await this.fetchApi(getStateData);
            console.log('getState(): fetched state data:');
            console.log(stateFetchData);
        } catch (error) {
            console.log('getState(): fetch error: ' + error.message);
            if (this.state.fetchTries < 11) {
                setTimeout(() => {
                    this.setState({
                        fetchTries: ( this.state.fetchTries + 1 ),
                    });
                    this.getState();

                }, 1500);
            }
            return false;
        }

        if ( stateFetchData !== null) {
            console.log('await this.fetchApi(getStateData) was successful:');
            console.log(stateFetchData);
            try {
                await this.makeArray(stateFetchData)
            } catch (error) {
                console.log('getState(): login user error: ' + error.message);
                return false;
            }
        } else {
            console.log('await this.fetchApi(getStateData) was not successful:');
        }
    }

    async setLock( lockData ) {
        let lockObject = lockObjectConst;
        let lockDataResponse = null;


        for (let i = 0; i < this.state.stateArray.length; i++) {

            if ( lockData.lockName === this.state.stateArray[i].lockName ) {
                lockObject[lockData.lockName] = lockData.switchState;
            } else if (lockObject.hasOwnProperty(this.state.stateArray[i].lockName)) {
                if ( this.state.stateArray[i].lockState === 1 ) {
                    lockObject[this.state.stateArray[i].lockName] = "close";
                } else {
                    lockObject[this.state.stateArray[i].lockName] = "open";
                }

            }
            if (this.state.stateArray.length === (i+1)) {
                let getLockData = {
                    method: "POST",
                    path: "open_lock",
                    authorization: false,
                    body: lockObject
                };
                try {
                    lockDataResponse = await this.fetchApi(getLockData);
                    console.log('api/actions/login(): fetched user data:');
                    console.log(lockDataResponse);
                } catch (error) {
                    console.log('api/actions/login(): login user error: ' + error.message);
                    return false;
                }
                if ( lockDataResponse !== null && Object.keys(lockDataResponse).length > 1) {
                    console.log('await this.fetchApi(getStateData) was successful:');
                    console.log(lockDataResponse);
                    this.setState({
                        listViewDataReady: false,
                    });
                    setTimeout(() => {
                        this.getState();
                    }, 2000);

                    return true;
                } else {
                    console.log('await this.fetchApi(getStateData) was not successful:');
                    return false;
                }
            }
        }
        console.log("lockObject:");
        console.log(lockObject);
    }

    renderReservations(lockStates) {
        return (
            <View style={[styles.viewBorder, {padding: 5}]}>
                <View style={[styles.viewColumn, {justifyContent: "space-between"}]}>
                    <Text style={styles.textStandardBold}>Schloss {lockStates.id}</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    {
                        ( lockStates.lockState === 1 ) ? (
                            <TouchableOpacity style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 140, justifyContent: "center"}]} onPress={()=> this.setLock( {lockName: lockStates.lockName, switchState: "open"} ) }>
                                <Text style={[styles.textStandardBold, {textAlign: "center", color: "#00a0a7"}]}>Schloss öffnen</Text>
                            </TouchableOpacity>
                        ) : ( lockStates.lockState === 0 ) ? (
                            <TouchableOpacity style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 140, justifyContent: "center"}]} onPress={()=> this.setLock( {lockName: lockStates.lockName, switchState: "close"} ) }>
                                <Text style={[styles.textStandardBold, {textAlign: "center", color: "#00a0a7"}]}>Schloss schließen</Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 140, justifyContent: "center"}]}>
                                <Text style={[styles.textStandardBold, {textAlign: "center", color: "#00a0a7"}]}>not clear</Text>
                            </View>
                        )
                    }
                    {
                        ( lockStates.lockState === 1 ) ? (
                            <View style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 70, justifyContent: "center", alignItems: "center", padding: 3}]}>
                                <Text style={[styles.textStandard, {textAlign: "center", color: "#00a0a7", fontSize: 14}]}>Schloss:</Text>
                                <Image source={lockClosed} style={{flex: 1}} resizeMode='contain' />
                            </View>
                        ) : ( lockStates.lockState === 0 ) ? (
                            <View style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 70, justifyContent: "center", alignItems: "center", padding: 3}]}>
                                <Text style={[styles.textStandard, {textAlign: "center", color: "#b2e3e5", fontSize: 14}]}>Schloss:</Text>
                                <Image source={lockOpen} style={{flex: 1}} resizeMode='contain' />
                            </View>
                        ) : (
                            <View style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 70, justifyContent: "center", alignItems: "center", padding: 3}]}>
                                <Text style={[styles.textStandardBold, {textAlign: "center", color: "#00a0a7", fontSize: 14}]}>not clear</Text>
                            </View>
                        )
                    }
                    {
                        ( lockStates.switchState === 1 ) ? (
                            <View style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 70, justifyContent: "center", alignItems: "center", padding: 3}]}>
                                <Text style={[styles.textStandard, {textAlign: "center", color: "#00a0a7", fontSize: 14}]}>Fach:</Text>
                                <Image source={lockClosed} style={{flex: 1}} resizeMode='contain' />
                            </View>
                        ) : ( lockStates.switchState === 0 ) ? (
                            <View style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 70, justifyContent: "center", alignItems: "center", padding: 3}]}>
                                <Text style={[styles.textStandard, {textAlign: "center", color: "#b2e3e5", fontSize: 14}]}>Fach:</Text>
                                <Image source={lockOpen} style={{flex: 1}} resizeMode='contain' />
                            </View>
                        ) : (
                            <View style={[styles.viewBorder, {flexDirection: "column", height: 45, width: 70, justifyContent: "center", alignItems: "center", padding: 3}]}>
                                <Text style={[styles.textStandardBold, {textAlign: "center", color: "#00a0a7", fontSize: 14}]}>not clear</Text>
                            </View>
                        )
                    }
                    </View>
                </View>
            </View>
        );
    }

    render () {
        if (this.state.listViewDataReady===false) {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.viewColumn}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.listViewDataReady}
                                        onRefresh={this.getState.bind(this)}
                                        tintColor={"#00b2b7"}
                                    />
                                }
                    >
                        <View style={[styles.viewSeparator, styles.marginSpacer]}>
                            <Text style={styles.textSeparator} >Daten werden geladen</Text><ActivityIndicator size="small" color="#00b2b7" />
                        </View>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.viewColumn}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={!this.state.listViewDataReady}
                                        onRefresh={this.getState.bind(this)}
                                        tintColor={"#00b2b7"}
                                    />
                                }
                    >
                        <View style={[styles.viewSeparator, styles.marginSpacer]}>
                            <Text style={styles.textSeparator} >Liste der Schlösser</Text>
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
}