import { useNavigate } from 'react-router-dom';
import AddCardForm from './AddCardForm';
import './../App.css';

function AddCard() {
  const navigate = useNavigate();

  const handleCardAdded = () => {
    // Option 1: Redirect to View page
    navigate('/view');

    // Option 2: Show message or refresh (you decide)
  };

  return (
    <div className="page-container">
      <h1>Add New Preference Card</h1>
      <p>Fill out the form below to add a new card.</p>
      <AddCardForm onCardAdded={handleCardAdded} />
    </div>
  );
}

export default AddCard;
