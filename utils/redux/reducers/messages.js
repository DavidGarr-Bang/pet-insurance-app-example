import { createSlice } from "@reduxjs/toolkit";
import { Mock_message_DATA } from "../../ExampleData/index";

const initialState = {
  messages_list: Mock_message_DATA,
  mes_count: 0,
};

export const Message_Slice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    add_message: (state, action) => {
      state.messages_list = [...state.messages_list, action.payload];
      state.mes_count += 1;
    },
    remove_message: (state, action) => {
      state.messages_list = state.messages_list.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { add_message, remove_message } = Message_Slice.actions;

export default Message_Slice.reducer;
