import React, { useState } from 'react'
import { View, Text } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from '@react-native-picker/picker';

import { myColors } from '../../../values/Colors/Colors';
import { MyContainer } from '../../../components/ui/Container/MyContainer'
import { pageContainerStyle, shadowStyle } from "../../../values/Styles/Styles";
import { MyInput } from '../../../components/ui/Common/Input/MyInput';
import { MyButton } from '../../../components/ui/Common/Button/MyButton';
import { goBack } from '../../../RootMethods/RootNavigation';

const AddScreen = () => {

    const [title, onChangeTitle] = useState("")
    const [describe, onChangeDescribe] = useState("")
    const [pomodoro, onChangePomodoro] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <MyContainer title="Add Goals">
            <KeyboardAwareScrollView
                style={pageContainerStyle}>
                <View>

                    <View
                        style={{ ...inputStyle.container, flex: 1 }}>
                        <Text
                            style={inputStyle.titleText}>

                            Title

                        </Text>

                        <MyInput
                            leftIcon={"pencil"}
                            type={"small"}
                            shadow={true}
                            textInputStyle={inputStyle.inputText}
                            value={title}
                            onChangeText={value => onChangeTitle(value)} />

                    </View>

                    <View
                        style={{ ...inputStyle.container, flex: 1 }}>


                        <Text
                            style={inputStyle.titleText}>

                            Description

                        </Text>

                        <MyInput
                            shadow={true}
                            textArea={true}
                            multiline={true}
                            leftIcon={"tasks"}
                            type={"small"}
                            textInputStyle={inputStyle.inputText}
                            value={describe}
                            onChangeText={value => onChangeDescribe(value)} />

                    </View>

                    <View
                        style={{ ...inputStyle.container, flex: 1 }}>


                        <Text
                            style={inputStyle.titleText}>

                            Pomodoro

                        </Text>

                        <MyInput
                            shadow={true}
                            leftIcon={"chain"}
                            placeholder="Select pomodoro goals per day"
                            type={"small"}
                            textInputStyle={inputStyle.inputText}
                            keyboardType={"number-pad"}
                            value={pomodoro}
                            onChangeText={value => onChangePomodoro(value)} />

                    </View>

                    <View
                        style={{ ...inputStyle.container, flex: 1 }}>

                        <Text
                            style={inputStyle.titleText}>

                            Category

                        </Text>
                        <View
                            style={inputStyle.picker}>
                            <Picker
                                selectedValue={selectedCategory}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedCategory(itemValue)
                                }>
                                <Picker.Item label="Select Category" value="" />
                                <Picker.Item label="Learning" value="Learning" />
                                <Picker.Item label="Technology" value="Technology" />
                                <Picker.Item label="Sport" value="Sport" />
                                <Picker.Item label="Daily" value="Daily" />
                            </Picker>
                        </View>
                    </View>
                </View>
                <MyButton
                    onPress={() => goBack()}
                    containerStyle={{ flex: 1, marginLeft: 5, marginRight: 0 }}
                    shadow={true}
                    stickyIcon={true}
                    rightIcon={"check"}
                    buttonText="Save" />

            </KeyboardAwareScrollView>
        </MyContainer>

    )
}

export default AddScreen

const inputStyle = ({
    container: {
        marginVertical: 5
    },
    titleText: {
        marginTop: 3,
        fontSize: hp("1.8%"),
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: myColors.titleTextColor,
    },
    inputText: {
        color: "#aeaeae",
    },
    picker: {
        marginVertical: 5,
        borderStyle: "solid",
        borderWidth: 1.5,
        borderColor: myColors.mainColor,
        backgroundColor: "white",
        borderRadius: 5,
        height: hp(5.5),
        justifyContent: 'center',
        ...shadowStyle
    }
})