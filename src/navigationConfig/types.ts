import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { Movie } from '../redux/movies/types';

export type RootStackParamList = {
    MovieId: { id: string };
    MovieScreen: undefined;
    MovieCard: {
        movie: Movie
    };
};

export type RouteStackParamList<T extends keyof RootStackParamList> = {
    navigation: StackNavigationProp<RootStackParamList, T>,
    route: RouteProp<RootStackParamList, T>
};