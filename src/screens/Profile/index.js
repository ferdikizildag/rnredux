import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ferdi'
        }
    }
    render() {
        return (
            <View style={{paddingVertical:50,paddingHorizontal:50}}>
                <Text>Profile</Text>
            </View>
        )
    }
}

export default Profile;
