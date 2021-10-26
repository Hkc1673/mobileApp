import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {footerHeight} from "../../../values/Constants/Constants";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FAIcon from "react-native-vector-icons/FontAwesome";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import MyGradientView from "../AppSpecifics/MyGradientView";
import {shadowStyle} from "../../../values/Styles/Styles";
import {navigate} from '../../../RootMethods/RootNavigation';
import { myColors } from '../../../values/Colors/Colors';

export const MyFooter = (props) => {

    let {activeIndex} = props;

    return (

        <View
            style={{
                zIndex: 99,
                position: 'absolute',
                height: footerHeight ,
                minHeight: 50,
                bottom: 0,
                left: 0,
                right: 0,
                borderTopWidth: 0.5,
                borderTopColor: "#a1a1a1",
                marginHorizontal: 10,
                marginVertical: 17,
                borderRadius: 5,
                shadowStyle
            }}
        >

            <View style={{flex: 1, flexDirection: "row", borderRadius: 5}}>

                <View
                    style={{
                        flexDirection: "row",
                        flex: 1,
                        paddingLeft: wp(5)
                    }}>

                    {/* home button*/}
                    <TouchableOpacity
                        onPress={() => {navigate("HomeScreen")}}
                        style={styles.buttonView}>

                        <EntypoIcon
                            name={"home"}
                            style={activeIndex === 0 ? styles.buttonActiveIcon : styles.buttonIcon}/>

                    </TouchableOpacity>

                    {/* profile button*/}
                    <TouchableOpacity
                        onPress={() => {navigate("ProfileScreen")}}
                        style={styles.buttonView}>

                        <FAIcon
                            name={"user"}
                            style={activeIndex === 1 ? styles.buttonActiveIcon : styles.buttonIcon}/>

                    </TouchableOpacity>

                </View>

                <View
                    style={{width: wp(20)}}/>

                <View
                    style={{
                        flexDirection: "row",
                        flex: 1,
                        paddingLeft: wp(5)
                    }}>

                    {/* currency button*/}
                    <TouchableOpacity
                        onPress={() => {navigate("ResellerScreen")}}
                        style={styles.buttonView}>

                        <FAIcon
                            name={"sitemap"}
                            style={activeIndex === 2 ? styles.buttonActiveIcon : styles.buttonIcon}/>

                    </TouchableOpacity>

                    {/* settings button*/}
                    <TouchableOpacity
                        onPress={() => {navigate("ReportScreen")}}
                        style={styles.buttonView}>

                        <FAIcon
                            name={"bar-chart"}
                            style={activeIndex === 3 ? styles.buttonActiveIcon : styles.buttonIcon}/>

                    </TouchableOpacity>

                </View>

            </View>

        </View>

    );
};

// Footer props
MyFooter.propTypes = {
    activeIndex: PropTypes.oneOf([0, 1, 2, 3])
};

// Footer default props
MyFooter.defaultProps = {

};

const styles = StyleSheet.create({
    buttonView: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 5,
        marginRight: wp(3),
        flex: 1
    },
    buttonIcon: {
        fontSize: hp(3),
        color: myColors.mainColor
    },
    buttonText: {
        color: "white",
        fontSize: hp("1.7%"),
        marginTop:  hp("0.5%")
    },
    buttonActiveIcon: {
        fontSize: hp(3.5),
        color: "#ed8c2c",
        shadowColor: "#c32d73",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 10,
        backgroundColor: "transparent",
        textShadowRadius: 4,
        textShadowOffset: { width: 2, height: 2 }
    }
});
