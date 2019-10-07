import React, { Component, Fragment } from 'react';
import { View, Picker, Text } from 'react-native';

export default class CityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: ''
        }
    }
    render() {
        const { data } = this.props;
        return (
            <View>
                <Text>Cities</Text>
                {
                    data.map((city) => (
                        <Text>{city.name}</Text>
                    ))
                }
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedCity}
                    
                    onValueChange={(itemValue) =>this.setState({ selectedCity: itemValue })}>
                    {
                        data.map((city) => (
                            <Picker.Item label={city.name} value={city.code} />
                        ))
                    }


                </Picker>
            </View>
        );
    }
}
