import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerCnt: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 15,
        borderRadius: 15,
        width: "90%",
        marginBottom: 10,
        borderColor: "#fff",
        borderWidth: 1,
        marginTop: 30,
    },
    headerImg: {
        borderRadius: 5,
        height: 200,
        width: 200,
        marginVertical: 10,
        resizeMode: 'contain'
    },
    title: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 17, 
        color: '#0b0a0a'
    },
    plot: {
        backgroundColor: 'rgba(256,256,256,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 5,
        marginVertical: 5,
        opacity: 0.7,
        elevation: 1
    },
    iconCnt: {
        justifyContent: 'center',
        width: 30
    },
    detailsCnt: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
    },
    detailsText: {
        fontSize: 15,
        marginLeft: 25,
        width: '80%',
        color: '#403a3a'
    }
});