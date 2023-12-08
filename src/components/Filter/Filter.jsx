import React from 'react';
import { FilterContacts, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterContacts>
    Find contacts by name
    <FilterInput
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  </FilterContacts>
);
