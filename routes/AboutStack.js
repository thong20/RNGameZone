//import liraries
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/header';

const Stack = createStackNavigator();
const AboutStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='About' component={About}
                options={{
                    headerTitle: () => <Header navigation={navigation} title='About GameZone' />
                }}
            />
        </Stack.Navigator>
    );
};

export default AboutStack;
