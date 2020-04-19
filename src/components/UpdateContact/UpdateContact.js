import React, { Component } from 'react';

import './UpdateContact.css';

class UpdateContact extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: ''
    };

    shouldComponentUpdate(nextProps) {
        if (nextProps !== this.props) 
            this.updateState(nextProps.updateIndex);

        return true;
    }

    updateState = updateIndex => {
        const data = [...this.props.data];
        const contact = data[updateIndex];
        
        this.setState({...contact});
    };

    handleFirstNameUpdate = event => {
        this.setState({firstName: event.target.value});
    };

    handleLastNameUpdate = event => {
        this.setState({lastName: event.target.value});
    };

    handlePhoneNumberUpdate = event => {
        this.setState({phoneNumber: event.target.value});
    };

    saveUpdate = event => {
        event.preventDefault();

        const {
            firstName,
            lastName,
            phoneNumber
        } = this.state;
        
        if (!firstName || !lastName || !phoneNumber) return;

        this.props.handleUpdate(this.state)
    };

    render() {
        return (
            <>
                {this.props.isToUpdate ? (
                        <div className="modal-outer">
                            <div className="modal-inner">
                                <div className="contact-info">
                                    <form>
                                        <div className="contact-line">
                                            <label htmlFor="name-1">First name:</label>
                                            <input
                                                id="name-1"
                                                type="text"
                                                value={this.state.firstName}
                                                onChange={this.handleFirstNameUpdate}
                                            />
                                        </div>
                                        <div className="contact-line">
                                            <label htmlFor="name-2">Last name:</label>
                                            <input
                                                id="name-2"
                                                type="text"
                                                value={this.state.lastName}
                                                onChange={this.handleLastNameUpdate}
                                            />
                                        </div>
                                        <div className="contact-line">
                                            <label htmlFor="phone">Phone number:</label>
                                            <input
                                                id="phone"
                                                type="number"
                                                value={this.state.phoneNumber}
                                                onChange={this.handlePhoneNumberUpdate}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <button
                                    className="contact-savechanges-btn"
                                    onClick={this.saveUpdate}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                ) : false}
            </>
        );
    }
}

export default UpdateContact;