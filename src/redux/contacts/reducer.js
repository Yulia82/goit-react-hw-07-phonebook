import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { fetchContacts, postContacts, deleteContacts } from "./operations";

function deleteContact(state, idContact) {
  return state.filter(contact => contact.id !== idContact);
}

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [deleteContacts.fulfilled]: (state, { payload }) =>
    deleteContact(state, payload),
  [postContacts.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
  [postContacts.pending]: () => true,
  [postContacts.fulfilled]: () => false,
  [postContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, { payload }) => payload,
  [deleteContacts.pending]: () => null,
  [postContacts.rejected]: (_, { payload }) => payload,
  [postContacts.pending]: () => null,
});

const filter = createReducer("", {
  [actions.filterChange]: (_, { payload }) => payload,
});

const status = createReducer("idle", {
  [fetchContacts.fulfilled]: () => "resolved",
  [fetchContacts.rejected]: () => "rejected",
  [deleteContacts.rejected]: () => "rejected",
  [postContacts.rejected]: () => "rejected",
});

export default combineReducers({
  contacts,
  loading,
  error,
  filter,
  status,
});

// -----------------------------
