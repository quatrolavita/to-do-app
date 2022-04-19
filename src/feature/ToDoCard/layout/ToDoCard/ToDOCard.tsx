import React, { createRef, useState, useEffect } from 'react';

// styles
import { IToDoCard } from 'shared/interfaces/IToDoCard';
import { useDispatch } from "react-redux";
import useStateCallback from "shared/hooks/useStateWithCallback";
import styles from "./ToDoCard.module.css";

// components
import DeleteToDo from '../Controls/Delete/DeleteToDo';
import UpdateToDo from '../Controls/Update/UpdateToDo';
import { updateToDoCard } from '../../store/actions';

const statusToBool = (status: 'IP' | 'DN') => status === 'DN';
const boolToStatus = (status: boolean) => {
    if (status) {
        return 'DN';
    }
    return 'IP';
};

export default function ToDoCard({ description, status, pk }: IToDoCard) {
    const dispatch = useDispatch();

    const [toDoCardDescription, setDescription] = useState(description);

    const [isTaskComplete, setTaskComplete] = useStateCallback(
      statusToBool(status)
    );
    const [showControls, setShowControls] = useState<boolean>(false);
    const [isUpdateState, setUpdateState] = useState<boolean>(false);
    const toDoCardInputRef = createRef<HTMLInputElement>();

    const onChange = (event: any): void => {
        setDescription(event?.target?.value);
    };

    const onChangeCheckBox = () => {
        setTaskComplete(!isTaskComplete, (state) => {
            dispatch(
              updateToDoCard({
                  description: toDoCardDescription,
                  status: boolToStatus(state),
                  pk
              })
            );
        });
    };

    const onClickUpdateButton = () => {
        setUpdateState(true);
        toDoCardInputRef.current?.focus();
    };

    useEffect(() => {
        if (isUpdateState) {
            toDoCardInputRef.current?.focus();
        }
    }, [isUpdateState, toDoCardInputRef]);

    const onClickSubmitUpdateButton = () => {
        setUpdateState(false);
        dispatch(
            updateToDoCard({
                description: toDoCardDescription,
                status: boolToStatus(isTaskComplete),
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
                    type="checkbox"
                    className={styles.checkBoxToDoCard}
                    checked={isTaskComplete}
                    onChange={onChangeCheckBox}
                />
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
