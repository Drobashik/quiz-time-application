import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import quizReducer from './reducers/quizReducer';

const rootReducer = combineReducers({
    quiz: quizReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));