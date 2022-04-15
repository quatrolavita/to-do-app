import React from 'react';
import ClassNames from 'classnames/bind';

// styles
import styles from './UpdateToDo.module.css';

const cx = ClassNames.bind(styles);

type UpdateToDoProps = {
    showUpdateButton: boolean;
    onClickUpdate: () => void;
    updateState: boolean;
    pk: number;
};

function UpdateToDo({
    pk,
    onClickUpdate,
    updateState = false,
    showUpdateButton = true,
}: UpdateToDoProps) {
    const updateButtonStyles = cx({
        updateButton: true,
        submitState: updateState,
        updateButtonAppearance: showUpdateButton,
    });

    return (
        <button
            type="button"
            className={updateButtonStyles}
            onClick={onClickUpdate}
        />
    );
}

export default UpdateToDo;
