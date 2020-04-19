import React from 'react';

function Card(props) {
    return (
        <div className="contact-info">
            <li><strong>First Name:</strong> {props.firstName}</li>
            <li><strong>Last Name:</strong> {props.lastName}</li>
            <li><strong>Phone Number:</strong> {props.phoneNumber}</li>
            <button
                className="contact-update-btn"
                onClick={props.onUpdate}
            >
                Edit
            </button>
            <button 
                className="contact-delete-btn"
                onClick={props.onDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default Card;