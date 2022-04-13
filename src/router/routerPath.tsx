import React from 'react';

// pages
import Index from 'pages/Index';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';

export default [
    { path: '/', element: <Index /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/sign-in', element: <SignIn /> },
];
