import React from 'react';
import { useDispatch } from 'react-redux';

// components
import Container from 'shared/components/Continer/Container';
import SignUpForm, {
    onSubmitAttributes,
} from 'feature/Auth/layout/SignUp/SingUpForm';
import { singUpRequest } from '../feature/Auth/store/actions';

// helpers
import { deleteObjectProperty } from '../shared/helpers/utils';

// actions

function SignUp() {
    const dispatch = useDispatch();

    const onSubmit = (values: onSubmitAttributes) => {
        dispatch(
            singUpRequest(deleteObjectProperty(values, 'confirmPassword'))
        );
    };

    return (
        <Container>
            <SignUpForm onSubmit={onSubmit} />
        </Container>
    );
}

export default SignUp;
