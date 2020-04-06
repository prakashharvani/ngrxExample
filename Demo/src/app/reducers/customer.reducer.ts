import { CustomerActionTypes } from '../shared/enum/customer-action-type.enum';
import { ActionParent } from '../actions/customer.actions'
import { Customer } from '../models/Customer';

const initialState: Customer[] = [
    { name: 'Customer 1' },
    { name: 'Customer 2' },
    { name: 'Customer 3' }
];

export function CustomerReducer(state = initialState, action: ActionParent) {
    switch (action.type) {

        case CustomerActionTypes.Add:
            return [...state, action.payload];

        case CustomerActionTypes.Remove:

            let newState = [...state];
            [...newState.splice(action.payload, 1)];
            return newState;

        default:
            return state;
    }
}