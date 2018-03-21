import { AsyncStorage } from 'react-native';

import Intl from 'react-native-intl';
import locale from 'react-native-locale-detector';

import { 
    MULTI_LANG_LOADING,
    MULTI_LANG_LOAD_SUCCESS,
    MULTI_LANG_LOAD_ERROR,
} from './actionTypes';


export function loadMultiLang() {
    return async (dispatch) => {
        try {
            dispatch({ type: MULTI_LANG_LOADING });
            let multiLang = {};
            const _ = await(new Intl.Translation(locale)).getTranslator();

            // multiLang. = await _("");
            // general
            multiLang.error = await _("error");
            multiLang.tryAgain = await _("try_again");
            multiLang.welcome = await _("welcome");
            multiLang.version = await _("version");
            multiLang.errorNetworkRequestFailed = await _("error_network_request_failed");
            multiLang.errorCheckInternet = await _("error_check_internet");
            multiLang.working = await _("working");
            multiLang.login = await _("login");
            multiLang.logout = await _("logout");
            multiLang.cancel = await _("cancel");
            multiLang.ok = await _("ok");
            multiLang.yes = await _("yes");
            multiLang.no = await _("no");
            multiLang.password = await _("password");
            multiLang.email = await _("e-mail");
            multiLang.errorLogin = await _("error_login_failed");
            multiLang.skip = await _("skip");
            multiLang.errorNoConnectionToServer = await _("error_no_connection_to_server");
            multiLang.step = await _("step");
            multiLang.notAvailable = await _("not_available");
            multiLang.errorCouldNotSaveReservation = await _("error_could_not_save_reservation");
            multiLang.errorProblemWithReservation = await _("error_problem_with_reservation");
            multiLang.rentNow = await _("rent_now");
            multiLang.checkAgain = await _("check_again");
            multiLang.service = await _("service");
            multiLang.errorGeneralError = await _("error_general_error");
            multiLang.errorTryAgain = await _("error_try_again");
            multiLang.end = await _("end");
            multiLang.endNow = await _("end_now");

            // home
            multiLang.errorCouldNotLoadUser = await _("error_could_not_load_user");
            multiLang.errorCouldNotLoadClient = await _("error_could_not_load_client");
            multiLang.errorCouldNotLoadReservationServer = await _("error_could_not_load_reservation_server");
            multiLang.loadLocal = await _("load_local");
            multiLang.errorCouldNotLoadReservation = await _("error_could_not_load_reservation_");
            multiLang.rentBike = await _("rent_bike");

            // book\stationlist
            multiLang.selectStation = await _("select_station");
            multiLang.loadStationList = await _("load_station_list");

            // book\bikelist
            multiLang.selectedStation = await _("selected_station");
            multiLang.choseBike = await _("chose_bike");

            // book\bookbike
            multiLang.bikeNotAvailable = await _("bike_not_available");
            multiLang.chooseTariff = await _("choose_tariff");
            multiLang.bookbikeDisclaimer = await _("bookbike_disclaimer");
            multiLang.bookbikeTariffWarning = await _("bookbike_tariff_warning");

            // book\bikestatus
            multiLang.errorGpsError = await _("error_gps_error");
            multiLang.errorCheckGps = await _("error_check_gps");
            multiLang.errorNoGpsLock = await _("error_no_gps_lock");
            multiLang.errorGpsTimeout = await _("error_gps_timeout");
            multiLang.errorGpsErrorcode = await _("error_gps_errorcode");
            multiLang.errorActivateBluetooth = await _("error_activate_bluetooth");
            multiLang.errorNoBluetoothMac = await _("error_no_bluetooth_mac");
            multiLang.errorCouldNotConnectToLock = await _("error_could_not_connect_to_lock");
            multiLang.errorNotConnectedWithLock = await _("error_not_connected_with_lock");
            multiLang.closeLock = await _("close_lock");
            multiLang.openLock = await _("open_lock");
            multiLang.yourBike = await _("your_bike");
            multiLang.bikeOpen = await _("bike_open");
            multiLang.bikeClosed = await _("bike_closed");
            multiLang.chargeCable = await _("charge_cable");
            multiLang.lockRenewConnection = await _("lock_renew_connection");
            multiLang.lockConnectToLock = await _("lock_connect_to_lock");
            multiLang.lockChargeCableRemoved = await _("lock_charge_cable_removed");
            multiLang.returnStation = await _("return_station");
            multiLang.returnToStationTill = await _("return_to_station_till");
            multiLang.errorMustConnectedToLock = await _("error_must_connected_to_lock");
            multiLang.bikestatusWarning = await _("bikestatus_warning");

            // bike\bookend
            multiLang.messageBookendSuccessHeader = await _("message_bookend_success_header");
            multiLang.messageBookendSuccessMessage = await _("message_bookend_success_message");
            multiLang.checkStand = await _("check_stand");
            multiLang.checkChargingCable = await _("check_charging_cable");
            multiLang.checkDamage = await _("check_damage");
            multiLang.commentDescribeProblem = await _("comment_describe_problem");
            multiLang.commentMilage = await _("comment_milage");
            multiLang.commentHelpCheckDisplay = await _("comment_help_check_display");
            multiLang.commentBattery = await _("comment_battery");
            multiLang.reportProblem = await _("report_problem");
            
            dispatch({ type: MULTI_LANG_LOAD_SUCCESS, payload: multiLang });
            
        } catch (error) {
            dispatch({ type: MULTI_LANG_LOAD_ERROR, payload: {} });
        }
    }
}
