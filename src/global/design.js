import { DESIGN_WIDTH, DESIGN_HEIGHT } from './designInfo'
import { Dimensions } from 'react-native'

export const DEVICE_INFO = Dimensions.get('window');
export function getDeviceWidth (width) {
  return Math.round(width * DEVICE_INFO.width / DESIGN_WIDTH)
}

export function getDeviceHeight (height) {
  return Math.round(height * DEVICE_INFO.height / DESIGN_HEIGHT)
}