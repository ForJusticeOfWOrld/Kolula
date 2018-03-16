import { Platform, StyleSheet } from 'react-native';
import * as commonStyles from './../../styles/common';

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
    containerBlur: {
        flex: 1,
        backgroundColor: commonStyles.whiteOpacityColor4,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // paddingLeft: 10,
    },
    viewHeader: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: (Platform.OS === 'ios') ? 32 : 0,
        margin: 6,
    },
    textTitle: {
        //fontFamily: 'Roboto_medium',
        fontSize: 25,
        color: commonStyles.primaryColor,
        margin: 6,
    },
    line: {
        height: 1,
        alignSelf: 'stretch',
        backgroundColor: commonStyles.primaryColor,
        marginVertical: 10,
    },
    menuButtonView: {
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButtonText: {
        fontSize: 20,
        color: commonStyles.primaryColor,
        margin: 6,
        fontWeight: 'bold',
    },
    versionContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
    },
    textVersion: {
        flex: 1,
        textAlign: 'center', 
        fontSize: commonStyles.smallFontSize,
        color: commonStyles.primaryColor,
    },
};
