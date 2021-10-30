import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isMountedRef } from '../../RootMethods/RootNavigation';

import { useSelector } from 'react-redux';
import { usersSelector } from '../../stores/login/loginSlice';

import SplashScreen from '../NotLogin/SplashScreen';
import SignInScreen from '../NotLogin/SignInScreen';
import SignupScreen from '../NotLogin/SignupScreen';
import ForgetPasswordScreen from '../NotLogin/ForgetPasswordScreen';

import HomeScreen from '../Login/HomeScreen';
import AddScreen from '../Login/AddScreen/AddScreen';
import TimeScreen from '../Login/AddScreen/TimeScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
    const user = useSelector(usersSelector);

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
    }, []);

    useEffect(() => {
        if (user?.success) {
            setIsLogin(true);
        }
    }, [user]);
    console.log("Router", { user, isLogin })
    return (
        <NavigationContainer ref={navigationRef}>
            {isLogin ?
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="AddScreen" component={AddScreen} />
                    <Stack.Screen name="TimeScreen" component={TimeScreen} />
                </Stack.Navigator>
                : <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="SignInScreen" component={SignInScreen} />
                    <Stack.Screen name="SignupScreen" component={SignupScreen} />
                    <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}

export default Router
