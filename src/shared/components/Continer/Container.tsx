import React, { ReactNode } from 'react';

// styles
import styles from './Container.module.css';

type ContainerProps = {
    children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
