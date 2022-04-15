import React from 'react';
import ClassNames from 'classnames/bind';

// styles
import { useDispatch } from 'react-redux';
import styles from './DeleteToDo.module.css';
import { deleteToDoCard } from '../../../store/actions';

const cx = ClassNames.bind(styles);

type DeleteToDoProps = {
    showDeleteButton: boolean;
    updateState: boolean;
    pk: number;
};

function DeleteToDo({
    pk,
    updateState = false,
    showDeleteButton = false,
}: DeleteToDoProps) {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(deleteToDoCard(pk));
    };

    const deleteButtonStyles = cx({
        deleteButton: true,
        updateState,
        deleteButtonAppearance: showDeleteButton,
    });

    return (
        <button
            className={deleteButtonStyles}
            type="submit"
            onClick={onClick}
        />
    );
}

export default DeleteToDo;
