import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'assets/css/App.css';
import 'assets/css/reset.css';
import Navigation from 'router/Routes';
import Header from 'shared/components/Header/Header';
import Logo from 'shared/components/Logo/Logo';
import configureStore from './store';

const { store, persistor } = configureStore();

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Header left={<Logo />} />
                <Navigation />
            </PersistGate>
        </Provider>
    );
}

export default App;
