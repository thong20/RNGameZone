//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


// create a component
const Header = ({ navigation, title }) => {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            {/* icon for the menu */}
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <MaterialCommunityIcons onPress={() => { }} name='dots-horizontal' size={28} style={styles.iconRight} />
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        width: '100%',
        // height: '130%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    iconRight: {
        position: 'absolute',
        right: 0
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }
});

//make this component available to the app
export default Header;
