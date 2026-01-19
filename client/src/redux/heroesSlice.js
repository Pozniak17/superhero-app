import { createSlice } from "@reduxjs/toolkit";
import {
  addHero,
  deleteHero,
  fetchHeroById,
  fetchHeroes,
  updateHero,
} from "./operations";

const heroesSlice = createSlice({
  name: "heroes",
  initialState: {
    items: [],
    currentHero: null,
    isLoading: false,
    error: null,
    page: 1,
    totalPages: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder // --- FETCH HEROS ---
      .addCase(fetchHeroes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchHeroes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // --- FETCH BY ID HERO ---
      .addCase(fetchHeroById.pending, (state) => {
        state.isLoading = true;
        state.currentHero = null; // очищаємо старого героя перед завантаженням
      })
      .addCase(fetchHeroById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentHero = action.payload;
      })
      // --- ADD HERO ---
      .addCase(addHero.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      // --- UPDATE HERO
      .addCase(updateHero.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // оновлюємо в списку (якщо ми в каталозі)
        const index = state.items.findIndex(
          (hero) => hero._id === action.payload._id,
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        // оновлюємо поточного героя (якщо ми на сторінці деталей)
        state.currentHero = action.payload;
      })
      // --- DELETE HERO ---
      .addCase(deleteHero.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteHero.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // Фільтруємо масив: видаляємо героя з отриманим ID
        state.items = state.items.filter((hero) => hero._id !== action.payload);
      })
      .addCase(deleteHero.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage } = heroesSlice.actions;
export default heroesSlice.reducer;
