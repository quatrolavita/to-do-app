import React, { useState } from 'react';

// styles
import { IToDoCard } from 'shared/interfaces/IToDoCard';
import styles from './ToDoCard.module.css';

const boolStatusTask = (status: 'IP' | 'DN') => status === 'DN';

export default function ToDoCard({ description, status }: IToDoCard) {
    const [isTaskComplete, setTaskComplete] = useState(boolStatusTask(status));

    const onChange = (): void => {
        setTaskComplete(!isTaskComplete);
    };

    return (
        <div className={styles.toDoCard}>
            <input
                type="checkbox"
                checked={isTaskComplete}
                onChange={onChange}
                className={styles.checkBox}
            />
            <p> {description}</p>
        </div>
    );
}
