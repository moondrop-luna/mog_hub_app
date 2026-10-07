import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainTxt: {
        paddingTop: 50,
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30,  
        textAlign: 'center',
    },

    slogan: {
        color: 'orange',
        fontSize: 20,
        textAlign: 'center',
    },

    mogHubLogo: {
        height: 350,
        width: 350,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputFlex: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-evenly',
    },

    enterTxt: {
        fontWeight: 'bold',
    },

    userInputTxt: {
        borderBottomWidth: 1,
    },

    radioContainer: {
        flex: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },

    radioButton: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    radioLabel: {
        marginLeft: 5,
        fontSize: 15,
        color: 'black',
    },

    radioGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#e6f7ff',
        padding: 15,
        elevation: 5,
        shadowColor: '#404040',
        shadowOffset: { 
            width: 0, 
            height: 1 
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    petContainer: {
        flex: 5,
    },

    petTxt: {
        fontSize: 15,
        marginVertical: 5,
        borderBlockColor: '#ccc',
        borderBottomWidth: 1,
    },

    bookingTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    bookingSubTxt: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10,
    },

    bookingImg: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    bookingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default styles;