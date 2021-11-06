import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { myColors } from '../../../values/Colors/Colors'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, Overlay } from 'react-native-elements';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteList,
    listsSelector,
    loadingSelector,
} from '../../../stores/deleteList/deleteListSlice';
import { updateList } from "../../../stores/updateList/updateSlice"
import InputCard from "../AppSpecifics/InputCard"
import { navigate } from '../../../RootMethods/RootNavigation';
import PomodoroCard from './PomodoroCard';

const GoalsCard = (props) => {

    const dispatch = useDispatch();
    const list = useSelector(listsSelector);
    const loading = useSelector(loadingSelector);

    const { completed, createdAt, describe, pomodoro, title, category, _id } = props?.data

    const newDate = moment(createdAt).format("DD-MM-YYYY")

    const [visible, setVisible] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openPomodoro, setOpenPomodoro] = useState(false)

    const toggleOverlay = () => {
        setVisible(!visible);
        setOpenEdit(false)
        setOpenPomodoro(false)
    };

    const getData = (id) => {
        dispatch(deleteList({ id }));
        toggleOverlay();
    }

    const onSaved = (title, describe, pomodoro, category) => {
        dispatch(updateList({ title, describe, pomodoro, category, id: _id }));
        toggleOverlay();
    }

    const onPomodoro = (_pomodoro) => {
        navigate("TimeScreen", _pomodoro)
        toggleOverlay();
    }

    return (
        <View style={{
            borderWidth: 1,
            borderColor: myColors.mainColor,
            margin: hp(1),
            borderRadius: 5,
            height: hp(15),
            alignItems: "center"
        }}>
            <View style={{ flex: 3, flexDirection: "row" }}>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {
                        category === "Learning" ?
                            <Icon name="cogs" color="red" size={50} />
                            : category === "Technology" ?
                                <Icon name="laptop" color="#2daaa6" size={50} />
                                : category === "Daily" ?
                                    <Icon name="coffee" color="#0f1111" size={50} />
                                    : category === "Sport" ?
                                        <Icon name="hiking" color="#867b70" size={50} />
                                        : <Icon name="book" color="green" size={50} />
                    }
                </View>
                <View style={{ flex: 3, margin: hp(0.5), }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{
                            color: myColors.titleTextColor,
                            fontWeight: "bold",
                            letterSpacing: 1,
                            flex: 3
                        }}>
                            {title}
                        </Text>
                        <TouchableOpacity
                            onPress={toggleOverlay}
                            style={{
                                backgroundColor: "#f2f2f2",
                                width: 30,
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 15
                            }}>
                            <Icon name="ellipsis-h" color={myColors.titleTextColor} size={12} />
                        </TouchableOpacity>
                    </View>
                    <View >
                        <Text>{describe}</Text>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 1,
                borderBottomWidth: 1,
                borderBottomColor: myColors.mainColorLight,
                width: wp(85)
            }} />
            <View style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: wp(100)
            }}>
                <Text>{`Pomodoro: ${pomodoro}`}</Text>
                <Text>{completed ? "Completed" : "Progress"}</Text>
                <Text>{newDate}</Text>
            </View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                {
                    !openEdit && !openPomodoro &&
                    <View style={{ width: wp(50), height: hp(25), justifyContent: "space-around" }}>
                        <Text style={{
                            color: myColors.titleTextColor,
                            fontWeight: "bold",
                            letterSpacing: 1,
                        }}>
                            {title}
                        </Text>
                        <Button
                            icon={
                                <Icon
                                    name="hourglass-start"
                                    size={15}
                                    color="white"
                                    style={{ marginLeft: 15 }}
                                />
                            }
                            iconRight
                            title="Start Study"
                            onPress={() => setOpenPomodoro(!openPomodoro)}
                        />
                        <Button
                            icon={
                                <Icon
                                    name="trash-alt"
                                    size={15}
                                    color="white"
                                    style={{ marginLeft: 15 }}
                                />
                            }
                            iconRight
                            title="Delete Goal"
                            onPress={() => getData(_id)}
                        />
                        <Button
                            icon={
                                <Icon
                                    name="edit"
                                    size={15}
                                    color="white"
                                    style={{ marginLeft: 15 }}
                                />
                            }
                            iconRight
                            title="Edit Goal"
                            onPress={() => setOpenEdit(!openEdit)}
                        />


                    </View>
                }

                {
                    openEdit && <InputCard onSaved={onSaved} data={props?.data} />
                }
                {
                    openPomodoro && <PomodoroCard onPomodoro={onPomodoro} />
                }
            </Overlay>
        </View>
    )
}

export default GoalsCard
