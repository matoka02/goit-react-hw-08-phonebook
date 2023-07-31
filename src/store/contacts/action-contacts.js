import { createAction, nanoid } from "@reduxjs/toolkit";
import { ADD_CONTACT, DELETE_CONTACT } from "store/types";

export const addContact = createAction(ADD_CONTACT, (name, number)=>({
    payload: {name,number, id: nanoid()},
}));

export const deleteContact = createAction(DELETE_CONTACT);