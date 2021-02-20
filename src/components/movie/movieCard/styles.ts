import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        shadowColor: "#000",
        opacity: 0.8,
        shadowOffset: {
        width: 0,
        height: 10,
        },
        overflow: "hidden",
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
        borderRadius: 8,
        height: "auto",
        position: "relative",
    },
    headerCnt:{
        flex: 1,
        alignItems: 'center',
        padding: 5,
    },
    img: {
        width: 70,
        height: 'auto',
        borderRadius: 5,
        resizeMode: 'contain'
    },
    titleCnt: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 3
    },
    year: {
        fontWeight: 'bold'
    },
    look: {
        position: 'absolute',
        top: -5,
        right: -5
    }
});