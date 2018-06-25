import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const screenHeightTmp = width < height ? height : width;
const bottomMargin = 24;
_WIDTH = x => x * screenWidth / 375;
_HEIGHT =  y => y * screenHeight / 970;
const metrics = {
  searchBarHeight: 30,
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  navBarHeight: Platform.OS === 'ios' ? 70 : 60,
  defaultMargin: 10,
  defaultPadding: 10,
  listItemHeight: screenHeightTmp / 9,
  WIDTH:  _WIDTH, 
  HEIGHT: _HEIGHT,
  margin: _WIDTH(16),
  buttonWidth: _WIDTH(343),
  buttonHeight: _HEIGHT(44), 
  logoSize: width / 2,
  footerHeight: width / 7,
  androidMarginBottom: bottomMargin,
  sliderThumbSize: 25,
  statusBarHeight: 20,
  circleBtnSize: 50,
  iconSizeSmall: 15,
};

export default metrics;
