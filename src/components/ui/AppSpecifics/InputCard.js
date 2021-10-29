import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import {
    createList,
    listsSelector,
    loadingSelector,
} from '../../../stores/addList/addListSlice';

import { MyContainer } from '../../../components/ui/Container/MyContainer'
import { pageContainerStyle, inputStyle } from "../../../values/Styles/Styles";
import { MyInput } from '../../../components/ui/Common/Input/MyInput';
import { MyButton } from '../../../components/ui/Common/Button/MyButton';
import { navigate } from '../../../RootMethods/RootNavigation';
import { User } from '../../../user/User';
import { Loading } from '../../../components/global/Loading';
import AlertModal from '../../../components/global/Alert';

const AddScreen = ({onSaved, data}) => {

    const [title, onChangeTitle] = useState("")
    const [describe, onChangeDescribe] = useState("")
    const [pomodoro, onChangePomodoro] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");

    const onSubmit = () => {
        onSaved(title, describe, pomodoro, selectedCategory)
    }

    return (
        <View>

            <View
                style={{ ...inputStyle.container}}>
                <Text
                    style={inputStyle.titleText}>

                    Title

                </Text>

                <MyInput
                    leftIcon={"pencil"}
                    type={"small"}
                    shadow={true}
                    placeholder={data?.title}
                    textInputStyle={inputStyle.inputText}
                    value={title}
                    onChangeText={value => onChangeTitle(value)} />

            </View>

            <View
                style={{ ...inputStyle.container}}>


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
                    placeholder={data?.describe}
                    textInputStyle={inputStyle.inputText}
                    value={describe}
                    onChangeText={value => onChangeDescribe(value)} />

            </View>

            <View
                style={{ ...inputStyle.container}}>


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
                    placeholder={data?.pomodoro}
                    value={pomodoro}
                    onChangeText={value => onChangePomodoro(value)} />

            </View>

            <View
                style={{ ...inputStyle.container}}>

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
            <MyButton
                    onPress={() => onSubmit()}
                    containerStyle={{marginLeft: 5, marginRight: 0 }}
                    shadow={true}
                    stickyIcon={true}
                    rightIcon={"check"}
                    buttonText="Edit"
                />
        </View>

    )
}

export default AddScreen

