const React = require('react-native');
const { StyleSheet } = React;
import {
    backgroundColor,
    primaryColor,
    secondaryColor,
    primaryInvertedColor,
    inactiveColor,
    inactiveBackgroundColor,
    largeFontSize,
    standardFontSize,
    smallFontSize,
    standardBorderRadius,
    standardBorderWidth,
    separatorBorderWidth,
    standardMargin,
    standardMmarginHorizontal,
    standardMarginVertical,
    containerPaddingHorizontal,
    containerPaddingVertical,
    rowViewPaddingVertical,
    standardSpacerMarginVertical,
} from './../../../styles/common'

export default {
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: containerPaddingHorizontal,
        paddingVertical: containerPaddingVertical,
        backgroundColor: backgroundColor, //Debug
    },
    viewColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    viewRow: {
        flex: 1,
        flexDirection: 'row',
    },
    viewHeader: {
        //(flex: 1,
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: primaryColor,
    },
    viewBody: {
        flex: 1,
        flexDirection: 'column',
        //borderWidth: 1,
        //borderColor: "#0F0",
    },
    viewFooter: {
        //flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    viewSeparator: {
        borderBottomWidth: separatorBorderWidth,
        borderBottomColor: primaryColor,
        marginVertical: standardMargin,
    },
    viewBorder: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: primaryColor,
        marginVertical: standardMargin,
    },
    viewSpaceBetween: {
        flex: 1,
        justifyContent: "space-between",
    },
    viewIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
    },
    viewIconSmall: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 18,
    },
    mapView: {
        width: 400,
        height: 200,
        backgroundColor: 'red'
    },
    viewButtonPrimary: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: primaryColor,
        backgroundColor: primaryColor,
        alignSelf: 'stretch',
    },
    textButtonPrimary: {
        color: primaryInvertedColor,
        fontSize: largeFontSize,
        fontWeight: 'bold',
        marginVertical: standardMargin,
        textAlign: 'center',
    },
    viewButtonSecondary: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: primaryColor,
        backgroundColor: primaryInvertedColor,
        alignSelf: 'stretch',
    },
    textButtonSecondary: {
        color: primaryColor,
        fontSize: standardFontSize,
        fontWeight: 'bold',
        marginVertical: standardMargin,
        textAlign: 'center',
    },
    viewButtonInactive: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: inactiveColor,
        backgroundColor: inactiveBackgroundColor,
        alignSelf: 'stretch',
    },
    textButtonInactive: {
        color: inactiveColor,
        fontSize: largeFontSize,
        fontWeight: 'bold',
        marginVertical: standardMargin,
        textAlign: 'center',
    },
    textLargeBold: {
        fontSize: largeFontSize,
        color: primaryColor,
        fontWeight: 'bold',
    },
    textStandardBold: {
        fontSize: standardFontSize,
        color: primaryColor,
        fontWeight: 'bold',
    },
    textStandard: {
        fontSize: standardFontSize,
        color: primaryColor,
    },
    textSeparator: {
        fontSize: standardFontSize,
        color: primaryColor,
        fontWeight: 'bold',
    },
    marginSpacer: {
        marginTop: standardSpacerMarginVertical,
    },
    viewMargin: {
        margin: standardMargin,
    },
    textNoStationHeading: {
        color: inactiveColor,
        fontSize: largeFontSize,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textNoStation: {
        color: inactiveColor,
        fontSize: standardFontSize,
        marginVertical: 4,
        textAlign: 'center',
    },
};
