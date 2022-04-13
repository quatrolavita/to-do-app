import React from 'react';
import { useDispatch } from 'react-redux';

// components
import Container from 'shared/components/Continer/Container';
import SignInForm from 'feature/Auth/layout/SignIn/SingInForm';
import { ISignInData } from 'shared/interfaces/ISignInData';
import { getTokenRequest } from '../feature/Auth/store/actions';

// actions

function SignIn() {
    const dispatch = useDispatch();

    const onSubmit = (values: ISignInData) => {
        dispatch(getTokenRequest(values));
    };

    return (
        <Container>
            <SignInForm onSubmit={onSubmit} />
        </Container>
    );
}

export default SignIn;
