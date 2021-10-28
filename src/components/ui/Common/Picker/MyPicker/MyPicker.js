import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, FlatList} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen"
import MyGradientView from "../../AppSpecifics/MowGradientView";
import {myColors} from "../../../../values/Colors/Colors";
import {pickerButtonViewStyle, pickerStyle} from '../../../../values/Styles/Styles';
import Modal from 'react-native-modal';
import {MyButton} from '../Button/MowButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const MyPicker = (props) => {

    let {pickerVisible, data, onSelect, pickerOnClose, pickerTitle, search, searchKey} = props;

    const [isVisible, setIsVisible] = useState(pickerVisible);
    const [pickerData, setPickerData] = useState(data);

    useEffect(() => {
        setPickerData(data)
    }, [data]);

    useEffect(() => {
        setIsVisible(pickerVisible)
    }, [pickerVisible])

    // to render picker items
    const renderItem = (item, key) => {

        return (

            <TouchableOpacity
                key={key}
                onPress={() => {
                    // to call on select method to let know the parent
                    onSelect(item);
                    // to let know the parent about pickerOnClose method called
                    pickerOnClose();
                }}
                style={{
                    marginTop: 5,
                    width: "100%",
                    flexDirection: "row",
                    padding: 9,
                    flex: 1,
                    paddingLeft: 20,
                    height: "100%",
                    borderBottomWidth:0.8,
                    borderBottomColor:myColors.textColor
                }}>

                <View
                    style={{width: "90%", flexDirection: "row", alignItems: "center"}}>

                    <View
                        style={{
                            width: hp(1.5),
                            height: hp(1.5),
                            borderRadius: 100,
                            backgroundColor: "grey",
                            marginRight: 20
                        }}/>

                    <Text
                        style={{
                            fontSize: hp("2%"),
                            color: "grey",
                            fontWeight: "500",
                        }}>

                        {item["title"]}

                    </Text>

                </View>

            </TouchableOpacity>
        )

    };

    return (

        <Modal
            overlayBackgroundColor={"#454545"}
            isVisible={isVisible}
            avoidKeyboard={false}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}>

            <KeyboardAwareScrollView
                style={pickerStyle}>

                <MyGradientView
                    style={{borderTopRightRadius: pickerStyle.borderTopRightRadius, borderTopLeftRadius: pickerStyle.borderTopLeftRadius}}>

                    {/* picker title text */}
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: hp(2.2),
                            fontWeight: "500",
                            paddingVertical: 10
                        }}>

                        {pickerTitle}

                    </Text>

                </MyGradientView>


                <View>

                    <View
                        style={{flex: 1}}>

                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={pickerData}
                            renderItem={({item, key}) => renderItem(item, key)}/>

                    </View>

                </View>

            </KeyboardAwareScrollView>

            {/* button view */}
            <View
                style={pickerButtonViewStyle}>

                {/* close button */}
                <MyButton
                    leftIcon={"times"}
                    type={"success"}
                    containerStyle={{width: "50%"}}
                    buttonText="Kapat"
                    onPress={() => {
                        // to let know the parent picker close button clicked
                        pickerOnClose();
                    }}
                />

            </View>

        </Modal>
    );

};

MyPicker.propTypes = {
    search: PropTypes.bool,
    pickerVisible: PropTypes.bool,
    quickAdd: PropTypes.bool,
    data: PropTypes.array,
    searchKey: PropTypes.string,
    pickerTitle: PropTypes.string,
    onSelect: PropTypes.func,
    pickerOnClose: PropTypes.func
};

MyPicker.defaultProps = {
    searchKey: "title",
    search: true
};
