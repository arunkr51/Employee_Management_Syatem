// Redux/Reducers/EmployeeReducer.jsx
import {GET_EMPLOYEE_SUCCESS,GET_EMPLOYEE_FAILURE,ADD_EMPLOYEE_SUCCESS,ADD_EMPLOYEE_FAILURE,
DELETE_EMPLOYEE_SUCCESS,DELETE_EMPLOYEE_FAILURE,UPDATE_EMPLOYEE_SUCCESS,
UPDATE_EMPLOYEE_FAILURE, } from "../Constant.jsx"

const initialState = {
    employees: [],
    error: null,
    loading: false,
}

export default function EmployeeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEE_SUCCESS:
            return { ...state, employees: action.payload, loading: false }

        case ADD_EMPLOYEE_SUCCESS:
            return { ...state, employees: [...state.employees, action.payload] }

        case DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.filter(emp => emp.id !== action.id),
            }

        case UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.map(emp =>
                    emp.id === action.payload.id ? action.payload : emp
                ),
            }

        case GET_EMPLOYEE_FAILURE:

        case ADD_EMPLOYEE_FAILURE:
        
        case DELETE_EMPLOYEE_FAILURE:
        
        case UPDATE_EMPLOYEE_FAILURE:
            return { ...state, error: action.error }

        default:
            return state
    }
}
