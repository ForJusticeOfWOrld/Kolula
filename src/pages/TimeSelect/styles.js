const React = require('react-native');
const { StyleSheet } = React;
import {
    primaryBackgroundColor,
    secondaryBackgroundColor,
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
} from './../../styles/common'

import { Metrics, Styles, Images, Icons, Colors, Fonts, Global } from '@theme/';

export default {
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: containerPaddingHorizontal,
        paddingVertical: containerPaddingVertical,
        //backgroundColor: primaryBackgroundColor, //Debug
        backgroundColor: 'rgba(1,1,1,0)',
        justifyContent: "center",
        alignItems: "center",
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
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        width: Metrics.buttonWidth,
        bottom: Metrics.HEIGHT(45),
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
    viewMap: {
        flex: 1,
        //height: 100,
        //width: 100,
    },
    viewButtonPrimary: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: primaryColor,
        backgroundColor: primaryColor,
        alignSelf: 'stretch',
    },
    normalText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 11,
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
