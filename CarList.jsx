import React from 'react';
import { useNavigate } from 'react-router-dom'; 
function CarList({ cars, toggleReservationForm }) {
  const navigate = useNavigate(); 
  const showDetails = (car) => {
    
    navigate(`/carDetails/${car.id}`);
  };

  return (
    <>
      <div className="car-list">
        <h2>Available Cars</h2>
        <ul>
          {cars.map((car, index) => (
            <li key={car.id}>
              <div>
                <span id={`carunique${index}`}>{car.make} {car.model} - {car.year}</span>
                <span>Price: Rs.{car.price}/day</span>
              </div>
              <button onClick={() => toggleReservationForm(car, index)}>Rent</button>
              <button onClick={() => showDetails(car)}>Details</button> 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CarList;