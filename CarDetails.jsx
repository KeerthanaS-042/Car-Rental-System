import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';

function CarDetails({ cars }) {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Find the car object based on the ID from the URL params
    const foundCar = cars.find(car => car.id === parseInt(id));
    setCar(foundCar);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to simulate componentDidMount

  if (!car) {
    return <div>Loading...</div>; // You can render a loading indicator while fetching data
  }

  return (
    <>
    <div className="car-details">
      <h2>{car.make} {car.model} Details</h2>
      <div>
        <img src={car.image} alt={`${car.make} ${car.model}`} />
        <p>Year: {car.year}</p>
        <p>Price: Rs.{car.price}/day</p>
        <p>Description:</p>
        <p>{car.desc}</p>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default CarDetails;