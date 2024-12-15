import { 
    View, 
    Image,
    StyleSheet,
    useColorScheme, 
} from 'react-native'
import React from 'react'

const Logo = () => {
    const isDarkMode = useColorScheme() == 'dark'
    return (
        <Image
        source={require('../assets/logo.png')}
        style={styles.imageStyle}
        />
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        alignItems: 'center',
        height: 200,
        // backgroundColor: 'red',
    },
    imageStyle: {
        width:400,
        height: 200,
        // backgroundColor: 'red',
    }
})

export default Logo