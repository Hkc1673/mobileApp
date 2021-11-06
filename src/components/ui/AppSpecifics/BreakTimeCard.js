import React, {useState} from 'react'
import { View } from 'react-native';
import { MyButton } from '../../../components/ui/Common/Button/MyButton';
import { Button, Overlay } from 'react-native-elements';

const BreakTimeCard = ({ onPomodoro }) => {

    const [visible, setVisible] = useState(true);

    const onSubmit = (time) => {
        onPomodoro(time)
        toggleOverlay();
    }

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>

                <MyButton
                    onPress={() => onSubmit("continue")}
                    containerStyle={{ marginLeft: 5, marginRight: 0 }}
                    shadow={true}
                    stickyIcon={true}
                    rightIcon={"check"}
                    buttonText="Continue"
                />
                <MyButton
                    onPress={() => onSubmit("5")}
                    containerStyle={{ marginLeft: 5, marginRight: 0 }}
                    shadow={true}
                    stickyIcon={true}
                    rightIcon={"check"}
                    buttonText="Break"
                />
            </Overlay>

        </View>

    )
}

export default BreakTimeCard;

