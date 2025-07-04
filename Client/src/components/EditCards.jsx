import EditCardForm from './components/EditCardForm';
import './App.css';

function EditCards() {
  return (
    <div className="page-container">
      <h1>Edit Preference Cards</h1>
      <p>Select and update existing surgeon preference cards.</p>
      <EditCardForm />
    </div>
  );
}

export default EditCards;
