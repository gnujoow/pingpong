import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { pingEpic } from './epics';
import {pingReducer} from './reducers/pingReducer';

const epicMiddleware = createEpicMiddleware(pingEpic);

export default createStore(
  pingReducer,
  applyMiddleware(epicMiddleware)
);
