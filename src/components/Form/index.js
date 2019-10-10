import React, { Component } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik, Field } from 'formik';

const CustomTextInput = ({ form: { errors, touched, values, handleChange, handleBlur }, field: { name }, placeholder }) => {
    return (
        <View>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10 }}
                onChangeText={handleChange(name)}
                onBlur={handleBlur(name)}
                value={values[name]}
                placeholder={placeholder}
            />
            {errors[name] && <Text>{errors[name]}</Text>}
        </View>
    )
}

class FormikForm extends Component {
    onSubmit = (values) => {
        const { onSubmit, children } = this.props
        //redux dispatch
        onSubmit(values);
    }
    render() {
        const { children } = this.props
        return (
            <Formik
                initialValues={{ email: 'FErdi' }}
                onSubmit={this.onSubmit}
            >
                {props => {
                    return (
                        <View>
                            {children}
                            <Button onPress={props.handleSubmit} title="Submit" />
                        </View>
                    )
                }}
            </Formik>
        )
    }
}

export { CustomTextInput, FormikForm }