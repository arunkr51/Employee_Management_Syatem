// Redux/Store.jsx
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import RootReducer from "./Reducers/RootReducer.jsx"
import rootSagas from "./Sagas/rootSagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas)

export default store
