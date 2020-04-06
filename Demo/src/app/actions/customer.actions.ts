import { Action } from '@ngrx/store';
import { CustomerActionTypes } from '../shared/enum/customer-action-type.enum';

export class ActionParent implements Action {
    type: any;
    payload: any;
}

export class CustomerAdd implements ActionParent {
    type = CustomerActionTypes.Add;
    constructor(public payload: any) { }
}

export class CustomerRemove implements ActionParent {
    type = CustomerActionTypes.Remove;
    constructor(public payload: any) { }
}