import React from "react";
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import FAIcon from "react-native-vector-icons/FontAwesome";
import {shadowStyle} from '../../../../values/Styles/Styles';
import {myColors} from "../../../../values/Colors/Colors";
import MyGradientView from "../../AppSpecifics/MyGradientView";
import {platform} from "../../../../values/Constants/Constants";

export const MyButton = (props) => {

    // to define props values
    let {
        containerStyle,
        textStyle,
        leftIcon,
        stickyIcon,
        iconStyle,
        leftIconStyle,
        rightIconStyle,
        buttonText,
        rightIcon,
        filled,
        size,
        type,
        shadow,
        gradient,
        iconBGColor
    } = props;

    let style = getButtonStyle(type, size, filled);

    function renderButton() {
        return (
            <TouchableOpacity
                {...props}
                style={[
                    (shadow && platform === "ios") ? shadowStyle : null,
                    {
                        flexDirection: "row",
                        width: "100%",
                        alignSelf: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        justifyContent: "center",
                        paddingHorizontal: 15,
                    },
                    gradient ? {} : {...style["button"]},
                ]}>

                {/* button left icon */}
                {
                    leftIcon &&

                    <View
                        style={{
                            flex: stickyIcon ? 0 : 1,
                            right: stickyIcon ? 10 : 0,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>

                        <View
                            style={{
                                backgroundColor: iconBGColor,
                                width: style["icon"].fontSize + hp(1.5),
                                height: style["icon"].fontSize + hp(1.5),
                                borderRadius: 100,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>

                            <FAIcon
                                style={{
                                    ...style["icon"],
                                    ...iconStyle,
                                    ...leftIconStyle
                                }}
                                name={leftIcon}/>

                        </View>

                    </View>
                }

                {
                    !leftIcon &&

                    <View
                        style={{flex: stickyIcon ? 0 : 1}}/>
                }


                {/* button text */}
                <View
                    style={{flex: stickyIcon ? 0 : 8}}>

                    <Text
                        style={{
                            fontWeight: "600",
                            textAlign: "center",
                            ...style["text"],
                            ...textStyle
                        }}>

                        {buttonText}

                    </Text>

                </View>

                {/* button right icon */}
                {
                    rightIcon &&

                    <View
                        style={{
                            flex: stickyIcon ? 0 : 1,
                            left: stickyIcon ? 10 : 0,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>

                        <View
                            style={{
                                backgroundColor: iconBGColor,
                                width: style["icon"].fontSize + hp(1.5),
                                height: style["icon"].fontSize + hp(1.5),
                                borderRadius: 100,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>

                            <FAIcon
                                style={{
                                    ...style["icon"],
                                    ...iconStyle,
                                    ...rightIconStyle
                                }}
                                name={rightIcon}/>

                        </View>

                    </View>
                }

                {
                    !rightIcon &&

                    <View
                        style={{flex: stickyIcon ? 0 : 1}}/>
                }

            </TouchableOpacity>
        )
    }

    return (

        gradient

        ?

            <MyGradientView
                style={{
                    margin: 10,
                    width: "100%",
                    alignSelf: 'center',
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                    ...style["button"],
                    ...containerStyle,
                }}>

                {renderButton()}

            </MyGradientView>

            :

            <View
                style={{
                    width: "100%",
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    ...containerStyle
                }}>

                {renderButton()}

            </View>

    )
};

MyButton.propTypes = {
    buttonText: PropTypes.string,
    textStyle: PropTypes.object,
    type: PropTypes.oneOf(['default', 'success', 'danger', 'warning', 'info']),
    size: PropTypes.oneOf(['default', 'big', 'medium', 'small', 'xSmall']),
    leftIcon: PropTypes.string,
    leftIconStyle: PropTypes.object,
    rightIcon: PropTypes.string,
    rightIconStyle: PropTypes.object,
    stickyIcon: PropTypes.bool,
    filled: PropTypes.bool,
    shadow: PropTypes.bool,
    gradient: PropTypes.bool,
    containerStyle: PropTypes.object,
    iconBGColor: PropTypes.string
};

MyButton.defaultProps = {
    filled: true,
    type: "default",
    size: "default",
    stickyIcon: false,
    shadow: false,
    buttonText: "",
    gradient: true,
    iconBGColor: "white"
};

const buttonColors = {
    default: "white",
    success: myColors.successColor,
    warning: myColors.warningColor,
    danger: myColors.errorColor,
    info: myColors.infoColor,
};

// to determine button style
function getButtonStyle(type, size, filled) {
    let style = {};
    switch (size) {
        case "big":
            style = {
                button: {
                    height: hp("7%"),
                    backgroundColor: filled ? buttonColors[type] : "transparent",
                    borderColor: filled ? "transparent" : buttonColors[type],
                    borderWidth: filled ? 0 : 1
                },
                text: {
                    fontSize: hp(2.2),
                    color: filled ? "white" : buttonColors[type]
                },
                icon: {
                    fontSize: hp(2.5),
                    color: filled ? myColors.mainColor : buttonColors[type]
                },
            };
            break;
        case "medium":
            style = {
                button: {
                    height: hp("5.5%"),
                    backgroundColor: filled ? buttonColors[type] : "transparent",
                    borderColor: filled ? "transparent" : buttonColors[type],
                    borderWidth: filled ? 0 : 1
                },
                text: {
                    fontSize: hp(2),
                    color: filled ? "white" : buttonColors[type],
                    fontWeight: "500"
                },
                icon: {
                    fontSize: hp(2.2),
                    color: filled ? myColors.mainColor : buttonColors[type]
                },
            };
            break;
        case "small":
            style={
                button: {
                    height: hp("4.2%"),
                    backgroundColor: filled ? buttonColors[type] : "transparent",
                    borderColor: filled ? "transparent" : buttonColors[type],
                    borderWidth: filled ? 0 : 1
                },
                text: {
                    fontSize: hp("1.5%"),
                    color: filled ? "white" : buttonColors[type]
                },
                icon: {
                    fontSize: hp(1.9),
                    color: filled ? myColors.mainColor : buttonColors[type]
                },
            };
            break;
        case "xSmall":
            style = {
                button: {
                    height: hp("3.5%"),
                    backgroundColor: filled ? buttonColors[type] : "transparent",
                    borderColor: filled ? "transparent" : buttonColors[type],
                    borderWidth: filled ? 0 : 1
                },
                text: {
                    fontSize: hp("1.3%"),
                    color: filled ?  "white" : buttonColors[type],
                },
                icon: {
                    fontSize: hp(1.6),
                    color: filled ? myColors.mainColor :  buttonColors[type],
                },
            };
            break;
        default:
            style = {
                button: {
                    height: hp("5.5%"),
                    backgroundColor: filled ? buttonColors[type] : "transparent",
                    borderColor: filled ? "transparent" : buttonColors[type],
                    borderWidth: filled ? 0 : 1
                },
                text: {
                    fontSize: hp(2),
                    color: filled ? "white" : buttonColors[type],
                    fontWeight: "500"
                },
                icon: {
                    fontSize: hp(2.2),
                    color: filled ? myColors.mainColor : buttonColors[type]
                },
            };
            break;
    }

    return style;
}
