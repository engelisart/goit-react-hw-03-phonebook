import React from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { BookContacts, ContactsTitle } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('CONTACTS');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem(
        'CONTACTS',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = contact => {
    const { contacts } = this.state;
    const copyContact = contacts.find(
      cont => cont.name.toLowerCase() === contact.name.toLowerCase()
    );

    copyContact
      ? alert(`${contact.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [{ ...contact, id: nanoid() }, ...prevState.contacts],
        }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <BookContacts>
        <h1>Phonebook</h1> <br />
        <ContactForm addContact={this.addContact} />
        <div>
          <ContactsTitle>Contacts</ContactsTitle> <br />
          <Filter
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </BookContacts>
    );
  }
}
