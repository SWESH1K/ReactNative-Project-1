import { View, Text, FlatList, Image, Button, useColorScheme } from 'react-native'
import React from 'react'
import EpisodeCardStyles from '../utils/EpisodeCard'

const ListofPosts = () => {

    const posts = [
        {
            episode_no: 1,
            title: "To You, in 2000 Years: The Fall of Shiganshina, Part 1",
            rating: 9.1,
            description: "After 100 years of peace, humanity is suddenly reminded of the terror of being at the Titans' mercy."
        },
        {
            episode_no: 2,
            title: "That Day: The Fall of Shiganshina, Part 2",
            rating: 8.5,
            description: "After the Titans break through the wall, the citizens of Shiganshina must run for their lives. Those that do make it to safety find a harsh life waiting for them, however."
        },
        {
            episode_no: 3,
            title: "A Dim Light Amid Despair: Humanity's Comeback, Part 1",
            rating: 8.1,
            description: "Eren begins his training with the Cadet Corps, but questions about his painful past overwhelm him. When he struggles with a maneuvering exercise, Berholt and Reiner offer kindly advice."
        },
        {
            episode_no: 4,
            title: "The Night of the Closing Cermony: Humaity's Comeback, Part 2",
            rating: 8.5,
            description: "Annie proves her skill in a sparring session, Jan dreams of serving alongside the King, and graduation day brings shocking revelations - along with a sudden outbreak of violence."
        },
        {
            episode_no: 5,
            title: "First Battle: The Struggle for Trost, Part 1",
            rating: 9.2,
            description: "Eren faces off against the Colossal Titan after it appears out of nowhere and knocks a strategic hole in Wall Rose's gate. As Titans swarm the city, the newly graduated Cadets are called in to fight in a brutal battle."
        },
    ];

    const isDarkMode = useColorScheme() === 'dark'
    return (
    <View style={{flex:1, alignItems: 'center', width: 400}}>
      <FlatList 
        data={posts}
        keyExtractor={item => item.episode_no.toString()}
        renderItem={({item}) => 
            <View style={[EpisodeCardStyles.viewStyle, {backgroundColor: isDarkMode? 'grey': '#F2F3F5'}]}>
                <Image 
                    source = {require('../assets/AOT.png')}
                    style = {EpisodeCardStyles.imageStyle}
                />
                <Text style={EpisodeCardStyles.titleStyle}>{item.episode_no.toString()}. {item.title}</Text>
                <Text>Rating: {item.rating.toString()}/10</Text>
                <View
                    style={EpisodeCardStyles.lineStyle}
                />
                <Text>{item.description}</Text>
                <Button 
                    title='Watch Now' 
                    onPress={() => {return alert("Thankyou for Watching!")}}
                    color={isDarkMode? 'darkgrey': "black"}
                    touchSoundDisabled = {false}
                />
            </View>
        }
      />
    </View>
  )
}

export default ListofPosts