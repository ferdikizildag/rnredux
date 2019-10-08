import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import {required,email} from '../../utils/validations';

let MyTextInput = ({ input, placeholder, meta, ...inputProps }) => {
    return (
        <>
            <View style={{ backgroundColor: 'green' }}>
                <TextInput
                    {...inputProps}
                    onChangeText={input.onChange}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    placeholder={placeholder}
                    value={input.value}
                />
            </View>
            {meta.visited && meta.error && <Text style={{color:'red'}}>{meta.error}</Text>}
        </>
    );
}
class ContactForm extends Component {
    
    render() {
        const {onSubmit}=this.props;
        return (
            <View>
                <View>
                    <Text>First Name</Text>
                    <Field validate={[required,email]} placeholder='FirstName' name="firstName" component={MyTextInput} type="text" />
                    <Text>Last Name</Text>
                    <Field placeholder='LastName' name="lastName" component={MyTextInput} type="text" />
                    <TouchableHighlight onPress={onSubmit}>
                        <Text>Save</Text>
                    </TouchableHighlight>
                </View>

            </View>
        )
    }
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact',
    initialValues:{
        firstName:'Ferdi'
    }
})(ContactForm)

export default ContactForm