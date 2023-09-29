import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://650aa93fdfd73d1fab08a97a.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
     async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');       
      return response.data;
    } catch (e) {        
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
         const checkResponse = await axios.get("/contacts", {
        params: { name: newContact.name }
   });
      const checkContact = checkResponse.data.find(contact => contact.name === newContact.name);
     
      if (checkContact) {        
        alert(`${newContact.name} is already in contacts.`);        
        return thunkAPI.rejectWithValue();
      };
    try {

      const response = await axios.post("/contacts", newContact);       
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({contactId, name, number}, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, {
        name,
        number,
      });      
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);