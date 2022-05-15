import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { Separator } from "../components"; 
import Ionicons from "react-native-vector-icons/Ionicons";
import Featcher from "react-native-vector-icons/Feather";
import { Colors } from "../contants";
 


const SigninScreen = ({navigation}) => {
     
    return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent/>
          <Separator height={StatusBar.currentHeight}/>
          <View style={styles.headerContainer}>
             <Ionicons name="chevron-back-outline" size={30} onPress={() => navigation.goBack()} />
             <Ionicons name="chevron-back-outline" size={30}></Ionicons>
             <Text>Sign in</Text>
          </View>
          <Text>welcome</Text>
          <Text>Enter your username and password, and enjoy ordering food</Text>
          <View>
              <View>
                  <Featcher/>
                  <TextInput/>
              </View>
          </View>  
          <Separator/>
          <View>
              <View>
                  <Featcher/>
                  <TextInput/>
                  <Featcher/>
              </View>
          </View>
          <Text></Text>
          <View>
              <View>
                  <Text>Rememver me</Text>
              </View>
              <Text>Forget Password</Text>
          </View>
          <TouchableOpacity>
              <Text>Sign In</Text>
          </TouchableOpacity>
          <View>
              <Text>
                  Don't have an account
              </Text>
              <Text>Sign Up</Text>
          </View>
          <Text>OR</Text>
          <TouchableOpacity>
              <View>
                  <View>
                      <Image/>
                  </View>
                  <Text>Connect With Facebook </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity>
              <View>
                  <View>
                      <Image/>
                  </View>
                  <Text>Connect With Google </Text>
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
    }
   
})

export default SigninScreen