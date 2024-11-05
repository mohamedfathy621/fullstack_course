import { useState } from 'react'
import Numbers from './Numbers'
import Filter from './Filter'
import PersonForm from './PersonForm'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const changeName = (event) =>{
    setNewName(event.target.value);
  }

  const changeNumber =(event) =>{
    setNewNumber(event.target.value);
  }

  const changefilter =(event) =>{
    setFilter(event.target.value);
  }

  const addPerson = (event) =>{
    event.preventDefault();
    const new_person = {name: newName,number:newNumber , id:persons.length+1};
    const check=persons.some((person)=>person.name.toLowerCase()==newName.toLowerCase());
    if(check){
      alert(`${newName} is already added to phonebook`);
    }
    else{
      setPersons(persons.concat(new_person));
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
       <Filter filter={filter} changefilter={changefilter}/>
      <h3>add a new</h3>
        <PersonForm addPerson={addPerson} newName={newName} changeName={changeName} newNumber={newNumber} changeNumber={changeNumber}/>
      <h3>Numbers</h3>
        <Numbers persons={persons} filter={filter}/>
    </div>
  )
}

export default App