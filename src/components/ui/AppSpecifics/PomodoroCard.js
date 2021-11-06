import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { inputStyle } from "../../../values/Styles/Styles";
import { MyButton } from '../../../components/ui/Common/Button/MyButton';

const PomodoroCard = ({onPomodoro}) => {

    const [selectedCategory, setSelectedCategory] = useState("");

    const onSubmit = () => {
        onPomodoro(selectedCategory)
    }

    return (
        <View>
            <View
                style={{ ...inputStyle.container}}>

                <Text
                    style={inputStyle.titleText}>

                    Select Pomodoro Time

                </Text>
                <View
                    style={inputStyle.picker}>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCategory(itemValue)
                        }>
                        <Picker.Item label="Select Pomodoro Time" value="" />
                        <Picker.Item label="20 minutes" value="20" />
                        <Picker.Item label="30 minutes" value="30" />
                        <Picker.Item label="40 minutes" value="40" />
                        <Picker.Item label="50 minutes" value="50" />
                    </Picker>
                </View>
            </View>
            <MyButton
                    onPress={() => onSubmit()}
                    containerStyle={{marginLeft: 5, marginRight: 0 }}
                    shadow={true}
                    stickyIcon={true}
                    rightIcon={"check"}
                    buttonText="Start Study"
                />
        </View>

    )
}

export default PomodoroCard;

