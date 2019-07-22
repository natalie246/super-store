import {
    CHANGE_SEARCH_FIELD,
    REQUEST_PRODUCTS_PENDING,
    REQUEST_PRODUCTS_SUCCESS,
    REQUEST_PRODUCTS_FAILED,
    UPDATE_CURRENT_PRODUCT,
} from './constants';

const initialStateSearch = {
    searchField: '',
};

export const searchProduct = (state = initialStateSearch, action = {}) => {

    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};

const initialStateProducts = {
    products: [],
    isPending: true,
    error: '',
};

export const requestProducts = (state = initialStateProducts, action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                products: action.payload,
                isPending: false,
            });
        case REQUEST_PRODUCTS_FAILED:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false,
            });
        default:
            return state;
    }
};

const initialStateCurrentProduct = {
    product: {},
    isPending: true,
    error: '',
};

export const requestCurrentProduct = (state = initialStateCurrentProduct, action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                product: action.payload,
                isPending: false,
            });
        case REQUEST_PRODUCTS_FAILED:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false,
            });
        default:
            return state;
    }
};
