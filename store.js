import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './src/screens/Home/reducer';

const rootReducer = combineReducers({
    home: homeReducer
});

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

export default configureStore;