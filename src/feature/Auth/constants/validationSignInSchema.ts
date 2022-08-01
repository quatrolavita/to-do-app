import * as Yup from 'yup';

export default Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    password: Yup.string().required('No password provided.'),
});
