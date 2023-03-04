import React from 'react';
import { View,Text } from 'react-native';

const UserGreeting = ({ username }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style = {{fontWeight: 'bold'}}>
                Welcome, {username}!</Text>
            </View>
    );
}

export default UserGreeting;