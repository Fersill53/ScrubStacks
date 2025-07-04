import { useState } from 'react';
import axios from 'axios';

function AddCardForm({ onCardAdded }) {
  const [surgeonName, setSurgeonName] = useState('');
  const [procedure, setProcedure] = useState('');
  const [instruments, setInstruments] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Split instruments by comma and trim
    const instrumentsArray = instruments.split(',').map(item => item.trim());

    try {
      await axios.post('http://localhost:5000/api/cards', {
        surgeonName,
        procedure,
        instruments: instrumentsArray,
        notes
      });

      // Clear form
      setSurgeonName('');
      setProcedure('');
      setInstruments('');
      setNotes('');

      // Notify parent to refresh the list
      onCardAdded();
    } catch (err) {
      console.error('Error adding card:', err);
    }
  };

  return (
    <div>
      <h2>Add New Preference Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Surgeon Name"
          value={surgeonName}
          onChange={(e) => setSurgeonName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Procedure"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Instruments (comma-separated)"
          value={instruments}
          onChange={(e) => setInstruments(e.target.value)}
          required
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default AddCardForm;
