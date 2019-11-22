import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import CityList from '../../components/CityList';
import { addUser, getRepos } from './action';
import ContactForm from './form';
import { FormikForm, CustomTextInput } from '../../components/Form';
import { Field } from 'formik';
import SplashScreen from 'react-native-splash-screen'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
LocaleConfig.locales['fr'] = {
    monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Pazartesi', 'Salı', 'Çarşamba', 'PErşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    dayNamesShort: ['Pzt', 'Sal.', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';
const email = (value) => {
    let errorMessage;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = 'Invalid email address';
    }
    return errorMessage;
};
const required = (value) => {
    return value ? undefined : 'required'
};

class CustomDayComponent extends Component {
    render() {
        const { date, state, marking, onPress } = this.props;
        return (
            <TouchableOpacity activeOpacity={1} style={{ backgroundColor: marking.selected ? 'orange' : 'white' }} onPress={() => onPress(date)}>
                <Text style={{ textAlign: 'center', color: state === 'today' ? 'red' : 'black' }}>{date.day}</Text>
                {
                    state === 'today' && <Text>Today</Text>
                }
                {
                    marking && marking.soldOut && <Text>Satıldı</Text>
                }
            </TouchableOpacity>
        )
    }
}

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
            username: 'CCC',
            selectedDates: {
                '2019-11-23': { soldOut: false, blocked: false, selected: true },
                '2019-11-24': { soldOut: false, blocked: false, selected: true },
                '2019-11-25': { soldOut: false, blocked: true, selected: true },
                '2019-11-26': { soldOut: false, blocked: true, selected: true }
            },
            pressCount: 0
        }

    }
    componentDidMount() {
        const request = {
            page: 1,
            perPage: 20
        }
        this.props.getRepos(request)
        SplashScreen.hide()
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
    editUser = (name) => {
        alert(name)
    }
    formSubmit = () => {
        const { contactForm: { values } } = this.props;
        console.log(values)
    }
    formikSubmit = (e) => {

    }
    onDayPress = (day) => {
        let newSelectedDates = { ...this.state.selectedDates };
        if (typeof this.state.selectedDates[day.dateString] != 'object') {
            newSelectedDates[day.dateString] = {
                selected: true
            }
        } else {
            delete newSelectedDates[day.dateString]
        }
        this.setState({ selectedDates: newSelectedDates, pressCount: this.state.pressCount + 1 })
    }
    render() {
        const { user: { name }, cities, country, districts } = this.state;
        const { users } = this.props;
        return (
            <View style={{ paddingVertical: 50, paddingHorizontal: 20 }}>
                {/* <Text>{country.name}</Text>
                <Text>{country.code}</Text>
                <Text style={{ color: 'red' }}>Cities</Text>
                <CityList data={cities} />
                <Text style={{ color: 'red' }}>Districts</Text>
                {
                    districts.map((district, key) => {
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
                        users.map((user, key) => (
                            <TouchableHighlight key={key} onPress={() => this.editUser(user.name)}>
                                <Text>{user.name}</Text>
                            </TouchableHighlight>
                        ))
                    }
                </View>

                <ContactForm onSubmit={this.formSubmit}></ContactForm> */}
                {/* <FormikForm onSubmit={(values) => console.log('xxx', values)}>
                    <Field validate={required} name="name" placeholder="Name" component={CustomTextInput} />
                    <Field name="surname" placeholder="Surname" component={CustomTextInput} />
                    <Field validate={email} name="email" placeholder="Email" component={CustomTextInput} />
                </FormikForm> */}
                <CalendarList
                    horizontal={false}
                    calendarWidth={320}
                    scrollEnabled={true}
                    onDayPress={(day) => this.onDayPress(day)}
                    dayComponent={CustomDayComponent}
                    markedDates={this.state.selectedDates}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: 'blue',
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}

                />
            </View>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        users: store.home.users,
        contactForm: store.form.contact
    };
};

const mapDispatchToProps = {
    getRepos,
    addUserDispatch: (user) => {
        return (dispatch) => {
            dispatch(addUser(user))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
