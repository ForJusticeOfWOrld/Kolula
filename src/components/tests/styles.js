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
    separatorBorderWidth
} from './../../../styles/common'

export default{
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: secondaryBackgroundColor, //Debug
    },
    viewRow: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewBody: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        backgroundColor: '#FFFF00', //Debug
    },
    viewSeparator: {
        borderBottomWidth: separatorBorderWidth,
        borderBottomColor: primaryColor,
    },
    viewBorder: {
        borderRadius: standardBorderRadius,
        borderWidth: standardBorderWidth,
        borderColor: primaryColor,
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
};
