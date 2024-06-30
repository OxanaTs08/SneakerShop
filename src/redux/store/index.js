import shopReducer from "../reducers";
import {createStore} from "redux";


const store = createStore(shopReducer);

store.subscribe(() => {
    console.log('State after dispatch: ', store.getState());
});

export default store;