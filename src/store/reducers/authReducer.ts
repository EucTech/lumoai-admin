import * as types from '../actions/actionTypes';

interface Action {
    type: string;
    payload?: any;
}

interface State {
    isLoading: boolean;
    isAuthenticated: boolean;
    auth: {} | undefined;
    OTP: string;
    password: string;
}

const initialState: State = {
    isLoading: false,
    isAuthenticated: false,
    auth: {},
    OTP: '',
    password: '',
};

const authReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.LOGIN_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                auth: action.payload,
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                auth: {},
            };
        case types.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case types.FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case types.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                password: action.payload,
                isLoading: false,
            };
        case types.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                password: '',
                isLoading: false,
            };
        case types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                auth: {},
            };
        case types.IS_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        default:
            return state;
    };
};

export default authReducer;