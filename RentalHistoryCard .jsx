import React from 'react';

const RentalHistoryCard = (props) => {
    const { id, customerName, carModel, pickupDate, returnDate, totalPrice } = props.rental;
    const { deleteRental, setEditId } = props;

    const handleDelete = () => {
        deleteRental(id);
    };

    const handleEdit = () => {
        setEditId(id);
    };
    
    return (
        <div className='rental-card'>
            <div className='rental-details'>
                <h3>{customerName}</h3>
                <p><strong>Car Model:</strong> {carModel}</p>
                <p><strong>Pick-up Date:</strong> {pickupDate}</p>
                <p><strong>Return Date:</strong> {returnDate}</p>
                <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
            </div>
            <div className='card-buttons'>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default RentalHistoryCard;