import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Image, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { Movie } from '../../../redux/movies/types';
import { useAppDispatch, RootState } from '../../../redux';

import { styles } from './styles';
import { darkMode } from '../../theme';

interface Props {
    movie: Movie;
};

export const MovieCard: React.FC<Props> = ({ movie }): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const { theme } = useSelector((state: RootState) => state.tema); 

    return (
        <Card containerStyle={[styles.container, theme && darkMode.darkBgAlt, theme && { borderColor: 'rgba(256,256,256,0.4)', borderWidth: 1 }]}>
            <TouchableOpacity
                style={{ width: '100%', flexDirection: 'row' }}
                onPress={() => navigation.navigate('MovieId', { id: movie.imdbID })}
            >
                <Image 
                    style={styles.img}
                    source={movie.Poster !== 'N/A' ? { uri: `${movie.Poster}` } : require('../../../assets/img/no-image.png') }
                />
                <View style={styles.headerCnt}>
                    <View style={styles.titleCnt}>
                        <Text style={[styles.title, theme && darkMode.darkTxtTitle]}>{movie.Title}</Text>
                        <Text style={[{color: '#403a3a'}, theme && darkMode.darkTxt]}>({movie.Type})</Text>
                    </View>
                    <Card.Divider />   
                    <View>
                        <Text style={[styles.year, theme && darkMode.darkTxt]}>{movie.Year}</Text>
                    </View>
                </View>
                <View style={styles.look}>
                    <Icon 
                        name='chevron-right'
                        type='font-awesome-5'
                        size={12}
                        color='#ccc'
                    />
                </View>
            </TouchableOpacity>
        </Card>
    )

};