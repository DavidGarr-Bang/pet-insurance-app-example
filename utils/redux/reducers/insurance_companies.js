import { createSlice } from "@reduxjs/toolkit";
import { inData } from "../../ExampleData/index";

const initialState = {
  insurance_companies_list: inData,
};

export const PetSlice = createSlice({
  name: "companies_list",
  initialState,
  reducers: {
    add_company: (state, action) => {
      state.insurance_companies_list = [
        ...state.insurance_companies_list,
        action.payload,
      ];
    },
    remove_company: (state, action) => {
      state.insurance_companies_list = state.insurance_companies_list.filter(
        (item) => item.id !== action.payload,
      );
    },
    update_company: (state, action) => {
      state.insurance_companies_list = state.insurance_companies_list.filter(
        (item) => item.id !== action.payload.id,
      );
      state.insurance_companies_list = [
        ...state.insurance_companies_list,
        action.payload,
      ];
    },
  },
});

export const { add_company, remove_company, update_company } = PetSlice.actions;

export default PetSlice.reducer;
