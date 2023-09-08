import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: null,
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
      // {filter && (filter: prev.filter.filter(el => el.id !== id))

      // }
      // filter: prev.filter.filter(el => el.id !== id),
    }));
  };

  handleSearch = data => {
    const filterValue = data.currentTarget.value;
    this.setState(prev => ({
      filter: prev.contacts.filter(el =>
        el.name.toLowerCase().includes(filterValue.toLowerCase())
      ),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <Form createUser={this.createUser} />

        <h2>Contacts</h2>
        <Filter handleSearch={this.handleSearch} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteUser={this.deleteUser}
        />
      </>
    );
  }
}
