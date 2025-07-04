import './PageContainer.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditCardForm from './EditCardForm';

function EditCards() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  // Fetch cards from the server
  const fetchCards = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/cards');
      setCards(res.data);
    } catch (err) {
      console.error('Error fetching cards:', err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/cards/${id}`);
    fetchCards(); // Refresh the list after delete
  } catch (err) {
    console.error('Error deleting card:', err);
  }
};


  const handleCancelEdit = () => {
    setSelectedCard(null);
  };

  const handleCardUpdated = () => {
    fetchCards();
    setSelectedCard(null);
  };

  return (
    <div className="fullPage">
      <h1>Edit Preference Cards</h1>
      <p>Select and update existing surgeon preference cards.</p>

      {selectedCard ? (
        <EditCardForm
          card={selectedCard}
          onCancel={handleCancelEdit}
          onCardUpdated={handleCardUpdated}
        />
      ) : (
        <div className="card-list">
          {cards.length === 0 ? (
            <p>No cards available.</p>
          ) : (
            cards.map(card => (
              <div key={card._id} className="card">
                <h3>{card.surgeonName}</h3>
                <p><strong>Procedure:</strong> {card.procedure}</p>
                <p><strong>Instruments:</strong> {card.instruments.join(', ')}</p>
                <p><strong>Notes:</strong> {card.notes}</p>
                <button onClick={() => setSelectedCard(card)}>Edit This Card</button>
                <button onClick={() => handleDelete(card._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default EditCards;
