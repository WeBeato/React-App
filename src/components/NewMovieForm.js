import { useState, useRef } from 'react';
import './NewMovieForm.css';

export default function NewMovieForm(props) {
    // const [title, setTitle] = useState("");
    // const [date, setDate] = useState("");

    const title = useRef();
    const date = useRef();
    
    const resetForm = () => {
        title.current.value = "";
        date.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title.current.value,
            date: date.current.value,
            id: Math.floor(Math.random() * 1000)
        }

        props.addMovie(event);
        resetForm();
    }


    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Movie Title:</span>
                <input
                    type="text"
                    ref={title}
                />
            </label>
            <label>
                <span>Movie Date:</span>
                <input
                    type="date"
                    ref={date}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}
