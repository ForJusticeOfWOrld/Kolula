const React = require('react-native');
const { StyleSheet } = React;
import {
    primaryBackgroundColor,
    primaryColor,
    secondaryColor,
    primaryInvertedColor,
    inactiveColor,
    largeFontSize,
    standardFontSize,
    standardBorderRadius,
    standardBorderWidth,
    separatorBorderWidth,
    standardMargin,
    standardMarginVertical,
    containerPaddingHorizontal,
    containerPaddingVertical,
    standardSpacerMarginVertical,
} from './../../../styles/common'

export default {
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        backgroundColor: primaryBackgroundColor,
    },
    viewColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    viewRow: {
        flex: 1,
        flexDirection: 'row',
    },
    viewBody: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    viewFooter: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    viewSeparator: {
        marginVertical: standardMargin,
    },
    viewBorderMap: {
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: "#333",
        marginVertical: standardMargin,
        overflow: 'hidden',
    },
    viewBorder: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "#333",
        marginVertical: standardMargin,
        overflow: 'hidden',
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
        fontSize: largeFontSize,
        fontWeight: 'bold',
        marginVertical: standardMargin,
        textAlign: 'center',
    },
    viewButtonInactive: {
        backgroundColor: primaryBackgroundColor,
        alignSelf: 'stretch',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "#333",
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
        color: '#000',
        fontWeight: 'bold',
    },
    textLarge: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    textStandardBold: {
        fontSize: standardFontSize,
        color: '#000',
        fontWeight: 'bold',
    },
    textStandard: {
        fontSize: 12,
        color: '#666',
    },
    textSeparator: {
        fontSize: standardFontSize,
        color: '#000',
        fontWeight: 'bold',
    },
    marginSpacer: {
        marginTop: standardSpacerMarginVertical,
    },
    viewMargin: {
        margin: standardMargin,
    },
    textNoStationHeading: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textNoStation: {
        color: secondaryColor,
        fontSize: 14,
        marginVertical: 4,
        textAlign: 'center',
    },
};
