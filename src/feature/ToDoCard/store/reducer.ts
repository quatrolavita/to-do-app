import { IToDoCard } from 'shared/interfaces/IToDoCard';
import { IAction } from 'shared/interfaces/IAction';
import { ToDoCardActionTypes } from './actions';

type cardInitialStateType = {
    cardDataList: Array<IToDoCard>;
};

const initialState: cardInitialStateType = {
    cardDataList: [],
};

export default function toDoCardReducer(
    action: IAction<ToDoCardActionTypes>,
    state = initialState
) {
    switch (action.type) {
        case ToDoCardActionTypes.TODO_CARD_LIST: {
            return { ...state, cardDataList: action.payload };
        }
        default:
            return state;
    }
}
