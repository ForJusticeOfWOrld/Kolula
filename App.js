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

import ReservationsBranches from './src/components/reservation/branches/index';
import ReservationsBranchDetail from './src/components/reservation/branchDetail/index';
import ReservationsCalendar from './src/components/reservation/calendar/index';
import ReservationsResource from './src/components/reservation/resource/index';
import ReservationsSummary from './src/components/reservation/summary/index';

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

                            <Scene key="reservationsBranch" component={ReservationsBranches} title="Stationen" initial={true} />
                            <Scene key="reservationsBranchDetail" component={ReservationsBranchDetail} title="Station" initial={false} />
                            <Scene key="reservationsCalendar" component={ReservationsCalendar} title="SUP Mieten" initial={false} />
                            <Scene key="reservationsResource" component={ReservationsResource} title="Board wählen" initial={false} />
                            <Scene key="reservationsSummary" component={ReservationsSummary} title="Zusammenfassung" initial={false} />

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
