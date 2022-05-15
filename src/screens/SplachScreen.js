import { NavigationContainer } from "@react-navigation/native";
import React, {useEffect} from "react";
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Colors, Images, Fonts } from "../contants";
import { Display } from "../utils";


const SplachScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('welcome')
        }, 1000)
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN}/>
            <Image source={Images.PLATE} resizeMode="contain" style={styles.image}/>
            <Text style={styles.titleText}>foodDelivery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.DEFAULT_GREEN,
    },
    image: {
        height: Display.setHeight(30),
        width: Display.setWidth(60),
    },
    titleText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 32,
        fontFamily: Fonts.POPPINS_BLACK,
    }
})

export default SplachScreen