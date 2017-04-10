/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

import CardReducer from './reducer-cards';
// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = null, action) {
	console.log("action",action);
    switch (action.type) {
        case 'CARD_SELECTED':
            return action.payload;
            break;
        case 'LIKE_CARD_SELECTED':
            return action.payload;
            break;
        case 'DISLIKE_CARD_SELECTED':
            return action.payload;
            break;
        case 'BOOKMARK_CARD_SELECTED':
            return action.payload;
            break;
        case 'GO_BACK':
            return null;
            break;
    }
	console.log("state in reducer",state);
    return state;
}
