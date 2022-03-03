import PetsReducer from "../reducers/pets";
import Pet_info_Reducer from "../reducers/pet_in";
import insurance_companiesReducer from "../reducers/insurance_companies";

import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  pets: PetsReducer,
  insurance_companies: insurance_companiesReducer,
  petInfo: Pet_info_Reducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
