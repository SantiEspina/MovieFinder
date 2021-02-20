import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputContainerStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%', 
        borderBottomWidth: 0
    },
    inputStyle: {
        marginLeft: 25,
        maxWidth: '80%'
    },
    containerStyle: {
        backgroundColor:'#ccc', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
        borderRadius: 30, 
        paddingHorizontal: 10, 
        marginVertical: 25, 
        shadowColor: '#000', 
        opacity: 0.8,
        shadowOffset: {
            width: 0,
            height: 6,
        }, 
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 7,
    },

});