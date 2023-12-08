import React from 'react';
import { ContactItem, ContactItemButton } from './ContactLictItem.styled';

export const ContactListItem = ({ contact, onDeleteContact }) => (
  <ContactItem>
    {contact.name}: {contact.number}
    <ContactItemButton onClick={() => onDeleteContact(contact.id)}>
      Delete
    </ContactItemButton>
  </ContactItem>
);
