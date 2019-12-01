import {IDraftOwnPropertiesState} from "../types";
import {DraftOwnPropertiesAction} from "../actions";
import {Actions} from "../constants";
import NameGenerator from "../models/NameGenerator";

export const initialDraftOwnPropertiesState: IDraftOwnPropertiesState = {
    whoAmI: undefined,
    ownName: NameGenerator.getNameFromLocalStorage(),
    nextAction: 0,
};

export const draftOwnPropertiesReducer = (state: IDraftOwnPropertiesState = initialDraftOwnPropertiesState, action: DraftOwnPropertiesAction) => {
    switch (action.type) {
        case Actions.APPLY_CONFIG:
            console.log(Actions.APPLY_CONFIG, action.value);
            return {
                ...state,
                nextAction: action.value.events.length,
                whoAmI: action.value.yourPlayerType,
            };
        case Actions.ACTION_COMPLETED:
            console.log(Actions.ACTION_COMPLETED, state.nextAction + 1);
            return {
                ...state,
                nextAction: state.nextAction + 1,
            };
        case Actions.SET_EVENTS:
            console.log(Actions.SET_EVENTS, action.value);
            return {
                ...state,
                nextAction: state.nextAction + 1,
            };
        case Actions.CHANGE_OWN_NAME:
            console.log(Actions.CHANGE_OWN_NAME, action);
            NameGenerator.writeNameToLocalStorage(action.value);
            return {...state, ownName: action.value};
    }
    return state;
};