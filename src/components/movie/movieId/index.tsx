import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Image, Icon, Divider } from 'react-native-elements';

import { RouteStackParamList } from '../../../navigationConfig/types';
import { RootState, useAppDispatch } from '../../../redux';
import { getMovieId } from '../../../redux/movies/actions';

import { styles} from './styles';

export const MovieId = ({ navigation, route }: RouteStackParamList<'MovieId'>): JSX.Element => {
    const dispatch = useAppDispatch();
    const { movieId } = useSelector((state: RootState) => state.movies)

    React.useEffect(() => {
        dispatch(getMovieId(route.params.id))
    }, [dispatch]);

    if(Object.keys(movieId).length === 0) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
                source={require('../../../assets/img/loader.gif')}
                style={{width: 200, height: 250}}
            />
        </View>
    };
    return (
        <ScrollView>
            {/* container */}
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 5}}> 
                {/* header */}
                <View style={styles.headerCnt}>
                    <Image 
                        source={movieId.Poster !== 'N/A' ? { uri: `${movieId.Poster}` } : require('../../../assets/img/no-image.png') }
                        style={styles.headerImg}
                    />
                    <View style={{paddingVertical: 5}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 17}}>{movieId.Title}</Text>
                        <Text style={{opacity: 0.6}}>{movieId.Director}</Text>
                    </View>
                    <View style={styles.plot}>
                        <Text style={{textAlign:'center'}}>{movieId.Plot}</Text>
                    </View>
                </View>
                {/* details */}
                {
                    movieId.Released !== 'N/A' && 
                    <View style={styles.detailsCnt}>
                        <View style={styles.iconCnt}>
                            <Icon 
                                name='map-marker-alt'
                                size={25}
                                type='font-awesome-5'
                                color='#6a2c70'
                            />
                        </View>
                        <Text style={styles.detailsText}>{movieId.Released} in {movieId.Country}</Text>
                    </View>
                }
                {
                    movieId.Runtime !== 'N/A' && 
                    <View style={styles.detailsCnt}>
                        <View style={styles.iconCnt}>
                            <Icon 
                                name='clock'
                                size={25}
                                type='font-awesome-5'
                                color='#99ddcc'
                            />
                        </View>
                        <Text style={styles.detailsText}>{movieId.Runtime}</Text>
                    </View>
                }
                {
                    movieId.Language !== 'N/A' && 
                    <View style={styles.detailsCnt}> 
                        <View style={styles.iconCnt}>
                            <Icon 
                                name='language'
                                size={25}
                                type='font-awesome-5'
                                color='#3f72af'
                            />
                        </View>
                        <Text style={styles.detailsText}>{movieId.Language}</Text>
                    </View>
                }
                {
                    movieId.imdbRating !== 'N/A' && 
                    <View style={styles.detailsCnt}>
                        <View style={styles.iconCnt}>
                            <Icon 
                                name='star'
                                size={25}
                                type='font-awesome-5'
                                solid
                                color='#fce38a'
                            />
                        </View>
                        <Text style={styles.detailsText}>{movieId.imdbRating}</Text>
                    </View>
                }
                {
                    movieId.Genre !== 'N/A' && 
                    <View style={styles.detailsCnt}>
                        <View style={styles.iconCnt}>
                            <Icon 
                                name='video'
                                size={25}
                                type='font-awesome-5'
                                color='#444f5a'
                            />
                        </View>
                        <Text style={styles.detailsText}>{movieId.Genre}</Text>
                    </View>
                }
                {
                    movieId.Awards !== 'N/A' && (
                        <View style={styles.detailsCnt}>
                            <View style={styles.iconCnt}>
                                <Icon 
                                    name='award'
                                    size={25}
                                    type='font-awesome-5'
                                    color='#ff9a00'
                                />
                            </View>
                            <Text style={styles.detailsText}>{movieId.Awards}</Text>
                        </View>
                    )
                }
                {
                    movieId.Actors !== 'N/A' && (
                        <View style={styles.detailsCnt}>
                            <View style={styles.iconCnt}>
                                <Icon 
                                    name='user-friends'
                                    size={25}
                                    type='font-awesome-5'
                                    color='#6639a6'
                                />
                            </View>
                            <Text style={styles.detailsText}>{movieId.Actors}</Text>
                        </View>
                    )
                }
            </View>
        </ScrollView>
    )
};