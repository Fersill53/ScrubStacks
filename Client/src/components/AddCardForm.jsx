import { useState } from 'react';
import axios from 'axios';
import './../App.css';

function AddCardForm() {
  const [surgeonName, setSurgeonName] = useState('');
  const [procedure, setProcedure] = useState('');
  const [instruments, setInstruments] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/cards', {
        surgeonName,
        procedure,
        instruments: instruments.split(',').map(i => i.trim()),
        notes,
      });
      setSurgeonName('');
      setProcedure('');
      setInstruments('');
      setNotes('');
      alert('Card added!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-container">
      <h1>Add New Preference Card</h1>
      <p>Fill out the form below to add a new card.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Surgeon Name"
          value={surgeonName}
          onChange={e => setSurgeonName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Procedure"
          value={procedure}
          onChange={e => setProcedure(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Instruments (comma-separated)"
          value={instruments}
          onChange={e => setInstruments(e.target.value)}
          required
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default AddCardForm;
