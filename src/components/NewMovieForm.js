import { useState } from 'react';
import './NewMovieForm.css';

export default function NewMovieForm() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const resetForm = () => {
        setTitle("");
        setDate("");
    }


    return (
        <form className='new-event-form'>
            <label>
                <span>Movie Title:</span>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Movie Date:</span>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <button>Submit</button>

            <p>Title - {title}, Date - {date}</p>
            <p onClick={resetForm}>Reset Form</p>
        </form>
    )
}
