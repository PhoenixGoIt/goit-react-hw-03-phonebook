import { nanoid } from 'nanoid';
import React, {Component} from "react";
import {InFormName} from './InFormName/InFormName'
import { NumberInput } from "./NumberInput/NumberInput";
import { NameInput } from "./NameInput/NameInput";
import { AddBtn } from "./AddBtn/AddBtn";
import { ContactList } from './ContactList/ContactList';
import { FindСontacts } from './FindСontacts/FindСontacts';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleChangeName = e => {
    this.setState({
      name: e
    })
  }

  handleChangeNumber = e => {
    this.setState({
      number: e
    })
  }

  handleSubmit = e => {
    const {name, number} = this.state
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.filter(contact =>  contact.number.trim() === newContact.number.trim()).length) {
      alert(`${newContact.number }: is already in contacts`)
      return
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [newContact, ...contacts],
      };
    });
  }

    deleteContact = Id => {
      //console.log('delete')
      this.setState(prevState => {
        return {
          contacts: prevState.contacts.filter(
            contact => contact.id !== Id
          ),
        };
      });
    };

    changeFilter = e => {
      this.setState({ filter: e.currentTarget.value });
      console.log(this.state.filter)
    };


    onFilterContacts = () => {
      let filterContact = [];
      if (this.state.filter) {
        filterContact = this.state.contacts.filter(
          contact =>
            contact.name.includes(this.state.filter) ||
            contact.name.toLowerCase().includes(this.state.filter)
        );
      } else {
        return this.state.contacts;
      }
      return filterContact;
    };

  render() {
    const { filter } = this.state
    console.log(this.onFilterContacts())
    return(
      <div>
      <h1>Phonebook</h1>
      <form onSubmit={this.handleSubmit}>
        <InFormName title='Name' />
          <NameInput onChange={this.handleChangeName} />
        <InFormName title='Number' />
          <NumberInput onChange={this.handleChangeNumber} />
          <AddBtn />
      </form>
      <h2>Contacts</h2>
      <FindСontacts onChange={this.changeFilter}  filter={filter}/>
      <ContactList onClick={this.deleteContact} filterContacts={this.onFilterContacts()}/>
      </div>
    )
}
}