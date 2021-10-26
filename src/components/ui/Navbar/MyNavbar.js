import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import {myColors} from "../../../values/Colors/Colors";
import { goBack } from '../../../RootMethods/RootNavigation';

export const MyNavbar = (props) => {

    let {title, rightIcon} = props;

    return (

        <View>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row',
                }}>

                {/* go back button */}
                <TouchableOpacity
                    onPress={() => goBack()}
                    style={{
                        flex: 1.5,
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        paddingVertical: 3
                    }}>

                    <FeatherIcon
                        style={{fontSize: hp(3.5)}}
                        color={myColors.mainColor}
                        name={'chevron-left'}/>

                </TouchableOpacity>

                {/* title text */}
                <Text
                    numberOfLines={1}
                    style={{
                        flex: 8,
                        fontSize: hp(2),
                        fontWeight: 'bold',
                        color: myColors.mainColor,
                        textAlign: 'center',
                        // textTransform: "uppercase"
                    }}>

                    {title}

                </Text>
                {/* <TouchableOpacity
                    onPress={() => console.log("drawer")}
                    style={{
                        flex: 1.5,
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingVertical: 5,
                    }}>

                    <FAIcon
                        style={{fontSize: hp(3.5)}}
                        color={myColors.mainColor}
                        name={'bars'}/>

                </TouchableOpacity> */}

            </View>

        </View>

    );
};

MyNavbar.propTypes = {
    title: PropTypes.string,
    rightIcon: PropTypes.bool
};

MyNavbar.defaultProps = {
    title: "",
    rightIcon: true
};
