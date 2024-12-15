import React from 'react'
import { 
    View, 
    Text,
    SafeAreaView,
    useColorScheme,
    StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const lightBackgroundColor = ['#f5f7fa', '#c3cfe2']; // Example gradient colors for light mode
const darkBackgroundColor = ['#232526', '#414345']; // Example gradient colors for dark mode

const Title = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView>
            <View>
                <Text style={[style.titleStyle, { color: isDarkMode ? 'white' : 'black' }]}>Attack on Titan</Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    },
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Title