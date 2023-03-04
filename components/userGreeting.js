import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserGreeting = ({ username }) => {
    return (
        <View style={styles.welcomeContainer}>
            <Text style = {styles.welcome}>
                Welcome, {username}!</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 20,
        margin: 10
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 30
    }
});

export default UserGreeting;