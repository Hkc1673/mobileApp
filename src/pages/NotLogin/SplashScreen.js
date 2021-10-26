import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SplashScreenStyles } from "../../values/Styles/Styles"
import { myColors } from "../../values/Colors/Colors"

const SplashScreen = ({ navigation }) => {
    return (
        <View style={SplashScreenStyles.container}>
            <StatusBar backgroundColor={myColors.mainColor} barStyle="light-content" />
            <View style={SplashScreenStyles.header}>
                <Animatable.Text animation="bounceIn">
                    <Text style={SplashScreenStyles.title}>
                        MY APP
                    </Text>
                </Animatable.Text>
            </View>
            <View style={SplashScreenStyles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
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

        </View>
    )
}

export default SplashScreen
