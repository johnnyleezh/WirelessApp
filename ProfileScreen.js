import React, { Component } from 'react';
import { StyleSheet, Button, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import {InputWithLabel, HistoryTable} from '../UI';


export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animal: "Dog",
            description: "Words",
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title} >Your Account</Text>
                <View style={styles.profileContainer}>
                    <InputWithLabel
                        label='Name'
                        orientation={'horizontal'}
                        editable={false}
                        flexLabel={1}
                        flexText={3}
                        text={'University Tunku Abdul Rahman'}
                    ></InputWithLabel>
                    <InputWithLabel
                        label='Email'
                        orientation={'horizontal'}
                        editable={false}
                        flexLabel={1}
                        flexText={3}
                        text={'utar.gmail.com'}
                    ></InputWithLabel>
                </View>
                <Text style={styles.title} >Your History</Text>
                <View style={styles.historyContainer}>
                    <HistoryTable
                    date={22}
                    movie={'Frozen'}
                    ticket={3}
                    time={'11:30pm'}
                    price={45}></HistoryTable>
                    
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 50
    },
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    profileContainer: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
    },
    historyContainer: {
        paddingTop: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
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
