import React from 'react';
import {View, StatusBar} from 'react-native';
import {platform, statusBarHeight} from "../../../values/Constants/Constants";
import {myColors} from "../../../values/Colors/Colors";
import LinearGradient from "react-native-linear-gradient";

export const MyStatusBar = (props) => {

    return (

        <View
            style={{zIndex: 999}}>

            {
                platform === "ios"  ?

                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={[myColors.gradientColor1, myColors.gradientColor2, myColors.gradientColor3]}
                        style={{height: statusBarHeight}}>

                        <StatusBar
                            backgroundColor={myColors.statusbarColor}
                            barStyle="light-content"/>

                    </LinearGradient>

                    :

                    <View
                        style={{height: statusBarHeight}}>

                        <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={[myColors.gradientColor1, myColors.gradientColor2, myColors.gradientColor3]}
                            style={{flex: 1, height: statusBarHeight}}>

                            <StatusBar
                                translucent={true}
                                backgroundColor={'transparent'}/>

                        </LinearGradient>

                    </View>

            }

        </View>

    );

};
