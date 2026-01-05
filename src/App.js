import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewMovieForm from './components/NewMovieForm';

function App() {

  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState([]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  const addMovie = (event)=>{
    setEvents((prevEvents)=>{
      return [...prevEvents, event];
    });
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
        <Modal isSalesModal={true}>
          <NewMovieForm addMovie={addMovie}/>
        </Modal>}

      <hr />
      <button onClick={handleOpen}>Add New Movie</button>

    </div>
  );
}

export default App;
