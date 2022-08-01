import React, { ReactNode } from 'react';

// styles
import styles from './Header.module.css';

type HeaderProps = {
    left?: ReactNode;
    right?: ReactNode;
    center?: ReactNode;
};

export default function Header({ left, right, center }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {left} {center} {right}
            </div>
        </header>
    );
}

Header.defaultProps = {
    left: null,
    right: null,
    center: null,
};
