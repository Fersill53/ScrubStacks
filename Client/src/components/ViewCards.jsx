import { useEffect, useState } from 'react';
import axios from 'axios';
import AddCardForm from './AddCardForm';
import EditCardForm from './EditCardForm';

function ViewCards() {
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  const fetchCards = () => {
    axios.get('http://localhost:5000/api/cards')
      .then(res => {
        setCards(res.data);
      })
      .catch(err => {
        console.error('Error fetching cards:', err);
      });
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cards/${id}`);
      fetchCards();
    } catch (err) {
      console.error('Error deleting card:', err);
    }
  };

  return (
    <div>
      <h2>Surgeon Preference Cards</h2>
      {cards.length === 0 && <p>No cards yet.</p>}
      <ul>
        {cards.map(card => (
          <li key={card._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{card.surgeonName}</h3>
            <p><strong>Procedure:</strong> {card.procedure}</p>
            <p><strong>Instruments:</strong> {card.instruments.join(', ')}</p>
            <p><strong>Notes:</strong> {card.notes}</p>
            <button onClick={() => handleDelete(card._id)}>Delete</button>
            <button onClick={() => setEditingCard(card)}>Edit</button>
          </li>
        ))}
      </ul>

      <h2>Add New Card</h2>
      <AddCardForm onCardAdded={fetchCards} />

      {editingCard && (
        <div style={{ marginTop: '20px' }}>
          <h2>Edit Card</h2>
          <EditCardForm
            card={editingCard}
            onCancel={() => setEditingCard(null)}
            onCardUpdated={fetchCards}
          />
        </div>
      )}
    </div>
  );
}

export default ViewCards;
