import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createUser = data => {
    const contact = {
      ...data,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [contact, ...prev.contacts],
    }));
    this.state.contacts.map(
      el =>
        el.name === data.name && alert(data.name + ' is already in contacts.')
    );
    // el.name === data.name && alert(data.name + ' is already in contacts.')
  };

  deleteUser = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  handleSearch = e => {
    this.setState(prev => ({
      filter: e.target.value,
    }));
  };
  getVisibleName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase(normalizedFilter))
    );
  };

  render() {
    const visibleName = this.getVisibleName();
    return (
      <>
        <h1>Phonebook</h1>

        <Form createUser={this.createUser} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleSearch={this.handleSearch} />
        <ContactList
          contacts={visibleName}
          filter={this.state.filter}
          deleteUser={this.deleteUser}
        />
      </>
    );
  }
}
