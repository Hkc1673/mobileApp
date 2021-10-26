import React from 'react';
import { View, Text, Modal, Pressable, StatusBar } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { myColors } from "../../values/Colors/Colors"
import { AlertStyles } from '../../values/Styles/Styles';
import { myStrings } from '../../values/Strings/Strings';

const AlertModal = ({ title, message, show, onCancelPressed, onConfirmPressed }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={onCancelPressed}>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.498)" barStyle="light-content" />
            <View
                style={{
                    flex: 1,
                    paddingVertical: hp(30),
                    paddingHorizontal: wp(5),
                    backgroundColor: '  rgba(0, 0, 0, 0.498)',
                }}>
                <View style={AlertStyles.container}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: "center"
                        }}>
                        <Text style={AlertStyles.title}>{title}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: hp(1),
                            alignItems: 'center',
                            justifyContent: "center"
                        }}>
                        <Text style={AlertStyles.titleText}>{message}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: "center" }}>
                        <Button
                            onPress={onConfirmPressed}
                            title="Okey"
                            iconRight
                            icon={
                                <Icon
                                    name="check"
                                    size={15}
                                    color="white"
                                    style={{ marginHorizontal: hp(1) }}

                                />
                            }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default AlertModal;