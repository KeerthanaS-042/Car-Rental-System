import React from 'react';


function Footer() {
  return (
    <>
  
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing the best car rental experience for our customers.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@carrentalsystem.com</p>
          <p>Phone: 123-456-7890</p> 
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>You can also  follow us on ...</p>  //
 
 <i class="fa-brands fa-facebook"></i>
 
 <i class="fa-brands fa-facebook"></i>
 
 <i class="fa-brands fa-facebook"></i>
          <div className="social-icons">
         <script src="https://kit.fontawesome.com/da1c0f90d8.js" crossorigin="anonymous"></script>

            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Car Rental System</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;