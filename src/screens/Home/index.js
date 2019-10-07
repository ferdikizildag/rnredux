import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CityList from '../../components/CityList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            districts: ['Kazan', 'Kadıköy'],
            cities: [
                {
                    name: 'Ankara',
                    code: '06'
                },
                {
                    name: 'İstanbul',
                    code: '34'
                }
            ],
            country: {
                name: 'Turkey',
                code: '90'
            }
        }

    }
    render() {
        const { cities, country, districts } = this.state;
        return (
            <View style={{ paddingVertical: 50, paddingHorizontal: 50 }}>
                <Text>{country.name}</Text>
                <Text>{country.code}</Text>
                <Text style={{color:'red'}}>Cities</Text>
                <CityList data={cities}/>
                <Text style={{color:'red'}}>Districts</Text>
                {
                    districts.map((district) => {
                        let countryDistrict= '90-'+district;
                        return <Text>{countryDistrict}</Text>
                    })
                }
            </View>
        )
    }
}

export default Home;
