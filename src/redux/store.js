import { configureStore } from '@reduxjs/toolkit'; // Для создания store
import { persistStore, persistReducer } from 'redux-persist'; // Для сохранения состояния
import storage from 'redux-persist/lib/storage'; // Для работы с localStorage

// Импорт редукторов из разных слайсов
import { authReducer } from './auth/slice'; 
import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';

// Конфигурация persist для auth
const authPersistConfig = {
  key: 'auth',   // Уникальный ключ для хранения
  storage,       // Указываем, что будем хранить в localStorage
  whitelist: ['token'], // Храним только токен (не весь объект auth)
};

// Создаем persistedReducer для auth
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Конфигурация store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Применяем persistedReducer для auth
    contacts: contactsReducer,  // Редуктор для контактов
    filters: filtersReducer,    // Редуктор для фильтров
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',  // Игнорируем эти действия для persist
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }),
});

// Создаем persistor для store
export const persistor = persistStore(store);


