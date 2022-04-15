import React, { createRef, useState } from 'react';

// styles
import { IToDoCard } from 'shared/interfaces/IToDoCard';
import { useDispatch } from 'react-redux';
import styles from './ToDoCard.module.css';

// components
import DeleteToDo from '../Controls/Delete/DeleteToDo';
import UpdateToDo from '../Controls/Update/UpdateToDo';
import { updateToDoCard } from '../../store/actions';

const boolStatusTask = (status: 'IP' | 'DN') => status === 'DN';

export default function ToDoCard({ description, status, pk }: IToDoCard) {
    const dispatch = useDispatch();

    const [toDoCardDescription, setDescription] = useState(description);

    const [isTaskComplete, setTaskComplete] = useState<boolean>(
        boolStatusTask(status)
    );
    const [showControls, setShowControls] = useState<boolean>(false);
    const [isUpdateState, setUpdateState] = useState<boolean>(false);
    const toDoCardInputRef = createRef<HTMLInputElement>();

    const onChange = (event: any): void => {
        setDescription(event?.target?.value);
    };

    const onClickUpdateButton = () => {
        setUpdateState(true);
        toDoCardInputRef.current?.focus();
    };

    const onClickSubmitUpdateButton = () => {
        setUpdateState(false);
        dispatch(
            updateToDoCard({
                description,
                status: 'IP',
                pk,
            })
        );
    };

    const onHoverHandler = () => {
        setShowControls(true);
    };
    const onUnHoverHandler = () => {
        setShowControls(false);
        setUpdateState(false);
    };

    return (
        <div
            onMouseEnter={onHoverHandler}
            onMouseLeave={onUnHoverHandler}
            className={styles.toDOCardWrapper}
        >
            <div className={styles.toDoCard}>
                <input
                    type="text"
                    disabled={!isUpdateState}
                    value={toDoCardDescription}
                    onChange={onChange}
                    className={styles.cardTextDescriptionInput}
                    ref={toDoCardInputRef}
                />
            </div>
            <div className={styles.controlsWrapper}>
                <DeleteToDo
                    pk={pk}
                    showDeleteButton={showControls}
                    updateState={isUpdateState}
                />
                <UpdateToDo
                    pk={pk}
                    updateState={isUpdateState}
                    showUpdateButton={showControls}
                    onClickUpdate={
                        isUpdateState
                            ? onClickSubmitUpdateButton
                            : onClickUpdateButton
                    }
                />
            </div>
        </div>
    );
}
