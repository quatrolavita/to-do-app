import React from 'react';

// images
import logo from './img/logo.svg';

// styles
import styles from './Logo.module.css';

export default function Logo() {
    return <img src={logo} alt="logo" className={styles.logo} />;
}
