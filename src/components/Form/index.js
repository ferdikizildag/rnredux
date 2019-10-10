import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik, Field } from 'formik';

const CustomTextInput = ({ form, field: { name }, placeholder }) => {
    return (
        <TextInput
            style={{ borderWidth: 1, marginBottom: 10 }}
            onChangeText={form.handleChange(name)}
            onBlur={form.handleBlur(name)}
            value={form.values[name]}
            placeholder={placeholder}
        />
    )
}

class FormikForm extends Component {
    onSubmit=(values)=>{
        const {onSubmit,children}=this.props
        //redux dispatch
        onSubmit(values);
    }
    render() {
        const {children}=this.props
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

export {CustomTextInput,FormikForm}