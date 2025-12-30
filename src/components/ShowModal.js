import './ShowModal.css';

export default function ShowModal(props) {
  return (
    <>
    <hr />
    <button className='showmodal' onClick={props.handleShow}>Show Modal</button>
    </>
  )
}
