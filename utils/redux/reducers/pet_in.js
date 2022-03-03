import { createSlice } from "@reduxjs/toolkit";
import { exampleData } from "../../ExampleData/index";

const initialState = {
  pet_info: {},
};

export const PetSlice = createSlice({
  name: "pet_info",
  initialState,
  reducers: {
    add_pet_info: (state, action) => {
      state.pet_info = action.payload;
    },
    remove_pet_info: (state) => {
      state.petsList = undefined;
    },
  },
});

export const { add_pet_info, remove_pet_info } = PetSlice.actions;

export default PetSlice.reducer;
