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
    viewBody: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
