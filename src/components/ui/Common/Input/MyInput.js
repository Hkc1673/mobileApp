import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {TextInput, TouchableOpacity, View} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {myColors} from "../../../../values/Colors/Colors";
import {shadowStyle} from "../../../../values/Styles/Styles";

export const MyInput = (props) => {

    // to define props values
    let {
        leftIcon,
        rightIcon,
        iconColor,
        containerStyle,
        textInputStyle,
        textArea,
        placeholder,
        multiline,
        numberOfLines,
        editable,
        value,
        keyboardType,
        placeholderTextColor,
        secureTextEntry,
        autoCapitalize,
        shadow,
        type,
        rightIconOnPress,
        leftIconOnPress,
        defaultValue
    } = props;


    useEffect(() => {
        setRightIcon(rightIcon);
    }, [rightIcon]);

    // to store 'secureTextEntry' value that comes from props, for changing input area visibility
    const [togglePassword, passwordVisible] = useState(secureTextEntry);
    const [localRightIcon, setRightIcon] = useState(secureTextEntry ? "eye" : rightIcon);

    return(

        <View
            style={[{
                flexDirection: "row",
                marginVertical: 10,
                height: textArea ? hp(10) : hp(5.5),
                borderRadius: 5,
                alignSelf: "center",
                backgroundColor: shadow ? "white" : "transparent",
                borderStyle: "solid",
                borderWidth: 1.5,
                borderColor:myColors.mainColor,
                width: "100%",
                paddingHorizontal: type === "small" ? 10 : 0,
                ...containerStyle
            }, shadow ? {...shadowStyle} : {}]}>

            {
                leftIcon &&

                <TouchableOpacity
                    disabled={!leftIconOnPress}
                    onPress={() => {
                        if(typeof leftIconOnPress == "function"){
                            leftIconOnPress();
                        }
                    }}
                    style={{
                        flex: (type !== "small") ? 2 : 3,
                        alignSelf: "center",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                    <View
                        style={{
                            backgroundColor: myColors.mainDarkColor,
                            width: hp(3.5),
                            height: hp(3.5),
                            borderRadius: 100,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <FAIcon
                            name={leftIcon}
                            style={{
                                textAlign: "center",
                                fontSize: hp(2),
                                color: iconColor || "white",
                            }}/>

                    </View>

                </TouchableOpacity>
            }

            {
                !leftIcon &&
                // dummy view
                <View
                    style={{flex: 3}}/>
            }

            <TextInput
                {...props}
                autoCapitalize={!autoCapitalize ? "none" : null}
                secureTextEntry={togglePassword}
                multiline={multiline}
                numberOfLines={numberOfLines}
                editable={editable}
                value={value.toString()}
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                defaultValue={defaultValue}
                style={{
                    flex: rightIcon ? 14 : 17,
                    padding: 10,
                    fontSize: hp(1.8),
                    fontWeight: "500",
                    fontStyle: "normal",
                    letterSpacing: 0,
                    textAlign: "left",
                    marginLeft: type === "small" ? 10 : 0,
                    color: myColors.textColor,
                    ...textInputStyle
                }}/>

            {
                localRightIcon &&

                <TouchableOpacity
                    disabled={!secureTextEntry && !rightIconOnPress}
                    onPress={() => {
                        if(typeof rightIconOnPress == "function"){
                            rightIconOnPress();
                        }
                        else if(secureTextEntry){
                            passwordVisible(!togglePassword);
                            setRightIcon(togglePassword ? "eye-slash" : "eye");
                        }
                    }}
                    style={{
                        flex: 3,
                        alignSelf: "center",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                    <View
                        style={{
                            backgroundColor: secureTextEntry ? "transparent" : myColors.secondaryDarkColor,
                            width: hp(3.5),
                            height: hp(3.5),
                            borderRadius: 100,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <FAIcon
                            name={localRightIcon}
                            style={{
                                textAlign: "center",
                                fontSize: hp(2.2),
                                color: secureTextEntry ?myColors.textColor : iconColor,
                            }}/>

                    </View>

                </TouchableOpacity>
            }

            {
                !localRightIcon &&
                    // dummy view
                    <View
                        style={{flex: 3}}/>
            }

        </View>

    )

};

// input props
MyInput.propTypes = {
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    rightIconOnPress: PropTypes.func,
    leftIconOnPress: PropTypes.func,
    iconColor: PropTypes.string,
    containerStyle: PropTypes.object,
    textInputStyle: PropTypes.object,
    textArea: PropTypes.bool,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    editable: PropTypes.bool,
    value: PropTypes.string,
    keyboardType: PropTypes.oneOf(["default", "number-pad", "decimal-pad", "numeric", "email-address", "phone-pad"]),
    placeHolderTextColor: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    autoCapitalize: PropTypes.bool,
    shadow: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'small']),
    defaultValue:PropTypes.string
};

// input default props
MyInput.defaultProps = {
    textArea: false,
    placeholder: "",
    multiline: false,
    numberOfLines: 1,
    editable: true,
    value: "",
    placeholderTextColor: "#707070",
    secureTextEntry: false,
    autoCapitalize: false,
    shadow: false,
    iconColor: "white"
};
