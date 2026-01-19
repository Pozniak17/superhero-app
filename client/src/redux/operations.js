import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Встановлюємо базову URL-адресу
// для всіх запитів axios
axios.defaults.baseURL = "https://superhero-app-0he6.onrender.com";

// Оголошення асинхронної операції
// fetchHeroes для отримання даних
export const fetchHeroes = createAsyncThunk(
  "heroes/fetchAll",
  async (page, thunkAPI) => {
    try {
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
