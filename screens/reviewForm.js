//import liraries
import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

// create a component
const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>

            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => {
                    return (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                            />
                            <TextInput
                                multiline
                                style={globalStyles.input}
                                placeholder='Review body'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                            />
                            <TextInput
                                keyboardType='numeric'
                                style={globalStyles.input}
                                placeholder='Rating (1 - 5): '
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                            />
                            <Button title='Submit' color='maroon' onPress={props.handleSubmit} />
                        </View>
                    )
                }}
            </Formik>
        </View>
    );
};

//make this component available to the app
export default ReviewForm;




