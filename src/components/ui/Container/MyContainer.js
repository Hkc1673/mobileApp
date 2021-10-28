import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { footerHeight } from '../../../values/Constants/Constants';
import { MyStatusBar } from '../StatusBar/MyStatusBar';
import { MyFooter } from '../Footer/MyFooter';
import { MyNavbar } from '../Navbar/MyNavbar';
import { myColors } from '../../../values/Colors/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { shadowStyle } from '../../../values/Styles/Styles';
import { navigate } from '../../../RootMethods/RootNavigation';

export const MyContainer = (props) => {
  let {
    statusBar,
    footer,
    footerActiveIndex,
    navbar,
    title,
    style,
    topBorder,
  } = props;

  const [showFooter, setShowFooter] = useState(footer);


  useEffect(() => {
    setShowFooter(footer);
  }, [footer]);


  useEffect(() => {
    // keyboard did show function
    function _keyboardDidShow() {
      // to hide footer when keyboard opened
      setShowFooter(false);
    }

    // keyboard did hide function
    function _keyboardDidHide() {
      // to show footer when keyboard closed, if footer true that comes from parent
      setShowFooter(footer);
    }

    // to add keyboard did show listener
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    // to add keyboard did hide listener
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // calls after navigate new page (when current page destroyed like componentWillUnmount)
    return () => {
      // to remove keyboard did show listener
      Keyboard.removeListener('keyboardDidShow');
      // to remove keyboard did hide listener
      Keyboard.removeListener('keyboardDidHide');
    };
  }, []);

  return (
    <View
      style={{ flex: 1, backgroundColor: myColors.pageBGColor }}
    // {...panResponder.panHandlers}
    >
      {statusBar && (
        // app status bar
        <MyStatusBar />
      )}

      {!statusBar && (
        // hide status bar when comes false from props
        <StatusBar hidden />
      )}

      {navbar && (
        // app navbar
        <MyNavbar title={title} />
      )}

      {/* child component view */}
      <View
        style={{
          flex: 1,
          paddingBottom: showFooter ? footerHeight + 40 : 0,
          ...style,
        }}>
        <View style={{ flex: 1, backgroundColor: myColors.mainColorLight }}>
          <View
            style={{
              flex: 1,
              backgroundColor: myColors.pageBGColor,
            }}>
            {props.children}
          </View>
        </View>
      </View>

      {showFooter && (
        // app footer
        <MyFooter activeIndex={footerActiveIndex} />
      )}

      {showFooter && (
        // footer plus/save button view
        <View
          style={{
            zIndex: 999,
            position: 'absolute',
            alignSelf: 'center',
            bottom: 0,
            backgroundColor: myColors.pageBGColor,
            padding: 7,
            borderRadius: 100,
          }}>
          {/* button view */}
          <TouchableOpacity
            onPress={() => {navigate("AddScreen")}}
            style={{
              backgroundColor: myColors.mainColorLight,
              width: hp(8),
              height: hp(8),
              minHeight: 65,
              minWidth: 65,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,

              ...shadowStyle,
            }}>
            {/* button icon */}
            <FeatherIcon
              style={{ fontSize: hp(5), color: myColors.mainLightColor }}
              name="plus"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

MyContainer.propTypes = {
  style: PropTypes.object,
  navbar: PropTypes.bool,
  footer: PropTypes.bool,
  title: PropTypes.string,
  statusBar: PropTypes.bool,
  footerActiveIndex: PropTypes.oneOf([0, 1, 2, 3]),
  topBorder: PropTypes.bool,
  loading: PropTypes.bool,
};

MyContainer.defaultProps = {
  navbar: true,
  footer: true,
  title: '',
  showFooter: false,
  statusBar: true,
  topBorder: true,
  loading: false,
};
