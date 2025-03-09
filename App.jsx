import { Outlet } from 'react-router-dom';
//import Footer from './components/Footer';
//import Header from './components/Header';

function App() {

  return (
    <>
      
      <Outlet/>
      <div className="container">
      <br/>
      <br/>
  <h1>Welcome to our Car Rental System webpage!</h1> 
  <br/>
  <b>We're delighted to have you here. Browse through our extensive collection of cars and find the perfect vehicle for your needs. Whether it's for a weekend getaway or a business trip, we've got you covered. Enjoy your journey with us!</b>
  <br/>
  <br/>
  <div className="explore-journey">
  <h1>EXPLORE YOUR <span className="highlight">JOURNEY</span> WITH US !</h1>
</div>


</div>


 
    </>
  );
}

export default App;