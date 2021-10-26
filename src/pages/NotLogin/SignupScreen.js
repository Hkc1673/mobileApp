import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';

import { SplashScreenStyles, SignInStyles } from "../../values/Styles/Styles"
import { myColors } from "../../values/Colors/Colors"
import { _MF } from '../../components/global/MyFunctions';
import AlertModal from '../../components/global/Alert';
import { Loading } from '../../components/global/Loading';

import { useDispatch, useSelector } from 'react-redux';
import { registersSelector, registerUsers, LoadingSelector } from '../../stores/login/registerSlice';

const SignupScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const user = useSelector(registersSelector);
    const loading = useSelector(LoadingSelector)

    useEffect(() => {
        if (user?.success) {
            navigation.navigate('SignInScreen', { params: data.uName })
        } else if (user?.errors) {
            setData({
                showAlert: true,
                titleAlert: "Error",
                messageAlert: "Exist user"
            })
        }
    }, [user])

    const [data, setData] = useState({
        uName: "",
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        showAlert: false,
        titleAlert: "",
        messageAlert: ""
    });

    const textInputChange = val => {
        let validUser = _MF.myEmailValidationControl(val)
        if (validUser) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    };

    const handlePasswordChange = val => {
        if (val.trim().length > 0) {
            setData({
                ...data,
                password: val,
            });
        }
    };

    const userInputChange = val => {
        if (val.trim().length > 0) {
            setData({
                ...data,
                uName: val
            })
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    const handleValidUser = val => {
        let validUser = _MF.myEmailValidationControl(val)
        if (validUser) {
            setData({
                ...data,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                isValidUser: false,
            });
        }
    };

    const loginHandle = (userName, password, uName) => {
        if (data?.username?.length == 0 || data?.password?.length == 0 || data?.uName?.length == 0) {
            setData({
                showAlert: true,
                titleAlert: "Error",
                messageAlert: "You should fill all info"
            })
            return;
        } else {
            dispatch(registerUsers({ userName, password, uName }));
        }

    };

    const hideAlert = () => {
        setData({
            showAlert: false,
            titleAlert: "",
            messageAlert: ""
        })
    }

    return (
        <View style={SplashScreenStyles.container}>
            <StatusBar backgroundColor={myColors.mainColor} barStyle="light-content" />
            <View style={SplashScreenStyles.header}>
                <Animatable.Text animation="bounceIn">
                    <Text style={SplashScreenStyles.title}>
                        Create Account
                    </Text>
                </Animatable.Text>
            </View>
            <View style={SignInStyles.inputContainer}>
                <Input
                    placeholder='Enter user name'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    rightIcon={data.check_textInputChange ? (
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                    ) : null}
                    onChangeText={val => userInputChange(val)}
                    keyboardType="email-address"
                />
                <Input
                    placeholder='myapp@gmail.com'
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    rightIcon={data.check_textInputChange ? (
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                    ) : null}
                    onChangeText={val => textInputChange(val)}
                    onEndEditing={e => handleValidUser(e.nativeEvent.text)}
                    keyboardType="email-address"
                />
                {data.isValidUser ? null : (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={SignInStyles.errorMsg}>
                            Geçerli bir e-mail girmelisiniz.
                        </Text>
                    </Animatable.View>
                )}
                <Input
                    placeholder='Enter password'
                    leftIcon={{ type: 'font-awesome', name: 'lock', size: 35 }}
                    secureTextEntry={data.secureTextEntry ? true : false}
                    rightIcon={<TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                            <Feather name="eye-off" color="grey" size={20} />
                        ) : (
                            <Feather name="eye" color="grey" size={20} />
                        )}
                    </TouchableOpacity>}
                    onChangeText={val => handlePasswordChange(val)}
                    autoCapitalize="none"
                />
            </View>

            <View style={SplashScreenStyles.footer}>
                <TouchableOpacity
                    style={SplashScreenStyles.sigupButton}
                    onPress={() => loginHandle(data.username, data.password, data.uName)}>
                    <Text style={SplashScreenStyles.signupBtnText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('SignInScreen') }}>
                    <LinearGradient
                        colors={[myColors.gradientColor1, myColors.gradientColor3]}
                        style={SplashScreenStyles.linearButton}
                    >
                        <Text style={SplashScreenStyles.buttonText}>Log in</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            {data.showAlert &&
                <AlertModal title={data.titleAlert}
                    message={data.messageAlert}
                    show={data.showAlert} onCancelPressed={() => {
                        hideAlert();
                    }}
                    onConfirmPressed={() => {
                        hideAlert();
                    }} />
            }
            {
                loading && <Loading />
            }
        </View>
    )
}

export default SignupScreen
