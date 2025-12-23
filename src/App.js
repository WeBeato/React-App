import './App.css';
import { useState } from 'react';

function App() {
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

  return (
    <div className="App">
      {
        events.map((event, index) => (
          <div key={event.id}>
            <h2>{index + 1}- {event.title}</h2>
            <button onClick={() => handleClick(event.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
