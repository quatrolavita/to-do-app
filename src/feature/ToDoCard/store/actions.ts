import { IAction } from 'shared/interfaces/IAction';
import { IToDoCard } from 'shared/interfaces/IToDoCard';

export enum ToDoCardActionTypes {
    TODO_CARD_LIST = 'TODO_CARD/LIST',
    MAKE_TODO_CARD_LIST_REQUEST = 'TODO_CARD/LIST_REQUEST',
}

export type ToDoCardDataListAction = IAction<
    ToDoCardActionTypes.TODO_CARD_LIST,
    Array<IToDoCard>
>;

export type GetToDoCardListAction = IAction<
    ToDoCardActionTypes.MAKE_TODO_CARD_LIST_REQUEST,
    string
>;

export function setToDoCardList(
    toDoCardList: Array<IToDoCard>
): ToDoCardDataListAction {
    return {
        type: ToDoCardActionTypes.TODO_CARD_LIST,
        payload: toDoCardList,
    };
}
export function getToDoCardList(): GetToDoCardListAction {
    return {
        type: ToDoCardActionTypes.MAKE_TODO_CARD_LIST_REQUEST,
        payload: '',
    };
}
