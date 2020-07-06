//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'


// create a component
const Detail = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>

                    {/* <Image source={require('../assets/rating-1.png')} /> */}
                    <Image source={images.rating[item.rating]} />
                </View>
            </Card>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});

//make this component available to the app
export default Detail;



