import React, { useState } from 'react';

function ReservationForm({ selectedCar, closeForm }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (startDate && endDate && name && email && phone) {
      try {
        const response = await fetch('http://localhost:9000/add-car-reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            startDate,
            endDate,
            name,
            email,
            phone,
            car: document.getElementById(`carunique${sessionStorage.getItem("index")}`).innerText
            // carId: selectedCar.id,
            // carMake: selectedCar.make,
            // carModel: selectedCar.model,
            // carYear: selectedCar.year,
            // carPrice: selectedCar.price
          })
        });
        const data = await response.json();
        console.log(data); 
        closeForm(); 
      } catch (error) {
        console.error('Error:', error);
        
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleAlert = () => {
    alert('Rent is reserve');
  }

  return (
    <>
    <div className="reservation-form">
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-actions">
          <button type="submit" onClick={handleAlert}>Submit</button>
          <button type="button" onClick={closeForm}>Cancel</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default ReservationForm;
