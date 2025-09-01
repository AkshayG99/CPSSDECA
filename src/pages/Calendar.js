import React, { useState, useCallback } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';
import './Calendar.css';

// Sample events data - you can edit these directly
const sampleEvents = [
  {
    title: 'DECA Meeting',
    start: new Date(2025, 7, 20, 15, 0), // August 20, 2025, 3:00 PM
    end: new Date(2025, 7, 20, 16, 0),   // August 20, 2025, 4:00 PM
    description: 'Monthly DECA chapter meeting. All members please attend.'
  },
  {
    title: 'Workshop: Public Speaking',
    start: new Date(2025, 7, 25, 14, 0), // August 25, 2025, 2:00 PM
    end: new Date(2025, 7, 25, 16, 0),   // August 25, 2025, 4:00 PM
    description: 'Learn essential public speaking skills from industry professionals.'
  },
  // Add more events here following the same format:
  // {
  //   title: 'Event Title',
  //   start: new Date(YYYY, MM-1, DD, HH, MM), // Note: Month is 0-indexed (0-11)
  //   end: new Date(YYYY, MM-1, DD, HH, MM),
  //   description: 'Event description'
  // },
];

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Custom event component to show description in the tooltip
const EventComponent = ({ event }) => {
  return (
    <div title={event.description}>
      <strong>{event.title}</strong>
      {event.description && <div className="rbc-event-description">{event.description}</div>}
    </div>
  );
};

const CalendarPage = () => {
  const [events] = useState(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEventClick = useCallback((event) => {
    setSelectedEvent(event);
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="page">
      <div className="page-content">

        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600, margin: '20px 0' }}
            defaultView="month"
            views={['month', 'week', 'day', 'agenda']}
            components={{
              event: EventComponent
            }}
            onSelectEvent={handleEventClick}
            eventPropGetter={(event, start, end, isSelected) => {
              return {
                className: 'rbc-event',
                style: {
                  backgroundColor: '#1a73e8',
                  borderRadius: '4px',
                  color: 'white',
                  border: 'none',
                  padding: '2px 5px',
                }
              };
            }}
          />
        </div>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>When:</strong> {selectedEvent && format(selectedEvent.start, 'MMMM d, yyyy h:mm a')} - {selectedEvent && format(selectedEvent.end, 'h:mm a')}</p>
            {selectedEvent?.description && (
              <div className="event-description">
                <p><strong>Description:</strong></p>
                <p>{selectedEvent.description}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CalendarPage;
