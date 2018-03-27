/**
 * Ebike Shariung App
 * https://github.com/facebook/react-native
 * Gunter Sachse
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Router, Scene, ActionConst, Drawer } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import store from './src/store/store';

//import Main from './components/main/index';
import DrawerContent from './src/components/drawer/index';

import MyReservationsOverview from './src/components/myreservations/overview/index';
import MyReservationsReservation from './src/components/myreservations/reservation/index';
import MyReservationsCancel from './src/components/myreservations/cancel/index';
import MyReservationsReschedule from './src/components/myreservations/reschedule/index';

import ReservationBranches from './src/components/reservation/branches/index';
import ReservationBranchDetail from './src/components/reservation/branchDetail/index';
import ReservationCalendar from './src/components/reservation/calendar/index';
import ReservationResource from './src/components/reservation/resource/index';
import ReservationSummary from './src/components/reservation/summary/index';
import ReservationPayment from './src/components/reservation/payment/index';
import ReservationRules from './src/components/reservation/rules/index';
import ReservationConfirmation from './src/components/reservation/confirmation/index';

import RegisterEmail from './src/components/register/email/index';
import RegisterAccount from './src/components/register/account/index';

import menuIcon from './src/images/others/menu_hamburger.png';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router leftButtonIconStyle={styles.leftButtonIconStyle} navigationBarStyle={styles.navStyle} titleStyle={styles.titleStyle}>
                    <Drawer
                        hideNavBar
                        key="drawer"
                        contentComponent={DrawerContent}
                        drawerImage={menuIcon}
                        drawerWidth={350}
                        drawerPosition='right'
                    >
                        <Scene key="root">

                            <Scene key="myReservationsOverview" component={MyReservationsOverview} title="Reservierungen" />
                            <Scene key="myReservationsReservation" component={MyReservationsReservation} title="Details" />
                            <Scene key="myReservationsCancel" component={MyReservationsCancel} title="Stornieren" />
                            <Scene key="myReservationsReschedule" component={MyReservationsReschedule} title="Verschieben" />

                            <Scene key="reservationBranch" component={ReservationBranches} title="Stationen" initial={false} />
                            <Scene key="reservationBranchDetail" component={ReservationBranchDetail} title="Station" initial={false} />
                            <Scene key="reservationCalendar" component={ReservationCalendar} title="SUP Mieten" initial={false} />
                            <Scene key="reservationResource" component={ReservationResource} title="Board wählen" initial={false} />
                            <Scene key="reservationSummary" component={ReservationSummary} title="Zusammenfassung" initial={false} />
                            <Scene key="reservationPayment" component={ReservationPayment} title="Bezahlen" initial={false} />
                            <Scene key="reservationRules" component={ReservationRules} title="Regeln und Hinweise" initial={true} />
                            <Scene key="reservationConfirmation" component={ReservationConfirmation} title="Bestätigung" initial={false} />

                            <Scene key="registerEmail" component={RegisterEmail} title="E-Mail" initial={false} />
                            <Scene key="registerAccount" component={RegisterAccount} title="Account erstellen" initial={false} />

                            {/*
                            <Scene key="TestLinkaAPI" component={TestLinkaAPI} />
                            <Scene key="main" component={Main} type={ActionConst.RESET} />
                            <Scene key="home" component={Home} title="Home" />

                            <Scene key="login" component={Login} hideNavBar={true} title="Login" />
                            <Scene key="intro" component={Intro} hideNavBar={true} title="Tutorial" />
                            <Scene key="help" component={Help} title="Hilfe" />
                            <Scene key="moremenu" component={MoreMenu} title="Mehr" />
                            <Scene key="agb" component={AGB} title="Nutzungsbedingungen" />
                            <Scene key="contact" component={Contact} title="Kontakte" />
                            <Scene key="user" component={User} title="Nutzer" />
                            <Scene key="legal" component={Legal} title="Impressum" />

                            <Scene key="stationList" component={StationList} title="Stationen" />
                            <Scene key="stationMap" component={StationMap} title="Stationen" />
                            <Scene key="bikeList" component={BikeList} title="Bikes" />
                            <Scene key="bookBike" component={BookBike} title="Buchen" />

                            <Scene key="bikeStatus" component={BikeStatus} title="Mein Bike" />
                            <Scene key="bookEnd" component={BookEnd} title="Beenden" />
                            <Scene key="noBook" component={NoBook} title="Buchung" />

                            <Scene key="async" component={AsyncTest} title="AsyncStorage Test" />
                            <Scene key="ble" component={BLE} title="BLE Test" />
                            <Scene key="geo" component={Geo} title="GPS Test" />
                            <Scene key="map" component={Map} title="Map Test" /> */}
                        </Scene>
                    </Drawer>
                </Router>
            </Provider>
        )
    }
}


const styles = StyleSheet.create({
    leftButtonIconStyle: {
        tintColor: '#000',
    },
    navStyle: {
        backgroundColor: '#fff',
        height: (Platform.OS === 'ios') ? 64 : 48,
    },
    titleStyle: {
        color: '#000',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'normal',
    },
});
