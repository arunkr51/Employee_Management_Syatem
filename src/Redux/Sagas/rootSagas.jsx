// Redux/Sagas/rootSagas.js
import { all } from "redux-saga/effects"
import EmployeeSagas from "./EmployeeSagas"

export default function* rootSagas() {
  yield all([EmployeeSagas()])
}
