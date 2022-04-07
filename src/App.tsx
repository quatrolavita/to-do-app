import React from 'react';
import { Provider } from 'react-redux';
import 'assets/css/App.css';
import Navigation from 'router/Routes';
import configureStore from './store';

const { store } = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}

export default App;
