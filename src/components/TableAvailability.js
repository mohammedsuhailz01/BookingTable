import React from 'react';

const TableAvailability = ({ bookingDetails }) => {
  const { date, time, people } = bookingDetails;

  const checkAvailability = () => {
    // Simulate checking availability (this could be replaced with an API call)
    const isAvailable = true; // For demo, assume availability is always true
    return isAvailable;
  };

  return (
    <div className="availability">
      <h3>Booking Details</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>People: {people}</p>
      <p>
        {checkAvailability()
          ? 'Table Available!'
          : 'Sorry, no tables available at this time.'}
      </p>
    </div>
  );
};

export default TableAvailability;
