import PetsReducer from "../reducers/pets";
import Pet_info_Reducer from "../reducers/pet_in";
import insurance_companiesReducer from "../reducers/insurance_companies";
import MessagesReducer from "../reducers/messages";

import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  pets: PetsReducer,
  insurance_companies: insurance_companiesReducer,
  petInfo: Pet_info_Reducer,
  messages: MessagesReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
