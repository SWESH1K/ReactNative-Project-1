import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  ScrollView,
} from 'react-native'
import Title from './components/Title';
import Logo from './components/Logo';
import LinearGradient from 'react-native-linear-gradient'
import ListofPosts from './components/ListofPosts';
const lightBackgroundColor = ['#f5f7fa', '#c3cfe2']; // Example gradient colors for light mode
const darkBackgroundColor = ['#232526', '#414345']; // Example gradient colors for dark mode

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <LinearGradient
        colors={isDarkMode ? darkBackgroundColor : lightBackgroundColor}
        style={style.viewStyle}
    >
      <SafeAreaView>
        <Logo />
        <ListofPosts />
      </SafeAreaView>
        
    </LinearGradient>
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

export default App;