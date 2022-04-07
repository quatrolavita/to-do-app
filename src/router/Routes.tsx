import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// routs
import routerPath from './routerPath';

function Navigation() {
    return (
        <Router>
            <Routes>
                {routerPath.map((route) => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default Navigation;
