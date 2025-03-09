import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import CarDetails from './components/CarDetails'; // Import CarDetails component
import CarList from './components/CarList';
import RentalHistoryPage from './components/RentalHistoryPage';
import Contact from './components/Contact';

// Define your cars array here
const cars = [
  { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 50, image: '/src/images/toy.jpg', desc: 'The Toyota Corolla epitomizes practicality and dependability, boasting a reputation as one of the best-selling cars globally. Known for its fuel efficiency, comfortable ride, and low maintenance costs, the Corolla offers a smooth driving experience. With a sleek design and advanced features, it continues to set the standard for compact sedans.' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 60, image: '/src/images/honda.jpg', desc: 'The Honda Civic epitomizes practicality and performance, boasting a sleek design and impressive fuel efficiency. Renowned for its reliability, the Civic offers a smooth ride and responsive handling. With a range of trims including the sporty Si and fuel-sipping hybrid, the Civic remains a top choice for drivers seeking value and versatility.' },
  { id: 3, make: 'Ford', model: 'Focus', year: 2018, price: 55, image: '/src/images/FORD.jpg', desc: 'The Ford Focus epitomizes versatility and performance in a compact package. Offering a dynamic driving experience, it boasts agile handling and a range of fuel-efficient engine options. With sleek styling and advanced technology features, the Focus appeals to those seeking a balance of practicality and excitement on the road.' },
  { id: 4, make: 'BMW', model: 'X3', year: 2021, price: 80, image: '/src/images/bmw.jpeg', desc: 'The BMW X3 epitomizes luxury and performance in the compact SUV segment. With its sleek design, dynamic handling, and powerful engine options, the X3 offers a thrilling driving experience. Its spacious and well-crafted interior boasts cutting-edge technology and premium materials, making it a standout choice for discerning drivers seeking both comfort and excitement.'},
  { id: 5, make: 'Mercedes-Benz', model: 'C-Class', year: 2020, price: 75, image: '/src/images/BENZ.jpg', desc: 'The Mercedes-Benz C-Class epitomizes luxury and performance in a compact package. With sleek styling and cutting-edge technology, it offers a refined driving experience. From its powerful engines to its plush interior, the C-Class caters to those seeking elegance and comfort without compromising on agility and sophistication.'},
  { id: 6, make: 'Audi', model: 'A4', year: 2019, price: 70, image: '/src/images/audi.jpg', desc: 'The Audi A4 stands as a pinnacle of automotive engineering, seamlessly blending style, performance, and luxury. Its sleek exterior lines and meticulously crafted interior exude elegance. With a range of potent engine options and cutting-edge technology, the A4 delivers an exhilarating driving experience while providing unmatched comfort and refinement on the road.' },
  // Add more cars as needed
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cars" element={<Home />} />
        <Route path="/cars" element={<CarList cars={cars} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* Pass the cars array as a prop to the CarDetails component */}
        <Route path="/carDetails/:id" element={<CarDetails cars={cars} />} />
        <Route path='/reservation' element= {<RentalHistoryPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
