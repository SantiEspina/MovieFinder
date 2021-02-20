import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import { RootStackParamList } from './types';
import { MovieScreen } from '../components/movie/movieScreen';
import { MovieId } from '../components/movie/movieId';
import { RootState, useAppDispatch } from '../redux';
import { toggleTheme } from '../redux/theme/actions';

export const Routes: React.FC = () => {
    const { Navigator, Screen } = createStackNavigator<RootStackParamList>();
    const { theme } = useSelector((state: RootState) => state.tema);

    const dispatch = useAppDispatch();

    const toggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={
                    ({ navigation }) => ({
                        title: 'MovieFinder',
                        headerStyle: {
                            backgroundColor: !theme ? '#6fe7dd' : '#181616'
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTintColor: theme ? '#fff' : '#121212',
                        headerRight: () => (
                            <Icon 
                                reverse
                                name={!theme ? 'moon' : 'sun'}
                                type='font-awesome-5'
                                size={20}
                                color='rgba(0,0,0,0.1)'
                                onPress={toggle}
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