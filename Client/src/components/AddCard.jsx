import { useNavigate } from 'react-router-dom';
import AddCardForm from './AddCardForm';
import './../App.css';

function AddCard() {
  const navigate = useNavigate();

  const handleCardAdded = () => {
    navigate('/view');
  };

  return (
    <div className="centered-container">
      <h1>Add New Preference Card</h1>
      <p>Fill out the form below to add a new card.</p>
      <AddCardForm onCardAdded={handleCardAdded} />
    </div>
  );
}

export default AddCard;
