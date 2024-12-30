import React, { useState } from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import TableAvailability from './components/TableAvailability';

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
  };

  return (
    <div className="app">
      <Header />
      <BookingForm onSubmit={handleBookingSubmit} />
      {bookingDetails && <TableAvailability bookingDetails={bookingDetails} />}
    </div>
  );
};

export default App;
