import './NewMovieForm.css';

export default function NewMovieForm() {
    return (
        <form className='new-event-form'>
            <label>
                <span>Movie Title:</span>
                <input type="text" />
            </label>
            <label>
                <span>Movie Date:</span>
                <input type="date" />
            </label>
            <button>Submit</button>
        </form>
    )
}
