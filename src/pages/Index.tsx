import React, { useEffect } from 'react';
import ToDoCard from 'feature/ToDoCard/layout/ToDOCard';

// components
import Container from 'shared/components/Continer/Container';
import { useDispatch } from 'react-redux';
import { getToDoCardList } from '../feature/ToDoCard/store/actions';

function Index() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToDoCardList());
    }, [dispatch]);

    return (
        <Container>
            <ToDoCard description="First task" />
        </Container>
    );
}

export default Index;
