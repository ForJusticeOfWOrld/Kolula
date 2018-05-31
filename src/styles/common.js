import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// colors

export const primaryBackgroundColor = '#00b5ba';    // general app background
export const secondaryBackgroundColor = '#FFFFFF';  // general app background
export const primaryColor = '#00b5ba';              // primary dark font color
export const secondaryColor = '#b2e3e5';            // secondary light font color
export const primaryInvertedColor = '#FFFFFF';      // contrast color for primary color (text for primary buttons, background for secondary buttons)
export const inactiveColor = '#CCCCCC';             // inactive button text color
export const inactiveBackgroundColor = '#F8F8F8';   // inactive button background

export const whiteOpacityColor4 = 'rgba(255, 255, 255, 0.4)';

// font sizes
export const largeFontSize = 22;
export const standardFontSize = 16;
export const smallFontSize = 10;

// borders
export const standardBorderRadius = 3;
export const standardBorderWidth = 2;
export const separatorBorderWidth = 2;

// margin
export const standardMargin = 4;
export const standardMmarginHorizontal = 8;
export const standardMarginVertical = 8;
export const standardSpacerMarginVertical = 8;
export const containerPaddingHorizontal = 16;
export const containerPaddingVertical = 16;


// styles
export default StyleSheet.create({
    buttonGreenWrapper: {
        justifyContent: 'center',
    },

});