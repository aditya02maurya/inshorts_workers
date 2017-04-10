import {combineReducers} from 'redux';
import CardReducer from './reducer-cards';
import ActiveCardReducer from './reducer-active-card';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    cards: CardReducer,
    activeCard: ActiveCardReducer
});

export default allReducers
