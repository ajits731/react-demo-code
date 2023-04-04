import { SET_USER_DETAILS } from "../constants/reducerConstants"

const initial_state = {
    user_details: {},
    user_conf: {}
};

const UserReducer = (state=initial_state, action) => {
    switch(action.type) {
        case SET_USER_DETAILS: 
        return {
            ...state,
            user_details: action.payload
        }

        case 'SET_USER_CONF': 
        return {
            ...state,
            user_conf: action.payload
        }

        default:
        return {
            ...state
        }  
    }
};

export default UserReducer;

