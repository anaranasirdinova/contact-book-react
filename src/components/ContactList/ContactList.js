import React from 'react';

import './ContactList.css';

import Card from './Card';

function ContactList(props) {

    const data = props.data;

    return (
        <div className="contact-list">
            {data.map((contact, index) => (
                <Card
                    key={contact.id}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    phoneNumber={contact.phoneNumber}
                    onUpdate={() => props.initializeUpdate(index)}
                    onDelete={() => props.handleDelete(contact.id)}
                />
            ))}
        </div>
    );
}

export default ContactList;