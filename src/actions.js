import {
    CHANGE_SEARCH_FIELD,
    REQUEST_PRODUCTS_PENDING,
    REQUEST_PRODUCTS_SUCCESS,
    REQUEST_PRODUCTS_FAILED,
    UPDATE_CURRENT_PRODUCT,
} from './constants';

export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
});

export const requestProducts = category => dispatch => {
    dispatch({ type: REQUEST_PRODUCTS_PENDING });

    try {
        // const url = 'http://localhost:3001/getProducts/' + category;
        const url = 'https://shielded-anchorage-77826.herokuapp.com/getProducts/' + category;

        fetch(url)
            .then(response => {

                return response.json();
            })
            .then(data => {
                    dispatch({type: REQUEST_PRODUCTS_SUCCESS, payload: data})
                }
            )
            .catch(error =>
                dispatch({ type: REQUEST_PRODUCTS_FAILED, payload: error })
            );
    } catch (e) {
        console.error('Problem', e);
    }
};


export const requestCurrentProduct = productId => dispatch => {
    dispatch({ type: REQUEST_PRODUCTS_PENDING });

    try {
        // const url = 'http://localhost:3001/getCurrentProduct/' + productId;
        const url = 'https://shielded-anchorage-77826.herokuapp.com/getCurrentProduct/' + productId;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data =>
                dispatch({ type: REQUEST_PRODUCTS_SUCCESS, payload: data })
            )
            .catch(error =>
                dispatch({ type: REQUEST_PRODUCTS_FAILED, payload: error })
            );
    } catch (e) {
        console.error('Problem', e);
    }
};
