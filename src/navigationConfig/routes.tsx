import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import { RootStackParamList } from './types';
import { MovieScreen } from '../components/movie/movieScreen';
import { MovieId } from '../components/movie/movieId';

export const Routes: React.FC = () => {
    const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={
                    ({ navigation }) => ({
                        title: 'MovieFinder',
                        headerStyle: {
                            backgroundColor: '#6fe7dd'
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <Icon 
                                reverse
                                name='moon'
                                type='font-awesome-5'
                                size={20}
                                color='rgba(0,0,0,0.2)'
                            />
                        )
                    })
                }
            >
                <Screen name='MovieScreen' component={MovieScreen} />
                <Screen name='MovieId' component={MovieId} />
            </Navigator>
        </NavigationContainer>
    )
};