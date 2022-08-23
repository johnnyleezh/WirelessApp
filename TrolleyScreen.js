import React, {Component} from 'react';
import {StyleSheet, Button, View, Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

export default class ChickenScreen extends Component{

render()
{
    return(
        <View style={styles.container}>
                <Text style={styles.title} >Your Trolley</Text>

        </View>
    )
}}

const styles = StyleSheet.create({
    title:{
        fontSize:50
    },
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button:{
        marginLeft: 10,
        marginRight: 10,
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 20,
        marginBottom: 20,
    },
});
