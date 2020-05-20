import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Blogs } from './blogs';

export const ConfigureStore = () => {
    const store = createStore(
        Blogs,
        applyMiddleware(thunk)
    );

    return store;
}