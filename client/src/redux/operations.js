import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://superhero-app-0he6.onrender.com";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchHeroes = createAsyncThunk(
  "heroes/fetchAll",
  async (page, thunkAPI) => {
    try {
      await delay(600);
      const response = await axios.get(`/heroes?page=${page}&perPage=5`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchHeroById = createAsyncThunk(
  "heroes/fetchById",
  async (id, thunkAPI) => {
    try {
      await delay(600);
      const response = await axios.get(`/heroes/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteHero = createAsyncThunk(
  "heroes/deleteHero",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/heroes/${id}`);
      return id; // Повертаємо ID, щоб редюсер знав, кого видалити зі стейту
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
