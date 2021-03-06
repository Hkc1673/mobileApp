import {Dimensions, Platform} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const platform = Platform.OS;
export const navbarHeight = hp(7);
export const footerHeight = hp(6);

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const statusBarHeight = getStatusBarHeight();
export const pageHeight = deviceHeight - (navbarHeight + statusBarHeight);