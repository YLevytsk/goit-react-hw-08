import { createSelector } from 'reselect';
import { selectNameFilter, selectPhoneFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectPhoneFilter],
  (contacts, nameFilter, phoneFilter) => {
    const nameValue = nameFilter.toLowerCase().trim();
    const phoneValue = phoneFilter.replace(/\D/g, ''); // тільки цифри

    if (!nameValue && !phoneValue) {
      return contacts;
    }

    return contacts.filter(({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.replace(/\D/g, ''); // очищений номер

      const matchesName =
        nameValue && normalizedName.startsWith(nameValue); // ⬅️ фільтр по імені з початку

      const matchesPhone =
        phoneValue && normalizedNumber.startsWith(phoneValue); // ⬅️ фільтр по номеру з початку

      return matchesName || matchesPhone;
    });
  }
);






