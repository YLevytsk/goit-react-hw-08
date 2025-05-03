import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние для фильтров
const initialState = {
  name: '',  // Фильтр по имени
  phone: '', // Фильтр по номеру телефона
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Действие для обновления фильтра по имени
    setNameFilter(state, action) {
      state.name = action.payload;
    },
    // Действие для обновления фильтра по телефону
    setPhoneFilter(state, action) {
      state.phone = action.payload;
    },
  },
});

// Экспортируем действия
export const { setNameFilter, setPhoneFilter } = filterSlice.actions;

// Селекторы
export const selectNameFilter = (state) => state.filters.name;
export const selectPhoneFilter = (state) => state.filters.phone;

// Экспортируем редьюсер для использования в store
export const filtersReducer = filterSlice.reducer;

export default filtersReducer;


