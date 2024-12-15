import { StyleSheet } from "react-native";

const EpisodeCardStyles = StyleSheet.create({
    viewStyle: {
        width: 300,
        height: 400,
        boxShadow: "2px 2px 7px grey",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: 'grey',
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 5,
        margin: 5,
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 2,
    },
    buttonStyle: {
        backgroundColor: 'white',
        color: 'black',
    },
    lineStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        margin: 2,
    }
})

export default EpisodeCardStyles;