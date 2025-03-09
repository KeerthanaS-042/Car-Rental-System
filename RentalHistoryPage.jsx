import React, { useState, useEffect } from 'react';

function RentalHistoryPage() {
  const [rentalList, setRentalList] = useState([]);

  useEffect(() => {
    const fetchRentalData = async () => {
      try {
        const response = await fetch('http://localhost:9000/get-cars');
        if (!response.ok) {
          throw new Error('Failed to fetch rental data');
        }
        const data = await response.json();
        setRentalList(data);
      } catch (error) {
        console.error('Error fetching rental data:', error);
      }
    };

    fetchRentalData();
  }, []);

  // const deleteRental = async (carRent) => {
  //   try {
  //     const response = await fetch(`http://localhost:9000/delete-car-reservation'/${carRent}`, {
  //       method: 'DELETE',
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to delete rental');
  //     }
  //     setRentalList(rentalList.filter(rental => rental.id !== carRent));
  //   } catch (error) {
  //     console.error('Error deleting rental:', error);
  //   }
  // };

  const deleteRental = async (rentalId) => {
    try {
      const response = await fetch(`http://localhost:9000/delete-car-reservation/${rentalId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete rental (HTTP status ${response.status})`);
      }
  
     
      setRentalList(rentalList.filter(rental => rental.id !== rentalId));
    } catch (error) {
      console.error('Error deleting rental:', error);
    }
  };
  return (
    <div className="Rental">
      <h2>Rental History</h2>
      <ul>
        {rentalList.map((rental) => (
          <li key={rental.id}>
            <p>{rental.car}</p>
            {/* <p>{rental.date}</p> */}
            {/* <button onClick={() => deleteRental(rental.id)}>Delete</button> */}
            {/* <button onClick={deleteRental}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentalHistoryPage;
