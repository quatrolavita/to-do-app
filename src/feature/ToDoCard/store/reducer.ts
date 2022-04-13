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
    state = initialState,
    action: IAction<ToDoCardActionTypes>
) {
    switch (action.type) {
        case ToDoCardActionTypes.TODO_CARD_LIST: {
            return { ...state, cardDataList: action.payload };
        }
        case ToDoCardActionTypes.MAKE_TODO_CARD_LIST_REQUEST: {
            return { ...state };
        }
        default:
            return state;
    }
}
