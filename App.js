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

//import Main from './pages/main/index';
import DrawerContent from './src/pages/drawer/index';

import Home from './src/pages/home/index';

import MyReservationsOverview from './src/pages/myreservations/overview/index';
import MyReservationsReservation from './src/pages/myreservations/reservation/index';
import MyReservationsCancel from './src/pages/myreservations/cancel/index';
import MyReservationsReschedule from './src/pages/myreservations/reschedule/index';

import ReservationBranches from './src/pages/reservation/branches/index';
import ReservationBranchDetail from './src/pages/reservation/branchDetail/index';
import ReservationCalendar from './src/pages/reservation/calendar/index';
import ReservationResource from './src/pages/reservation/resource/index';
import ReservationSummary from './src/pages/reservation/summary/index';
import ReservationPayment from './src/pages/reservation/payment/index';
import Paypal from './src/pages/reservation/paypal/index';
import ReservationRules from './src/pages/reservation/rules/index';
import ReservationConfirmation from './src/pages/reservation/confirmation/index';

import RentStart from './src/pages/rent/start/index';
import RentStatus from './src/pages/rent/status/index';

import RegisterEmail from './src/pages/register/email/index';
import RegisterAccount from './src/pages/register/account/index';

import AccountPersonalData from './src/pages/account/personalData/index';
import AccountEmailPassword from './src/pages/account/emailPassword/index';

import LockTests from './src/pages/tests/locktests/index';

import ConfirmBook from './src/pages/BookConfirm';

import Login from './src/pages/login/index';

import menuIcon from './src/images/others/menu_hamburger.png';

import TimeSelect from './src/pages/TimeSelect';
import BoardSelect from './src/pages/BoardSelect';

import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router leftButtonIconStyle={styles.leftButtonIconStyle} navigationBarStyle={styles.navStyle} titleStyle={styles.titleStyle}>
                    <Drawer
                        hideNavBar
                        key="drawer"
                        contentComponent={DrawerContent}
                        drawerImage={Icons.iconPerson}
                        drawerWidth={350}
                        drawerPosition="left"
                    >
                        <Scene key="root">
                            <Scene key="timeSelect" component={TimeSelect} title="Zeit Wählen" initial={false} />
                            <Scene key="boardSelect"  renderBackButton={()=>(null)} component={BoardSelect} title="Boards Wählen" />
                            <Scene key="home" component={Home} title="home" hideNavBar={true} />
                            <Scene key="myReservationsOverview" component={MyReservationsOverview} title="Reservierungen" initial={false} />
                            <Scene key="myReservationsReservation" component={MyReservationsReservation} title="Details" />
                            <Scene key="myReservationsCancel" component={MyReservationsCancel} title="Stornieren" />
                            <Scene key="myReservationsReschedule" component={MyReservationsReschedule} title="Verschieben" />
                            <Scene key="confirmBook" component={ConfirmBook} title="Bestätigen" initial={true} />
                            <Scene key="reservationBranch" component={ReservationBranches} title="Login" initial={false} />
                            <Scene key="reservationBranchDetail" component={ReservationBranchDetail} title="Station" initial={false} />
                            <Scene key="reservationCalendar" component={ReservationCalendar} title="SUP Mieten" initial={false} />
                            <Scene key="reservationResource" component={ReservationResource} title="Board wählen" initial={false} />
                            <Scene key="reservationSummary" component={ReservationSummary} title="Zusammenfassung" initial={false} />
                            <Scene key="reservationPayment" component={ReservationPayment} title="Bezahlen" initial={false} />
                            <Scene key="reservationRules" component={ReservationRules} title="Regeln und Hinweise" initial={false} />
                            <Scene key="reservationConfirmation" component={ReservationConfirmation} title="Bestätigung" initial={false} />
                            <Scene key="paypal" component={Paypal} title="Paypal" initial={false}/>
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
