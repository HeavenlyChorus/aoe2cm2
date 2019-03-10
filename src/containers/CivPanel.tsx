import {IStoreState} from '../types';
import {connect} from 'react-redux';
import CivPanel from "../components/CivPanel";
import ActionType, {fromAction} from "../models/ActionType";


export function mapStateToProps(state: IStoreState) {
    let triggerAction: ActionType = ActionType.NOTHING;
    if (state.nextAction < state.preset.turns.length) {
        triggerAction = fromAction(state.preset.turns[state.nextAction].action);
    }
    return {
        triggerAction,
        whoAmI: state.whoAmI
    };
}

export function mapDispatchToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CivPanel);