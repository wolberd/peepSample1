import { useState } from 'react'
import { Person } from './types/Person'
import PersonList from './components/PersonList'
import AddPersonModal from './components/AddPersonModal'
import './App.css'

function App() {
  const [persons, setPersons] = useState<Person[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddPerson = (newPerson: Omit<Person, 'id' | 'dateAdded'>) => {
    const person: Person = {
      ...newPerson,
      id: crypto.randomUUID(),
      dateAdded: new Date().toISOString(),
    }
    setPersons([...persons, person])
    setIsModalOpen(false)
  }

  return (
    <div className="app">
      <header>
        <h1>Research Contacts</h1>
        <button 
          className="add-button"
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
      </header>
      
      <PersonList persons={persons} />
      
      {isModalOpen && (
        <AddPersonModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddPerson}
        />
      )}
    </div>
  )
}

export default App
