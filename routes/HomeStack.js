//import liraries
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import Detail from '../screens/Detail';
import Header from '../shared/header'

const Stack = createStackNavigator();
// create a component
const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}
                options={{
                    headerTitle: () => <Header navigation={navigation} title='GameZone' />,
                }}
            />
            <Stack.Screen name='Detail' component={Detail}
                options={{
                    title: 'Review Detail',
                }}

            />
        </Stack.Navigator>
    );
};

//make this component available to the app
export default HomeStack;
