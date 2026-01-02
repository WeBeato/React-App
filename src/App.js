import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import ShowModal from './components/ShowModal';
import EventList from './components/EventList';

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

  const handleShow = () => {
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
          <h2>Terms and Conditions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus earum debitis nesciunt. Dolore eos, numquam aliquam similique atque doloremque nisi cupiditate labore quae, animi earum reprehenderit, odit necessitatibus autem.</p>
        </Modal>}

      <ShowModal handleShow={handleShow} />

    </div>
  );
}

export default App;
