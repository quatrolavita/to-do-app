import React, { useEffect } from 'react';
import ToDoCard from 'feature/ToDoCard/layout/ToDoCard/ToDOCard';

// styles
import toDoCardStyles from 'feature/ToDoCard/layout/ToDoCard/ToDoCard.module.css';

// components
import Container from 'shared/components/Continer/Container';
import { useDispatch, useSelector } from 'react-redux';
import { toDoCardList } from 'feature/ToDoCard/store/selectors';
import { getToDoCardList } from '../feature/ToDoCard/store/actions';
import CreateToDo from '../feature/ToDoCard/layout/Controls/Create/CreateToDo';
import { IToDoCard } from '../shared/interfaces/IToDoCard';

function Index() {
    const dispatch = useDispatch();

    const toDoCardListData = useSelector(toDoCardList);

    useEffect(() => {
        dispatch(getToDoCardList());
    }, [dispatch]);

    return (
        <>
            <Container>
                {toDoCardListData ? (
                    toDoCardListData.map((card: IToDoCard) => (
                        <div
                            key={card.pk}
                            className={toDoCardStyles.toDOCardWrapper}
                        >
                            <ToDoCard
                                description={card.description}
                                status={card.status}
                                pk={card.pk}
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading</p>
                )}
            </Container>
            <CreateToDo />
        </>
    );
}

export default Index;
