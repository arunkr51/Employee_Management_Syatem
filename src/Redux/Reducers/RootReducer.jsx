import { combineReducers } from "@reduxjs/toolkit"
import EmployeeReducer from "./EmployeeReducer"



const RootReducer = combineReducers({
  employeeState: EmployeeReducer,
})

export default RootReducer