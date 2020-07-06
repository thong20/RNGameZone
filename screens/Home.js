//import liraries
import React, { Component, useState } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, FlatList,
    Modal, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global.js'
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm'

// create a component
const Home = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: '5', body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: '4', body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: '3', body: 'lorem ipsum', key: '3' },
    ]);
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [
                review,
                ...currentReviews
            ]
        })
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.container}>
                        <View>

                            <MaterialIcons
                                name='close'
                                size={24}
                                onPress={() => { setModalOpen(false) }}
                                style={{ ...styles.modalToggle, ...styles.modalClose }}
                            />
                        </View>

                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={() => { setModalOpen(true) }}
                style={styles.modalToggle}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
                        <Card>
                            <Text>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 19,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})

//make this component available to the app
export default Home;
