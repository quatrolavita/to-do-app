import React, { useState } from 'react';

// styles
import ClassNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import styles from './Create.module.css';

// img
import createButtonOpenImg from './img/createClose.svg';
import createButtonCloseImg from './img/createOpen.svg';
import { createToDoCard } from '../../../store/actions';

const cx = ClassNames.bind(styles);

function CreateToDo() {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState('');

    const imageCloseStyles = cx({
        createCloseImg: true,
        open: isOpen,
        appearanceAfterClose: !isOpen,
    });

    const imageOpenStyles = cx({
        createOpenImg: true,
        openActive: isOpen,
    });

    const inputStyles = cx({
        toDoCardDescriptionInputWrapper: true,
        openActive: isOpen,
        inputDisappearance: !isOpen,
    });

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const onChangeTextArea = (event: any) => {
        setDescription(event?.target?.value);
    };

    const handleSubmit = () => {
        setIsOpen(false);
        dispatch(createToDoCard({ description, status: 'IP' }));
    };
    const closeInputField = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.fixedControls}>
            <button
                className={styles.createToDoButton}
                onClick={handleClick}
                type="button"
            >
                <img
                    src={createButtonOpenImg}
                    alt="create button open"
                    className={imageCloseStyles}
                />
                <img
                    src={createButtonCloseImg}
                    alt="create button close"
                    className={imageOpenStyles}
                />
            </button>
            <div className={inputStyles}>
                <textarea
                    className={styles.toDoCardDescriptionInput}
                    value={description}
                    onChange={onChangeTextArea}
                />
                <div className={styles.controlButtonBox}>
                    <button
                        className={styles.createButton}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Create
                    </button>
                    <button
                        className={styles.dismissButton}
                        type="button"
                        onClick={closeInputField}
                    >
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateToDo;
