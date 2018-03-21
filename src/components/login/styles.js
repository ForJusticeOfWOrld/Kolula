import { StyleSheet } from 'react-native';
import * as commonStyles from '../../common/commonStyles';


export default{
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerImage: {
        flex: 1,
        height: null,
        width: null,
    },
    viewRow: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
    },
    viewHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 32,
    },
    viewBody: {
        flexDirection: 'column',
        marginHorizontal: 10,
    },
    viewBottom: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    viewLogo: {
        height: 65,
        marginBottom: 10,
    },
    // imageLogo: {
    //     flex: 1,
    // },
    errorView: {
        height: 40,
        alignSelf: 'center',
        marginBottom: 6,
    },
    errorText: {
        color: '#111',
        fontSize: 22,
        padding: 10,
        backgroundColor: commonStyles.lightPinkOpacityColor,
        borderRadius: 8,
        borderColor: commonStyles.darkRedColor,
        borderWidth: 1,
    },
    itemsBG: {
        marginTop: 6,
        backgroundColor: commonStyles.whiteOpacityColor7,
        borderRadius: 10,
        borderColor: commonStyles.moreDarkGreyColor2,
        borderWidth: 1,
    },
    inputText: {
        fontSize: 22,
        fontWeight: '100',
        color: commonStyles.moreDarkGreyColor1,
        marginVertical: 2,
        marginLeft: 14,
        minHeight: 45,
    },
    // checkBoxBG: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    // },
    // checkBoxText: {
    //     fontSize: 16,
    //     fontWeight: '100',
    //     color: commonStyles.moreDarkGreyColor1,
    //     paddingRight: 14,
    // },
    // checkBox: {
    //     marginLeft: 16,
    //     marginVertical: 0,
    //     paddingTop: 3,
    //     paddingBottom: 3,
    // },
    loginButtonView: {
        backgroundColor: commonStyles.lightGreenColor,
        marginTop: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 4,
        color: commonStyles.whiteColor,//color: commonStyles.lightRedColor,
    },
    loginButtonViewInactive: {
        flexDirection: 'row',
        backgroundColor: commonStyles.lightGreyColor,
        marginTop: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonTextInactive: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 4,
        marginLeft: 14,
        color: commonStyles.darkGreyColor,
    },
};
