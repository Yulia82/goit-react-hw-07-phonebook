import { createSelector } from "@reduxjs/toolkit";

export const getFilter = state => state.filter;
export const getContactsList = state => state.contacts;
export const getStatus = state => state.status;
export const getError = state => state.error;

export const getFilterContacts = createSelector(
  [getContactsList, getFilter],
  (contacts, filter) => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase),
    );
  },
);
