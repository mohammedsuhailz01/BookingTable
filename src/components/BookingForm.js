import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, people });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <label>
        Number of People:
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          min="1"
          required
        />
      </label>
      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
