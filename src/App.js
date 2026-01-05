import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewMovieForm from './components/NewMovieForm';

function App() {

  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState([
    { title: 'THOR: LOVE AND THUNDER (2022)', id: 1 },
    { title: 'THE GRAY MAN (2022)', id: 2 },
    { title: 'THE SEA BEST (2022)', id: 3 },
    { title: 'TOP GUN: MAVERICK (2022)', id: 4 },
    { title: 'DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS (2022)', id: 5 },
    { title: 'HUSTLE (2022)', id: 6 }
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const handleOpen = () => {
    setShowModal(true);
  }

  const subtitle = "Latest Movies";

  return (
    <div className="App">
      <Title title="My Favorite Movies" subtitle={subtitle} />

      {
        showEvents && (
          <div>
            <button onClick={() => setShowEvents(false)}>Hide</button>
          </div>
        )
      }
      {
        !showEvents && (
          <div>
            <button onClick={() => setShowEvents(true)}>show</button>
          </div>
        )
      }

      {
        showEvents && <EventList events={events} handleClick={handleClick} />
      }

      {/* <Modal>
        <h2>10% off Coupon code</h2>
        <p>Use the Code WEBEATO</p>
      </Modal> */}

      {showModal &&
        <Modal handleClose={handleClose} isSalesModal={true}>
          <NewMovieForm />
        </Modal>}

      <hr />
      <button onClick={handleOpen}>Add New Movie</button>

    </div>
  );
}

export default App;
