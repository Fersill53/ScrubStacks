import AddCardForm from './AddCardForm';
import './../App.css';

function AddCard() {
  return (
    <div className="page-container">
      <h1>Add New Preference Card</h1>
      <p>Fill out the form below to add a new card.</p>
      <AddCardForm />
    </div>
  );
}

export default AddCard;
