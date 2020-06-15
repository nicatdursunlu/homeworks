import { createStore, combineReducers } from 'redux';

import {
    MODULE_NAME as listsModuleName, 
    reducer as listReducer, 
} from "./data";
// import {
//     MODULE_NAME as settingsModuleName, 
//     reducer as settingsReducer, 
// } from "./settings";
import { updateAS, getDataFromAS } from '../utils/StoreDataAS';
import { dataReducer } from './data';

const rootReducer = combineReducers({
    data: dataReducer,
    //[listsModuleName]: listReducer,
    //[settingsModuleName]: settingsReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => updateAS(store));

getDataFromAS(store);

export default store;