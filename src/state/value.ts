/* eslint-disable default-param-last */
import { RootState } from './store';
import { CORRECT_ANSWER } from '../config';

// SELECTORS
export const selectValue = (state: RootState) => state.value;

// ACTION TYPES
const VALUE_SET = 'VALUE_SET';

type ACTION = {
    type: typeof VALUE_SET;
    payload: string;
};

// ACTIONS
export const valueSet = (payload: string) => ({
    type: VALUE_SET,
    payload,
});

const INITIAL_STATE = '';

// REDUCER
export default (state = INITIAL_STATE, action: ACTION) => {
    switch (action.type) {
        case VALUE_SET:
            if (
                action?.payload === CORRECT_ANSWER ||
                action?.payload?.length < CORRECT_ANSWER?.length
            ) {
                return action.payload;
            }
            return INITIAL_STATE;
        default:
            return state;
    }
};
