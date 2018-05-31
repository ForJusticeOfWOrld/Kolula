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

import Home from './src/components/home/index';

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

import RentStart from './src/components/rent/start/index';
import RentStatus from './src/components/rent/status/index';

import RegisterEmail from './src/components/register/email/index';
import RegisterAccount from './src/components/register/account/index';

import AccountPersonalData from './src/components/account/personalData/index';
import AccountEmailPassword from './src/components/account/emailPassword/index';

import LockTests from './src/components/tests/locktests/index';

import Login from './src/components/login/index';

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
                            <Scene key="home" component={Home} title="home" hideNavBar={true} initial={true} />
                            <Scene key="myReservationsOverview" component={MyReservationsOverview} title="Reservierungen" initial={false} />
                            <Scene key="myReservationsReservation" component={MyReservationsReservation} title="Details" />
                            <Scene key="myReservationsCancel" component={MyReservationsCancel} title="Stornieren" />
                            <Scene key="myReservationsReschedule" component={MyReservationsReschedule} title="Verschieben" />

                            <Scene key="reservationBranch" component={ReservationBranches} title="Stationen" initial={false} />
                            <Scene key="reservationBranchDetail" component={ReservationBranchDetail} title="Station" initial={false} />
                            <Scene key="reservationCalendar" component={ReservationCalendar} title="SUP Mieten" initial={false} />
                            <Scene key="reservationResource" component={ReservationResource} title="Board wählen" initial={false} />
                            <Scene key="reservationSummary" component={ReservationSummary} title="Zusammenfassung" initial={false} />
                            <Scene key="reservationPayment" component={ReservationPayment} title="Bezahlen" initial={false} />
                            <Scene key="reservationRules" component={ReservationRules} title="Regeln und Hinweise" initial={false} />
                            <Scene key="reservationConfirmation" component={ReservationConfirmation} title="Bestätigung" initial={false} />

                            <Scene key="rentStart" component={RentStart} title="Miete starten" initial={false} />
                            <Scene key="rentStatus" component={RentStatus} title="Mietstatus" initial={false} />


                            <Scene key="registerEmail" component={RegisterEmail} title="E-Mail" initial={false} />
                            <Scene key="registerAccount" component={RegisterAccount} title="Account erstellen" initial={false} />

                            <Scene key="accountPersonalData" component={AccountPersonalData} title="Persönliche Daten" initial={false} />
                            <Scene key="accountEmailPassword" component={AccountEmailPassword} title="E-Mail und Passwort" initial={false} />

                            <Scene key="lockTests" component={LockTests} title="Schloss Test" initial={false} />

                            <Scene key="login" component={Login} title="Login" initial={false} />
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
        backgroundColor: '#00b5ba',
        height: (Platform.OS === 'ios') ? 64 : 48,
    },
    titleStyle: {
        color: '#000',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'normal',
    },
});
