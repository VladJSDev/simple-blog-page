import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const blogsLoading = () => ({
    type: ActionTypes.BLOGS_LOADING
});

export const blogsFailed = (errmess) => ({
    type: ActionTypes.BLOGS_FAILED,
    payload: errmess
});

export const addBlogs = (blogs) => ({
    type: ActionTypes.ADD_BLOGS,
    payload: blogs
});
export const fetchBlogs = () => (dispatch) => {

    dispatch(blogsLoading(true));

    return fetch(baseUrl + 'blogs')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(blogs => dispatch(addBlogs(blogs)))
        .catch(error => dispatch(blogsFailed(error.message)));
}
