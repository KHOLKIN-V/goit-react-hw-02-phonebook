import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContactForm from './components/AddContactForm/AddContactForm'
import Filter from './components/Filter/Filter'
import ContactBook from './components/ContactBook/ContactBook'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  }

  formSubmit = (data) => {

    const searchContact = this.state.contacts.map(e => e.name).includes(data.name);


    if (searchContact) {
      alert(`${data.name} is already in contacts`);
    } else {
      const newContact = {
        ...data, id: nanoid(),
      };
      this.setState(old => ({
        contacts: old.contacts.concat(newContact),
      }))
    }

  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(i =>
      i.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

reshapeFilter = (e) => {
    this.setState({ filter: e });
  };
  
  render() {
    const filtered = this.filterContacts();

    return (
      <>
      <AddContactForm submit={this.formSubmit} inputId={1}/>
      <Filter value={this.state.filter} onFilter={this.reshapeFilter}/>
      {filtered.length >= 0 ? 
          <ContactBook data={filtered} />
         : <ContactBook data={this.state.contacts}/>
      }
      </>
    );
  }
}

export default App;
