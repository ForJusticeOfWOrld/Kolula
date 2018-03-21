import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    ActivityIndicator,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard,
    Alert,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as commonStyles from '../../common/commonStyles';
import * as loginActions from './actions';
import styles from './styles';

import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    NETWORK_ERROR,
} from './actionTypes';
  
// background image
const background = require('../../images/background/bike_intro_background.png');
// logos
// const logoEbike = require('../../images/logos/ebike_logo_quer.png');

// debug const, for values check home component
const app_debug = 0;


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            debug: 0,                       // debugswitch (values see homescreen)
            force_testserver: false,        // force api to use testserver
            name: '',                       // state for username inputfield
            // user: false,                    // Userdata
            // client: false,                  // Clientdata
            // logo: false,                    // Clientlogo
            password: '',                   // state for password inputfield
            error: false,                   // show errormessage if error occured
            switchSave: false,              // should userdate be stored on devise?
            apiCallWorking: false,           // is there an active API-call? if true hide button/show activityindicator
        };
    }


    componentWillMount() {
        /*  debug section:
         *  actual: get debugstate from props if debugvalue is higher than in const app_debug else use app_debug level
         */
        // look if we got debug value from props
        if (this.props.hasOwnProperty('debug')) {
            // only load debug from props if its higher than this components debug const value!
            if (this.props.debug > app_debug) {
                this.setState({debug: this.props.debug});
                if (this.props.debug > 8) {
                    console.log('(login (componentWillMount)) got debug by props. set: ' + this.props.debug + ' instead of own debuglevel: ' + app_debug);
                }
            }
        } else if (app_debug) {
            this.setState({debug: app_debug});
            if (app_debug > 8) {
                console.log('(login (componentWillMount)) got no debug by props. set deug to own debuglevel: ' + app_debug);
            }
        }

        // look if we force api to use the testserver
        if (this.props.hasOwnProperty('force_testserver')) {
            if (this.props.force_testserver) {
                this.setState({force_testserver: true});
                if (this.state.debug > 8) {
                    console.log('(login (componentWillMount)) got force_testserver by props. Set force_testserver to true');
                }
            }
        }

        // debug has to set on initial state to take effect in componentWillMount
        if (this.state.debug > 8) {
            console.log('(login (componentWillMount)) props:');
            console.log(this.props);
        }
    }


    componentDidMount() {
        // add event handler for cleaning up
        //addEventListener('beforeunload', this.componentCleanup);

        this._isMounted = true;
        // print out state after 5 seconds
        if (this.state.debug > 5) {
            // debug: check states after giving everything some time to write them
            setTimeout(() => {
                console.log('(login (componentDidMount)) states:');
                console.log(this.state);
            }, 5000);
        }
    }


    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps : ", nextProps);
        if ((nextProps.status != this.props.status) && (nextProps.status == LOGIN_REQUEST)) {
            this._isMounted && this.setState({apiCallWorking: true});            
        } else if ((nextProps.status != this.props.status) && (nextProps.status == LOGIN_SUCCESS)) {
            this._isMounted && this.setState({apiCallWorking: false});            
            Keyboard.dismiss();
            Actions.main();
            // Actions.home({user: userdata.result.User, client: userdata.result.Client, logo: userdata.result.Logo.ClientsSharingLogo.base64_logo, force_testserver: this.state.force_testserver, debug: this.state.debug});            
        } else if ((nextProps.status != this.props.status) && (nextProps.status == LOGIN_ERROR)) {
            this._isMounted && this.setState({
                error: true, 
                apiCallWorking: false
            });
        } else if ((nextProps.status != this.props.status) && (nextProps.status == NETWORK_ERROR)) {
            this._isMounted && this.setState({apiCallWorking: false});            
            if (error.message === "Network request failed") {
                Alert.alert(
                    this.props.multiLang.errorNetwork,
                    this.props.multiLang.errorCheckInternet,
                );
            }
        }
    }


    componentWillUnmount() {
        this._isMounted = false;
        this.componentCleanup();
        //removeEventListener('beforeunload', this.componentCleanup); // remove the event handler for normal unmounting
    }


    componentCleanup() {
        // kill all timers and disconnect BLE before unload of component
        clearTimeout();
        clearInterval();
        setTimeout(() => {
            console.log('(login (componentCleanup)) UNMOUNTED');
        }, 100);
    }


    checkLogin = async () => {
        const username = this.state.name;
        const password = this.state.password;

        if ((username === '') || (password === '')) {
            return;
        }

        this.props.authActions.login(username, password, this.state.force_testserver, this.state.debug);

        return;
    };

    
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    

    render() {
        return (
            <View style={styles.container}>
                 <ImageBackground source={background} style={styles.containerImage} resizeMode={'cover'}>
                    <View style={styles.viewRow}>
                        <View style={styles.viewHeader}>
                            {/* <View style={styles.viewLogo}>
                                <Image source={logoEbike} style={styles.imageLogo} resizeMode={'contain'} />
                            </View> */}
                        </View>
                        <KeyboardAvoidingView behavior='padding' style={styles.viewBody}>
                            <View style={styles.errorView}>
                                { 
                                    this.state.error ? (
                                        <Text style={styles.errorText}>{this.props.multiLang.errorLogin}</Text>
                                    ) : null
                                }
                            </View>
                            <View style={styles.itemsBG}>
                                <TextInput
                                    ref={(o) => (this.email = o)}
                                    style={styles.inputText}
                                    placeholderTextColor={commonStyles.moreDarkGreyColor2}
                                    placeholder={this.props.multiLang.email}
                                    underlineColorAndroid="transparent"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    editable={!this.state.apiCallWorking}
                                    onChangeText={name => this.setState({name})}
                                    onSubmitEditing={() => this.password.focus()}
                                 />
                            </View>
                            <View style={styles.itemsBG}>
                                <TextInput
                                    ref={(o) => (this.password = o)}
                                    style={styles.inputText}
                                    placeholderTextColor={commonStyles.moreDarkGreyColor1}
                                    placeholder={this.props.multiLang.password}
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="go"
                                    secureTextEntry
                                    editable={!this.props.apiCallWorking}
                                    onChangeText={password => this.setState({password})}
                                    onSubmitEditing={() => this.checkLogin()}
                                 />
                            </View>
                            {/*
                            <View style={styles.itemsBG}>
                                <View style={styles.checkBoxBG}>
                                    <CheckBox
                                        size={26}
                                        color={commonStyles.moreDarkGreyColor1}
                                        style={styles.checkBox}
                                        checked={this.state.switchSave}
                                        onPress={()=>this.setState({switchSave: !this.state.switchSave})}
                                    />
                                    <Text style={styles.checkBoxText}>Immer angemeldet bleiben</Text>
                                </View>
                            </View>
                            */}
                            { 
                                (this.state.apiCallWorking === false) ? (
                                    <TouchableOpacity onPress={() => this.checkLogin()}>
                                        <View style={styles.loginButtonView}>
                                            <Text style={styles.loginButtonText}>{this.props.multiLang.login}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ) : (
                                    <View style={styles.loginButtonViewInactive}>
                                        <ActivityIndicator style={{height: 30}} size="large" color={commonStyles.darkGreyColor} />
                                        <Text style={styles.loginButtonTextInactive}>{this.props.multiLang.working}</Text>
                                    </View>
                                )
                            }
                        </KeyboardAvoidingView>
                        <View style={styles.viewBottom} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


const mapStateToProps = (props) => ({
    status: props.auth.status,
    multiLang: props.multiLang,
});

const mapDispatchToProps = (dispatch) => ({
    authActions: bindActionCreators(
        loginActions,
        dispatch
    ),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
  