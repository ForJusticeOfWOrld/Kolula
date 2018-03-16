import React, { Component } from 'react';
import { 
    Image, 
    View, 
    ScrollView, 
    Text, 
    TouchableOpacity, 
    AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

import styles from './styles';

const app_debug = 0;


class DrawerContent extends Component {

    static contextTypes = {
      drawer: PropTypes.object,
    }

    constructor(props) {
        super(props);
        this.state = {
            debug: 0,                   // debug switch
            force_testserver: false,    // force api to use testserver
            version: false,             // show version

        };

        this.currentRouteName = '';
    }


    componentWillReceiveProps(nextProps) {
        const routes = nextProps.navigation.state.routes[0];
        this.currentRouteName = routes.routes[routes.index].routeName;
        console.log('Drawer Routes : ', this.currentRouteName);
    }


    componentWillMount() {
        /*  debug section:
         *  actual: get debugstate from props if debugvalue is higher than in const app_debug else use app_debug level
         */
        // load debugvalues from const
        if (app_debug > 0) {
            this.setState({debug: app_debug});
            console.log('(more (componentWillMount)) no debuglevel by props. set debug to app_debug level: ' + app_debug);
        }
        
        // look if we got debug value from props
        if (this.props.hasOwnProperty('debug')) {
            // only load debug from props if its higher than this components debug const value!
            if (this.props.debug > app_debug) {
                this.setState({debug: this.props.debug});
                if (this.props.debug > 8) {
                    console.log('(more (componentWillMount)) got debug by props. set: ' + this.props.debug + ' instead of own debuglevel: ' + app_debug);
                }
            }
        }

        // look if we force api to use the testserver
        if (this.props.hasOwnProperty('force_testserver')) {
            if (this.props.force_testserver) {
                this.setState({force_testserver: true});
                if (this.state.debug > 8) {
                    console.log('(more (componentWillMount)) got force_testserver by props. Set force_testserver to true');
                }
            }
        }

        //load Version
        this.loadVersion();
    }


    /*  clearReservation()
     *  remove all reservationdata -> reservation and lock data
     */
    clearReservation = async () => {
	    try {
            await AsyncStorage.removeItem('ebike_reservation');
            await AsyncStorage.removeItem('iOS_id');
            console.log('(more (clearReservation)) reservation erased from disk. Send to home');
            Actions.home({ type: ActionConst.RESET });
	    } catch (error) {
            console.log('(more (clearReservation)) AsyncStorage error: ' + error.message);
	    }
    }


    /*  logoutUser()
     *  remove all userdata -> user, reservation and lock data
     */
    logoutUser = async () => {
        try {
            await AsyncStorage.removeItem('ebike_user');
            await AsyncStorage.removeItem('ebike_reservation');
            await AsyncStorage.removeItem('ebike_client');
            await AsyncStorage.removeItem('ebike_client_logo');
            await AsyncStorage.removeItem('iOS_id');
            await AsyncStorage.removeItem('ebike_app_data');
            console.log('(more (logoutUser)) User logged out and all data erased from disk. Send to home');
            // Actions.home({ type: ActionConst.RESET });
            Actions.login({type: ActionConst.RESET, force_testserver: this.state.force_testserver, debug: this.state.debug});            
        } catch (error) {
            console.log('(more (logoutUser)) AsyncStorage error: ' + error.message);
        }
    }


    loadVersion = async () => {
        let versionTemp = null
        try {
            versionTemp = await AsyncStorage.getItem('ebike_app_data');
        } catch (error) {
            if (this.state.debug) {
                console.log('(home (loadUser)) ebike_user AsyncStorage error: ');
                console.log(error);
            }
        }
        if (versionTemp !== null) {
            this.setState({version: JSON.parse(versionTemp)});
        }
    }


    onAgb() {
        if (this.currentRouteName === 'agb') {
            Actions.pop();
        } else if ((this.currentRouteName === 'contact') || (this.currentRouteName === 'legal')) {
            Actions.agb({type: ActionConst.REPLACE});
            return;
        }

        Actions.agb();
    }


    onContact() {
        if (this.currentRouteName === 'contact') {
            Actions.pop();
        } else if ((this.currentRouteName === 'agb') || (this.currentRouteName === 'legal')) {
            Actions.contact({type: ActionConst.REPLACE});
            return;
        }

        Actions.contact();
    }


    onLegal() {
        if (this.currentRouteName === 'legal') {
            Actions.pop();
        } else if ((this.currentRouteName === 'contact') || (this.currentRouteName === 'agb')) {
            Actions.legal({type: ActionConst.REPLACE});
            return;
        }

        Actions.legal();
    }


    render() {
        return (
            <View style={styles.container}>
                {/* <Image source={background} style={styles.containerImage} resizeMode={'cover'}> */}
                    <View style={styles.containerBlur}>
                        <View style={styles.viewHeader}>
                            <Text style={styles.textTitle}>{this.props.user && this.props.user.firstname} {this.props.user && this.props.user.lastname}</Text>
                        </View>
                        <View style={styles.line} />
                        <TouchableOpacity  style={styles.menuButtonView} onPress={() => this.onAgb()}>
                            <Text style={styles.menuButtonText}>Nutzungsbedingungen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.menuButtonView} onPress={() => this.onContact()}>
                            <Text style={styles.menuButtonText}>Kontakte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.menuButtonView} onPress={() => this.onLegal()}>
                            <Text style={styles.menuButtonText}>Impressum</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.menuButtonView} onPress={() => { this.logoutUser(); }}>
                            <Text style={styles.menuButtonText}>Ausloggen</Text>
                        </TouchableOpacity>

                        {
                            (this.state.version && this.state.version.Version !== '') && (
                                <View style={styles.versionContainer}>
                                    <Text style={styles.textVersion}>{this.props.multiLang.version}: {this.state.version.Version}</Text>
                                </View>
                            )
                        }
                    </View>
                {/* </Image> */}
            </View>
        );
    }
}


const mapStateToProps = (props) => ({
    user: props.auth.user,
    multiLang: props.multiLang,
});
  
export default connect(mapStateToProps, null)(DrawerContent);
  