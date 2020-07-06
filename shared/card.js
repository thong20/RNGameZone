//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: .3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
});

//make this component available to the app
export default Card;
