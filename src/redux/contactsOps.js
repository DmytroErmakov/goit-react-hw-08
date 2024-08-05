import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66af82c0b05db47acc5a084b.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
     "contacts/addContact",
     async(newContact, thunkAPI) => {
     try {
          const response = await axios.post("/contacts", newContact);
          return response.data;
     } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
     }
}
);

// перевірити ще раз код
export const deleteContact = createAsyncThunk(
     "contacts/deleteContact",
     async (contactId, thunkAPI) => {
     try {
       const response = await axios.delete(`/contacts/${contactId}`);
       // Повертаємо ідентифікатор, так як бекенд може не повертати ніяких даних
       return { id: contactId };
     } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
     }
}); 