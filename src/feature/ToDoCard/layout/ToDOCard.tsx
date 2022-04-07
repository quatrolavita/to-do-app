import React from 'react';

// styles
import { IToDoCard } from 'shared/interfaces/IToDoCard';
import styles from './ToDoCard.module.css';

type ToDoCardProps = IToDoCard;

export default function ToDoCard({ description }: ToDoCardProps) {
    return (
        <div className={styles.toDoCard}>
            <p> {description}</p>
            <input type="checkbox" />
        </div>
    );
}
