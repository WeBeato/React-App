import React from 'react'

export default function EventList(props) {
  return (
    <div>
        {props.events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>{index + 1}- {event.title}</h2>
            <button onClick={() => props.handleClick(event.id)}>Delete</button>
          </React.Fragment>
        ))}
    </div>
  )
}
