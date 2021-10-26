import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { myColors } from '../../values/Colors/Colors';

export const Loading = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: myColors.mainColor
            }}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text
                    style={{
                        height: 50,
                        width: wp(100),
                        fontSize: hp(2.2),
                        textAlign: 'center',
                        marginTop: hp(3),
                        color: '#23007E',
                        fontWeight: 'bold',
                    }}>
                    App Loading...
                </Text>
            </View>
        </View>
    );
};
