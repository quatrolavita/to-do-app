import { IAction } from 'shared/interfaces/IAction';
import {
    ICreateToDoCardData,
    IToDoCard,
    IUpdateToDoCardData,
} from 'shared/interfaces/IToDoCard';

export enum ToDoCardActionTypes {
    TODO_CARD_LIST = 'TODO_CARD/LIST',
    MAKE_TODO_CARD_LIST_REQUEST = 'TODO_CARD/LIST_REQUEST',
    CREATE_CARD = 'TODO_CARD/CREATE_TO_DO',
    DELETE_CARD = 'TODO_CARD/DELETE_TO_DO',
    UPDATE_CARD = 'TODO_CARD/UPDATE_CARD',
}

export type ToDoCardDataListAction = IAction<
    ToDoCardActionTypes.TODO_CARD_LIST,
    Array<IToDoCard>
>;

export type GetToDoCardListAction = IAction<
    ToDoCardActionTypes.MAKE_TODO_CARD_LIST_REQUEST,
    string
>;

export type CreateToDoAction = IAction<
    ToDoCardActionTypes.CREATE_CARD,
    ICreateToDoCardData
>;

export type DeleteToDoAction = IAction<ToDoCardActionTypes.DELETE_CARD, number>;

export type UpdateToDoAction = IAction<
    ToDoCardActionTypes.UPDATE_CARD,
    IUpdateToDoCardData
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

export function createToDoCard(data: ICreateToDoCardData): CreateToDoAction {
    return {
        type: ToDoCardActionTypes.CREATE_CARD,
        payload: data,
    };
}
export function deleteToDoCard(pk: number): DeleteToDoAction {
    return {
        type: ToDoCardActionTypes.DELETE_CARD,
        payload: pk,
    };
}

export function updateToDoCard(data: IUpdateToDoCardData): UpdateToDoAction {
    return {
        type: ToDoCardActionTypes.UPDATE_CARD,
        payload: data,
    };
}
