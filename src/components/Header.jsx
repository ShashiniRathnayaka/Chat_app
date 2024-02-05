import { Image, StyleSheet, View } from "react-native"
import React from "react";
import WhatsappLogo from '../assets/WhatsApp_logo.png'
import { Colors } from "../theme/Colors";
import VectorIcon from "../utils/Vectoricons";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={WhatsappLogo} style={styles.logoStyle} />
            <View style={styles.headerIcons}>
                <VectorIcon type='Feather' name='camera' color={Colors.secondaryColor} size={20} />
                <VectorIcon type='Ionicons' name='search' color={Colors.secondaryColor} size={20} style={styles.iconStyle}/>
                <VectorIcon type='Entypo' name='dots-three-vertical' color={Colors.secondaryColor} size={20} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoStyle:{
        height: 25,
        width: 100,
    },
    headerIcons:{
        flexDirection:  'row',
        justifyContent: 'space-between'
    },
    iconStyle: {
        marginHorizontal: 20
    }
});

export default Header;