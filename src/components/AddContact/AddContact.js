import React, { Component } from 'react';

import './AddContact.css';

class AddContact extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: ''
    };

    handleFirstNameInput = event => {
        const firstName = event.target.value;
        this.setState({ firstName });
    };

    handleLastNameInput = event => {
        const lastName = event.target.value;
        this.setState({ lastName });
    };

    handlePhoneNumberInput = event => {
        const phoneNumber = event.target.value;
        this.setState({ phoneNumber });
    };

    handleAddContact = event => {
        event.preventDefault();

        const {
            firstName,
            lastName,
            phoneNumber
        } = this.state;
        
        if (!firstName || !lastName || !phoneNumber) return;

        this.props.handleCreate(this.state);

        this.setState({ 
            firstName: '', 
            lastName: '', 
            phoneNumber: '' 
        });
    };

    render() {
        return (
            <>
                <h2 className="heading">Add new contact</h2>
                <div className="contact-form">
                    <form>
                        <div className="contact-field">
                            <label htmlFor="firstName">First Name:</label>
                            <input 
                                id="firstName" 
                                type="text"
                                value={this.state.firstName} 
                                onChange={this.handleFirstNameInput}
                            />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="lastName">Last Name:</label>
                            <input 
                                id="lastName" 
                                type="text"
                                value={this.state.lastName} 
                                onChange={this.handleLastNameInput}
                            />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input 
                                id="phoneNumber" 
                                type="number"
                                value={this.state.phoneNumber}
                                onChange={this.handlePhoneNumberInput}
                            />
                        </div>
                        <div className="contact-field">
                            <button 
                                className="save-contact-btn"
                                onClick={this.handleAddContact}
                            >
                                    Save contact
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default AddContact;