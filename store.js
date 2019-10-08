import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import homeReducer from './src/screens/Home/reducer';

const rootReducer = combineReducers({
    home: homeReducer,
    form: formReducer
});

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

export default configureStore;

