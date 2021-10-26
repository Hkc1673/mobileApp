import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { myColors } from '../../../values/Colors/Colors'
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';

const GoalsCard = (props) => {

    console.log("PROPS", props)

    const { completed, createdAt, describe, pomodoro, title, category } = props?.data

    const newDate = moment(createdAt).format("DD-MM-YYYY")

    return (
        <View style={{ borderWidth: 1, borderColor: myColors.mainColor, margin: hp(1), borderRadius: 5, height: hp(15), alignItems: "center" }}>
            <View style={{ flex: 3, flexDirection: "row" }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    {
                        category === "Learning" ?
                            <Icon name="cogs" color="red" size={50} />
                            : <Icon name="book" color="green" size={50} />
                    }
                </View>
                <View style={{ flex: 3, margin: hp(0.5), }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: myColors.titleTextColor, fontWeight: "bold", letterSpacing: 1, flex: 3 }}>{title}</Text>
                        <TouchableOpacity style={{ backgroundColor: "#f2f2f2", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 }}>
                            <Icon name="ellipsis-h" color={myColors.titleTextColor} size={12} />
                        </TouchableOpacity>
                    </View>
                    <View >
                        <Text>{describe}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: myColors.mainColorLight, width: wp(85) }} />
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: wp(100) }}>
                <Text>{`Pomodoro: ${pomodoro}`}</Text>
                <Text>{completed ? "Completed" : "Progress"}</Text>
                <Text>{newDate}</Text>
            </View>
        </View>
    )
}

export default GoalsCard