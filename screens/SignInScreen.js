import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Form from '../components/Form';
import * as Yup from 'yup';
import firebase from '../firebase';




const SignInScreen = ({ navigation }) => {

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Please enter a valid email')
            .email()
            .label('Email'),
        password: Yup.string()
            .required()
            .min(6, 'Password must have at least 6 characters')
            .label('Password'),
        confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Confirmation password must match password'),
    });

    const [formError, setFormError] = useState('');

    async function handleOnSubmit(values) {
        const { email, password, confirmPassword } = values;
        confirmPassword ?
            firebase.auth().createUserWithEmailAndPassword(email, password).then(navigation.navigate('ScheduleScreen')).catch(error =>
                setFormError(error.message))
            :
            firebase.auth().signInWithEmailAndPassword(email, password).then(navigation.navigate('ScheduleScreen')).catch(error =>
                setFormError(error.message));
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Form
                    initialValues={{
                        email: '',
                        password: '',
                        confirm: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleOnSubmit}
                >
                    <Form.Field
                        name="email"
                        leftIcon="email"
                        placeholder="Enter email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <Form.Field
                        name="password"
                        leftIcon="lock"
                        placeholder="Enter password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    <Form.Field
                        name="confirmPassword"
                        leftIcon="lock"
                        placeholder="Confirm password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    <Form.Button title={values => values.confirm ? 'Sign up' : 'Log in'} />
                    {<Form.ErrorMessage error={formError} visible={true} />}
                </Form>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignInScreen; 