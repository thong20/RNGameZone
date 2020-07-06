//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global'

// create a component
const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text>About</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default About;
