import React, {useState} from "react";
import { View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { Separator } from "../components"; 
import Ionicons from "react-native-vector-icons/Ionicons";
import Featcher from "react-native-vector-icons/Feather";
import { Colors, Fonts, Images } from "../contants";
import { Display } from "../utils";
import { useState } from 'react/cjs/react.production.min';


const SigninScreen = ({navigation}) => {
     const [isPasswordShow, setPasswordShow] = useState(false)
    return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent/>
          <Separator height={StatusBar.currentHeight}/>
          <View style={styles.headerContainer}>
             <Ionicons name="chevron-back-outline" size={30} onPress={() => navigation.goBack()} />
             <Text style={styles.headerTitle}>Sign in</Text>
          </View>
          <Text style={styles.title}>welcome</Text>
          <Text style={styles.content}>Enter your username and password, and enjoy ordering food</Text>
          <View style={styles.inputContainer}>
              <View style={styles.inputSubContainer}>
                  <Featcher name="user"
                   size={22}
                   color={Colors.DEFAULT_GREY}
                   style={{marginRight: 10}}
                   />
                  <TextInput
                   placeholder="Username"
                   placeholderTextColor={Colors.DEFAULT_GREY}
                   selectionColor={Colors.DEFAULT_GREY}
                   style={styles.inputText}
                  />
              </View>
          </View>  
          <Separator height={15}/>
          <View style={styles.inputContainer}>
              <View style={styles.inputSubContainer}>
                  <Featcher name="lock"
                   size={22}
                   color={Colors.DEFAULT_GREY}
                   style={{marginRight: 10}}/>
                  <TextInput
                  secureTextEntry={isPasswordShow ? false : true}
                  placeholder="Password"
                  placeholderTextColor={Colors.DEFAULT_GREY}
                  selectionColor={Colors.DEFAULT_GREY}
                  style={styles.inputText}/>
                  <Featcher
                  name={isPasswordShow ? "eye" : "eye-off"}
                  size={22}
                  color={Colors.DEFAULT_GREY}
                  style={{marginRight: 10}}
                  onPress={() => setPasswordShow(!isPasswordShow)}
                  />
              </View>
          </View>
          <Text></Text>
          <View style={styles.forgotPasswordContainer}>
              <View>
                  <Text style={styles.rememberMeText}>Rememver me</Text>
              </View>
              <Text style={styles.forgotPasswordText}>Forget Password</Text>
          </View>
          <TouchableOpacity style={styles.signinButton}>
              <Text style={styles.signinButtonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
              <Text style={styles.accountText}>
                  Don't have an account
              </Text>
              <Text style={styles.signupText}>Sign Up</Text>
          </View>
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.facebookButton}>
              <View>
                  <View style={styles.signinButtonLogoContainer}>
                      <Image style={styles.signinButtonLogo} source={Images.FACEBOOK}/>
                  </View>
                  <Text style={styles.socialSigninButtonText}>Connect With Facebook </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
              <View>
                  <View style={styles.signinButtonLogoContainer}>
                      <Image style={styles.signinButtonLogo} source={Images.GOOGLE}/>
                  </View>
                  <Text style={styles.socialSigninButtonText}>Connect With Google </Text>
              </View>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    content : {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY,
        justifyContent: 'center',
    },
    inputSubContainer: {
       flexDirection: 'row',
       alignItems: 'center',
    },
    inputText: {
       fontSize: 18,
       textAlignVertical: 'center',
       height: Display.setHeight(6),
       color: Colors.DEFAULT_BLACK,
       flex:1,
    },
    forgotPasswordContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    rememberMeText: {
        marginLeft: 10,
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      forgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_BOLD,
      },
      signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      signupContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      accountText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      signupText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
      },
      orText: {
        fontSize: 15,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        alignSelf: 'center',
      },
      facebookButton: {
        backgroundColor: Colors.FABEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      signinButtonLogo: {
        height: 18,
        width: 18,
      },
      signinButtonLogoContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 2,
        borderRadius: 3,
        position: 'absolute',
        left: 25,
      },
      socialButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      socialSigninButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 13,
        lineHeight: 13 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      errorMessage: {
        fontSize: 10,
        lineHeight: 10 * 1.4,
        color: Colors.DEFAULT_RED,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginHorizontal: 20,
        marginTop: 3,
        marginBottom: 10,
      },
   
})

export default SigninScreen