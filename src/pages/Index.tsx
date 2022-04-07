import React from 'react';
import ToDoCard from 'feature/ToDoCard/layout/ToDOCard';

// components
import Container from 'shared/components/Continer/Container';

function Index() {
    return (
        <Container>
            <ToDoCard description="First task" completed />
        </Container>
    );
}

export default Index;
