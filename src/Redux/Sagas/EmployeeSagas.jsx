// Redux/Sagas/EmployeeSagas.js
import { call, put, takeEvery } from "redux-saga/effects"
import {
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
} from "../Constant.jsx"

import {
  fetchEmployeesAPI,
  addEmployeeAPI,
  deleteEmployeeAPI,
  updateEmployeeAPI,
} from "./Service/APICallingService.jsx"

function* getEmployeesSaga() {
  try {
    const employees = yield call(fetchEmployeesAPI)
    yield put({ type: GET_EMPLOYEE_SUCCESS, payload: employees })
  } catch (error) {
    yield put({ type: GET_EMPLOYEE_FAILURE, error: error.message })
  }
}

function* addEmployeeSaga(action) {
  try {
    const newEmp = yield call(addEmployeeAPI, action.payload)
    yield put({ type: ADD_EMPLOYEE_SUCCESS, payload: newEmp })
  } catch (error) {
    yield put({ type: ADD_EMPLOYEE_FAILURE, error: error.message })
  }
}

function* deleteEmployeeSaga(action) {
  try {
    yield call(deleteEmployeeAPI, action.id)
    yield put({ type: DELETE_EMPLOYEE_SUCCESS, id: action.id })
  } catch (error) {
    yield put({ type: DELETE_EMPLOYEE_FAILURE, error: error.message })
  }
}

function* updateEmployeeSaga(action) {
  try {
    const updated = yield call(updateEmployeeAPI, action.payload)
    yield put({ type: UPDATE_EMPLOYEE_SUCCESS, payload: updated })
  } catch (error) {
    yield put({ type: UPDATE_EMPLOYEE_FAILURE, error: error.message })
  }
}

export default function* EmployeeSagas() {
  yield takeEvery(GET_EMPLOYEE_REQUEST, getEmployeesSaga)
  yield takeEvery(ADD_EMPLOYEE_REQUEST, addEmployeeSaga)
  yield takeEvery(DELETE_EMPLOYEE_REQUEST, deleteEmployeeSaga)
  yield takeEvery(UPDATE_EMPLOYEE_REQUEST, updateEmployeeSaga)
}
