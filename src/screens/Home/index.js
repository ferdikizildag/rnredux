import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import CityList from '../../components/CityList';
import { addUser } from './action';

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
            },
            user: {
                name: '',
                surname: 'Kızıldağ'
            },
            username: 'CCC'
        }

    }
    onChangeUserName = (value) => {
        const { user } = this.state;
        this.setState({ user: { ...user, name: value } });
    }
    saveUser = () => {
        const { user } = this.state;
        const { addUserDispatch } = this.props
        addUserDispatch(user)
    }
    editUser=(name)=>{
        alert(name)
    }   
    render() {
        const { user: { name }, cities, country, districts } = this.state;
        const { users } = this.props;
        return (
            <View style={{ paddingVertical: 50, paddingHorizontal: 50 }}>
                <Text>{country.name}</Text>
                <Text>{country.code}</Text>
                <Text style={{ color: 'red' }}>Cities</Text>
                <CityList data={cities} />
                <Text style={{ color: 'red' }}>Districts</Text>
                {
                    districts.map((district,key) => {
                        let countryDistrict = '90-' + district;
                        return <Text key={key}>{countryDistrict}</Text>
                    })
                }
                <Text>Redux Example</Text>
                <Text>Name: </Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.onChangeUserName}
                    value={name}
                />
                <TouchableHighlight onPress={this.saveUser}>
                    <Text style={{ backgroundColor: 'blue', color: 'white', marginTop: 10, padding: 5, textAlign: 'center' }}>Save</Text>
                </TouchableHighlight>
                <View>
                    <Text>Users</Text>
                    {
                        users.map((user,key)=>(
                            <TouchableHighlight key={key} onPress={()=>this.editUser(user.name)}>
                                <Text>{user.name}</Text>
                            </TouchableHighlight>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        users: store.home.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUserDispatch: (user) => {
            dispatch(addUser(user))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
