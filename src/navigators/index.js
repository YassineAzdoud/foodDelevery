import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplachScreen, WelcomeScreen, SigninScreen, SignupScreen, ForgotPasswordScreen } from "../screens";

const Stack = createStackNavigator()

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name='splash' component={SplachScreen}/>
              <Stack.Screen name='welcome' component={WelcomeScreen}/>
              <Stack.Screen name='signin' component={SigninScreen}/>
              <Stack.Screen name='signup' component={SignupScreen}/>
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators;
