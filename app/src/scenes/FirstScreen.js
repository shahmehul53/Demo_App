import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const FirstScreen = ({navigation}) => {
    return (
        <View>
            <Text>FirstScreen</Text>
            <Button title="Go to Second" onPress={() => navigation.navigate('Second')}/>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({})
