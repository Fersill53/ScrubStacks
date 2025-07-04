import AddCardForm from "./AddCardForm";

function AddCard() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Add New Preference Card</h2>
            <AddCardForm onCardAdded={() => {}} />
        </div>
    );
}

export default AddCard;