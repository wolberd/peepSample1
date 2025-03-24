import { useState } from 'react';
import { Person } from '../types/Person';

interface AddPersonModalProps {
  onClose: () => void;
  onAdd: (person: Omit<Person, 'id' | 'dateAdded'>) => void;
}

function AddPersonModal({ onClose, onAdd }: AddPersonModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="organization">Organization:</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">
              Add Person
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPersonModal; 