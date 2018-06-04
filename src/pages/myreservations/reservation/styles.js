const React = require('react-native');
const { StyleSheet } = React;
import {
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
} from './../../../styles/common'

export default{
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: containerPaddingHorizontal,
        paddingVertical: containerPaddingVertical,
        backgroundColor: secondaryBackgroundColor, //Debug
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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 200,
    },
    viewBody: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: undefined,
        width: undefined,
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
        flexDirection: 'column',
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
    viewMap: {
        flex: 1,
        alignItems: 'center',
        height: 200,
        //minWidth: 200,
    },
    viewButton: {
        alignSelf: 'stretch',
        alignContent: 'center',
    },
    buttonPrimary: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: primaryColor,
        backgroundColor: secondaryBackgroundColor,
        color: primaryInvertedColor,
        fontSize: largeFontSize,
        fontWeight: 'bold',
        marginVertical: standardMargin,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    buttonSecondary: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: primaryColor,
        backgroundColor: primaryInvertedColor,
        color: primaryColor,
        fontSize: largeFontSize,
        fontWeight: 'bold',
        marginVertical: standardMargin,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    buttonInactive: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: inactiveColor,
        backgroundColor: inactiveBackgroundColor,
        color: inactiveColor,
        fontSize: largeFontSize,
        fontWeight: 'bold',
        marginVertical: standardMargin,
        alignSelf: 'stretch',
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
};