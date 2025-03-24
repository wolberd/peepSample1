import { Person } from '../types/Person';

interface PersonListProps {
  persons: Person[];
}

const PersonList = ({ persons }: PersonListProps) => {
  if (persons.length === 0) {
    return (
      <div className="empty-state">
        <p>No contacts added yet. Click the + button to add someone.</p>
      </div>
    );
  }

  return (
    <div className="person-grid">
      {persons.map((person) => (
        <div key={person.id} className="person-card">
          <h3>{person.name}</h3>
          <p className="role">{person.role}</p>
          <p className="organization">{person.organization}</p>
          {person.notes && <p className="notes">{person.notes}</p>}
          <p className="date-added">
            Added: {new Date(person.dateAdded).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PersonList; 