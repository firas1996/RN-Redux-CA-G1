import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "getUsers",
  axios
    .get("http://172.17.0.91:7777/users")
    .then((response) => {
      console.log(response.data.data.users);
      return response.data.data.users;
    })
    .catch((err) => {
      console.log(err);
    })
);
