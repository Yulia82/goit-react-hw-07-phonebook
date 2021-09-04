import {
  getContacts,
  deleteContact,
  postContact,
} from "../../servises/api-servise";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchByIdStatus",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      // console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);

export const postContacts = createAsyncThunk(
  "contacts/postByIdStatus",
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await postContact({
        name: data.name,
        number: data.number,
      });
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteByIdStatus",
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// -----------------------------
// export const fetchContacts = () => async dispatch => {
//     dispatch(actions.fetchContactsRequest());

//     try {
//         const contacts = await getContacts();
//         dispatch(actions.fetchContactsSuccess(contacts));
//         // console.log('data-get', contacts);
//     } catch (error) {
//         actions.fetchContactsError(error.message);
//     }
// };

// export const postContacts = (data) => async dispatch => {
//     dispatch(actions.postContactsRequest());
//     // console.log('data', data);

//     try {
//         const newContact = await postContact({ name: data.name, number: data.number });
//         dispatch(actions.postContactsSuccess(newContact));
//         // console.log('data-post-contact', newContact);
//     } catch (error) {
//         actions.postContactsError(error.message);
//     }
// };

// export const deleteContacts = (id) => async dispatch => {
//     dispatch(actions.deleteContactsRequest());

//     try {
//         await deleteContact(id);
//         dispatch(actions.deleteContactsSuccess(id));
//     } catch (error) {
//         actions.deleteContactsError(error.message);
//     }
// };
