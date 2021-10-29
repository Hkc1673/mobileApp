import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import SyncStorage from 'sync-storage';

import { SplashScreenStyles, SignInStyles } from "../../values/Styles/Styles"
import { myColors } from "../../values/Colors/Colors"
import { _MF } from '../../components/global/MyFunctions';
import AlertModal from '../../components/global/Alert';
import { Loading } from '../../components/global/Loading';

import { useDispatch, useSelector } from 'react-redux';
import { usersSelector, fetchUsers, userLoadingSelector } from '../../stores/login/loginSlice';

const SignInScreen = ({ route, navigation }) => {

    const dispatch = useDispatch();
    const user = useSelector(usersSelector);
    const loading = useSelector(userLoadingSelector)
    const token = user?.token
    const userId = user?.userId

    const params = route?.params?.params

    useEffect(() => {
        if (user?.success) {
            SyncStorage.set('XactionToken', token);
            SyncStorage.set('userId', userId);
        }
    }, [user])

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        alert: false
    });

    const [showAlert, setShowAlert] = useState(false);


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

    const loginHandle = (userName, password) => {
        if (data?.username?.length == 0 || data?.password?.length == 0) {
            setShowAlert(true)
            return;
        }
        dispatch(fetchUsers({ userName, password }));
    };

    const hideAlert = () => {
        setShowAlert(false)
    }
    return (
        <View style={SplashScreenStyles.container}>
            <StatusBar backgroundColor={myColors.mainColor} barStyle="light-content" />
            <View style={SplashScreenStyles.header}>
                <Animatable.Text animation="bounceIn">
                    {
                        params ? <Text style={SplashScreenStyles.title}>
                            {`Welcome ${params}`}
                        </Text>
                            : <Text style={SplashScreenStyles.title}>
                                Welcome Back
                            </Text>
                    }
                </Animatable.Text>
            </View>
            <View style={SignInStyles.inputContainer}>
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
                <View style={{ alignItems: "flex-end", marginRight: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordScreen')} >
                        <Text style={SplashScreenStyles.signupBtnText}> Forget password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={SplashScreenStyles.footer}>
                <TouchableOpacity onPress={() => {
                    loginHandle(data.username, data.password);
                }}>
                    <LinearGradient
                        colors={[myColors.gradientColor1, myColors.gradientColor3]}
                        style={SplashScreenStyles.linearButton}
                    >
                        <Text style={SplashScreenStyles.buttonText}>Log in</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={SplashScreenStyles.sigupButton} onPress={() => navigation.navigate('SignupScreen')}>
                    <Text style={SplashScreenStyles.signupBtnText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            {showAlert &&
                <AlertModal title="Error"
                    message="Hatalı parola veya e-mail"
                    show={showAlert} 
                    onCancelPressed={() => {
                        hideAlert();
                    }}
                    onConfirmPressed={() => {
                        hideAlert();
                    }} />
            }
            {loading && <Loading />}
        </View>
    )
}

export default SignInScreen
