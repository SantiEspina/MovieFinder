import 'react-native-gesture-handler';
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon, Divider, Input, Image } from 'react-native-elements';

import { useAppDispatch, RootState } from '../../../redux';
import { getMovies } from '../../../redux/movies/actions';
import { Movie } from '../../../redux/movies/types';
import { MovieCard } from '../movieCard';

import './styles';
import { styles } from './styles';

export const MovieScreen: React.FC = (): JSX.Element => {
    const [ title, setTitle ] = React.useState<string>('');
    const dispatch = useAppDispatch();
    const { loader, movies } = useSelector((state: RootState) => state.movies);

    const handleChange = (title: string) => {
        setTitle(title);
        dispatch(getMovies(title));
    };

    const renderComponent = (arr: Movie[]) => {
        return (
          <SafeAreaView
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flex: 1,
              marginVertical: 10
            }}
          >
            <FlatList
              data={arr}
              keyExtractor={(item: Movie):string => item.imdbID}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return <MovieCard movie={item} />;
              }}
            />
          </SafeAreaView>
        );
    };
    
    if(!title) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>Try searching for a movie title!</Text>
        </View>
    }
    
    return (
        <View style={{flex: 1}}>
            <Input 
                value={title}
                onChangeText={handleChange}
                placeholder={`Movie's title...`}
                rightIcon={
                    <Icon 
                        name='search'
                        type='font-awesome-5'
                        size={15}
                    />
                }
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                containerStyle={styles.containerStyle}
            />
            <Divider />
            {
                movies.length > 0 && renderComponent(movies)
            }
            {
                loader && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image 
                            source={require('../../../assets/img/loader.gif')}
                            style={{width: 200, height: 250}}
                        />
                    </View>
                )
            }
        </View>
    )
};