import { IAction } from 'shared/interfaces/IAction';
import { IToDoCard } from 'shared/interfaces/IToDoCard';

export enum ToDoCardActionTypes {
    TODO_CARD_LIST = 'TODO_CARD/LIST',
    TODO_CARD_LIST_REQUEST = 'TODO_CARD/LIST_REQUEST',
}

export type ToDoCardDataListAction = IAction<
    ToDoCardActionTypes.TODO_CARD_LIST,
    Array<IToDoCard>
>;

export function setToDoCardList(
    toDoCardList: Array<IToDoCard>
): ToDoCardDataListAction {
    return {
        type: ToDoCardActionTypes.TODO_CARD_LIST,
        payload: toDoCardList,
    };
}
