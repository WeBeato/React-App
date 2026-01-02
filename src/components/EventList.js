import React from 'react'
import styles from './EventList.module.css'

export default function EventList(props) {
  return (
    <div>
      {props.events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>{index + 1}- {event.title}</h2>
          <button id={styles.btn} onClick={() => props.handleClick(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
