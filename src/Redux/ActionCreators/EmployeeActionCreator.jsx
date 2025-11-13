import { ADD_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_REQUEST, GET_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_REQUEST } from "../Constant"

// Get all employees
export const getEmployees = () => ({
  type: GET_EMPLOYEE_REQUEST,
})

// Add new employee
export const addEmployee = (payload) => ({
  type: ADD_EMPLOYEE_REQUEST,
  payload,
})

// Delete employee
export const deleteEmployee = (id) => ({
  type: DELETE_EMPLOYEE_REQUEST,
  id,
})

// Update employee
export const updateEmployee = (payload) => ({
  type: UPDATE_EMPLOYEE_REQUEST,
  payload,
})