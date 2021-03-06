import { Platform } from 'react-native';
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
    whiteOpacityColor4,
} from './../../styles/common'

export default {
    container: {
        flex: 1,
        //backgroundColor: whiteOpacityColor4,
    },
    containerBlur: {
        flex: 1,
        backgroundColor: whiteOpacityColor4,
        alignItems: 'center',
    },
    viewColumn: {
        flex: 1,
        flexDirection: 'column',
        margin: standardMargin,
    },
    viewRow: {
        flex: 1,
        flexDirection: 'row',
    },
    viewHeader: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: (Platform.OS === 'ios') ? 32 : 0,
        margin: 6,
        flexDirection: 'row',
    },
    viewBody: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    viewFooter: {
        //flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    viewSeparator: {
        borderBottomWidth: separatorBorderWidth,
        borderBottomColor: '#9b9b9b',
        margin: standardMargin,
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
        backgroundColor: primaryColor,
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
    line: {
        height: 1,
        alignSelf: 'stretch',
        backgroundColor: '#9b9b9b',
        marginVertical: 10,
    },
    textLargeBold: {
        color: '#9b9b9b',
        fontSize: standardFontSize,
        alignSelf: 'center',
        marginLeft: 5,
    },
    textLarge: {
        fontSize: largeFontSize,
        color: '#000',
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
