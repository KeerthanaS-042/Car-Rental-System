import React, { useState } from 'react';
import CarList from './CarList';
import ReservationForm from './ReservationForm';
import Footer from './Footer';
import About from './About';
const Home =()=>{
    
const [showReservationForm, setShowReservationForm] = useState(false);
const [selectedCar, setSelectedCar] = useState(null);


const cars = [
  { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 50 , },
  { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 60 , },
  { id: 3, make: 'Ford', model: 'Focus', year: 2018, price: 55 , },
  
];


const additionalCars = [
  { id: 4, make: 'BMW', model: 'X3', year: 2021, price: 80 ,},
  { id: 5, make: 'Mercedes-Benz', model: 'C-Class', year: 2020, price: 75 ,},
  { id: 6, make: 'Audi', model: 'A4', year: 2019, price: 70 , },
];


const allCars = [...cars, ...additionalCars];


const toggleReservationForm = (car, index) => {
  sessionStorage.setItem("index", index)
  setSelectedCar(car);
  setShowReservationForm(!showReservationForm);
};


const reserveCar = (reservation) => {
  
  console.log('Reserved:', reservation);
};


const closeReservationForm = () => {
  setShowReservationForm(false);
  setSelectedCar(null);
};

return(
    <>
    {/* <About /> */}
        <CarList cars={allCars} toggleReservationForm={toggleReservationForm} />
        {showReservationForm && <ReservationForm selectedCar={selectedCar} reserveCar={reserveCar} closeForm={closeReservationForm} />}
        <Footer />
        </>
)

}

export default Home;