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
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h3>Edit Preference Card</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Surgeon Name"
          value={surgeonName}
          onChange={(e) => setSurgeonName(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '8px' }}
        />
        <input
          type="text"
          placeholder="Procedure"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '8px' }}
        />
        <input
          type="text"
          placeholder="Instruments (comma-separated)"
          value={instruments}
          onChange={(e) => setInstruments(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '8px' }}
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ display: 'block', marginBottom: '8px', width: '100%' }}
        />
        <div>
          <button type="submit" style={{ marginRight: '8px' }}>Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditCardForm;
