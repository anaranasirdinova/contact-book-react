import React, { Component } from 'react';
import axios from 'axios';

import AddContact from '../AddContact/AddContact';
import ContactList from '../ContactList/ContactList';
import UpdateContact from '../UpdateContact/UpdateContact';

class App extends Component {

  state = {
    data: [
      {
        "firstName": "Jack",
        "lastName": "Smith",
        "phoneNumber": "877474538",
        "id": 1
      },
      {
        "firstName": "Kate",
        "lastName": "Watson",
        "phoneNumber": "53434563",
        "id": 2
      },
      {
        "firstName": "Sam",
        "lastName": "Miller",
        "phoneNumber": "53466563",
        "id": 3
      },
      {
        "firstName": "John ",
        "lastName": "Scott",
        "phoneNumber": "676786",
        "id": 4
      }
    ],
    updateIndex: null,
    isToUpdate: false
  };

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = async () => {
    const {data} = await axios.get('http://localhost:8000/contacts');
    this.setState({data});
  };

  handleCreate = async newContact => {
    await axios.post('http://localhost:8000/contacts', newContact);
    this.fetchContacts();
  };

  handleDelete = async id => {
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    this.fetchContacts();
  };

  initializeUpdate = updateIndex => {
    this.setState(
      {
        updateIndex,
        isToUpdate: !this.state.isToUpdate
      }
    );
  };

  handleUpdate = async updatedContact => {
    const data = [...this.state.data];
    const id =  data[this.state.updateIndex].id;

    await axios.put(`http://localhost:8000/contacts/${id}`, updatedContact);
    this.fetchContacts();
    this.setState({isToUpdate: !this.state.isToUpdate});
  };

  checkPage = (currentPage) => this.props.page === undefined || this.props.page === currentPage;

  render() {
    return (
      <div className="container">
        <div className="contact__content">
        <div className="contact__wrap">
          <h1 className="contact__title">Contact Book</h1>

        {this.checkPage("ADD") && (
            <AddContact
                data={this.state.data}
                handleCreate={this.handleCreate}
            />
        )}
        {this.checkPage("LIST") && (
            <>
                <ContactList
                    data={this.state.data}
                    handleDelete={this.handleDelete}
                    initializeUpdate={this.initializeUpdate}
                />
                <UpdateContact
                    data={this.state.data}
                    updateIndex={this.state.updateIndex}
                    isToUpdate={this.state.isToUpdate}
                    onChange={this.handleContactList}
                    handleUpdate={this.handleUpdate}
                />
            </>
        )}
        </div>
        </div>
      </div>
    );
  }
}

export default App;