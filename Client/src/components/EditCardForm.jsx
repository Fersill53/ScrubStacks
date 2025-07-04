import { useState } from 'react';
import axios from 'axios';

function EditCardForm({ card, onCancel, onCardUpdated }) {
  const [surgeonName, setSurgeonName] = useState(card.surgeonName);
  const [procedure, setProcedure] = useState(card.procedure);
  const [instruments, setInstruments] = useState(card.instruments.join(', '));
  const [notes, setNotes] = useState(card.notes);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instrumentsArray = instruments.split(',').map(item => item.trim());

    try {
      await axios.put(`http://localhost:5000/api/cards/${card._id}`, {
        surgeonName,
        procedure,
        instruments: instrumentsArray,
        notes
      });
      onCardUpdated();
      onCancel();
    } catch (err) {
      console.error('Error updating card:', err);
    }
  };

  return (
    <div>
      <h2>Edit Preference Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={surgeonName}
          onChange={(e) => setSurgeonName(e.target.value)}
          required
        />
        <input
          type="text"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          required
        />
        <input
          type="text"
          value={instruments}
          onChange={(e) => setInstruments(e.target.value)}
          required
        />
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EditCardForm;
