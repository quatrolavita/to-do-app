import React from 'react';
import { Formik, Form, Field } from 'formik';

// styles
import { ISignInData } from 'shared/interfaces/ISignInData';
import styles from './SignInForm.module.css';

// validate
import SignInSchema from '../../constants/validationSignInSchema';

// types

type SignUpFormProps = {
    onSubmit: (values: ISignInData) => void;
};

export default function SignInForm({ onSubmit }: SignUpFormProps) {
    return (
        <div className={styles.signUpFormContainer}>
            <h1 className={styles.h1}>Sign in</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={SignInSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles.defaultInputField}>
                            <label htmlFor="username">
                                <p>Username</p>
                                <Field name="username" />
                                {errors.username && touched.username && (
                                    <div>{errors.username}</div>
                                )}
                            </label>
                        </div>
                        <div className={styles.defaultInputField}>
                            <label htmlFor="password">
                                <p>Password</p>
                                <Field name="password" type="password" />
                                {errors.password && touched.password && (
                                    <div>{errors.password}</div>
                                )}
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
