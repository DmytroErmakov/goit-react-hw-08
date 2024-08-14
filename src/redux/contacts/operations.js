import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts"); // перевірити
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
       // return response.data;
       // Повертаємо ідентифікатор, так як бекенд може не повертати ніяких даних
       return { id: contactId };
     } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
     }
  }); 