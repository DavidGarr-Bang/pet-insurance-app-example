import { createSlice } from "@reduxjs/toolkit";
import { exampleData } from "../../ExampleData/index";

const initialState = {
  petsList: exampleData,
};

export const PetSlice = createSlice({
  name: "petsList",
  initialState,
  reducers: {
    add_pet: (state, action) => {
      state.petsList = [...state.petsList, action.payload];
    },
    remove_pet: (state, action) => {
      state.petsList = state.petsList.filter(
        (item) => item.id !== action.payload,
      );
    },

    update_pet: (state, action) => {
      let objIndex = state.petsList.findIndex(
        (obj) => obj.id == action.payload.id,
      );
      state.petsList[objIndex] = action.payload;
      state.petsList = [...state.petsList];
    },

    pet_in_claim: (state, action) => {
      let list = state.petsList;
      let objIndex = list.findIndex((obj) => obj.id == action.payload);

      list[objIndex] = {
        ...list[objIndex],
        claim_status: "In progress",
      };

      state.petsList = [...list];
    },

    cancel_pet_in: (state, action) => {
      let list = state.petsList;
      let objIndex = list.findIndex((obj) => obj.id == action.payload);

      list[objIndex] = {
        ...list[objIndex],
        companyTitle: null,
        conpanyID: null,
        insurance_status: "No cover",
      };
      state.petsList = [...list];
    },

    add_pet_in: (state, action) => {
      let list = state.petsList;
      let objIndex = list.findIndex((obj) => obj.id == action.payload.id);

      list[objIndex] = {
        ...list[objIndex],
        companyTitle: action.payload.companyTitle,
        conpanyID: action.payload.conpanyID,
        insurance_status: action.payload.cover,
      };
      state.petsList = [...list];
    },
  },
});

export const {
  add_pet,
  pet_in_claim,
  remove_pet,
  update_pet,
  cancel_pet_in,
  add_pet_in,
} = PetSlice.actions;

export default PetSlice.reducer;
