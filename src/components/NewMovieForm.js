import { useState } from 'react';
import './NewMovieForm.css';

export default function NewMovieForm() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");


    return (
        <form className='new-event-form'>
            <label>
                <span>Movie Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                <span>Movie Date:</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
            </label>
            <button>Submit</button>

            <p>Title - {title}, Date - {date}</p>
        </form>
    )
}
