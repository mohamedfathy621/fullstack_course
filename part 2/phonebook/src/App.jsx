import { useState,useEffect } from 'react'
import Numbers from './Numbers'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Phone_service from './Phone_service'
import Notification from './Notfication'
import './app.css'
const App = () => {
  const [persons, setPersons] = useState([
  ]) ;
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message,setMessage] = useState(null);
  useEffect(() => {
      Phone_service.get_all().then((response)=>{
      setPersons(response.data);
    })
  }, [])

  const changeName = (event) =>{
    setNewName(event.target.value);
  }

  const changeNumber =(event) =>{
    setNewNumber(event.target.value);
  }

  const changefilter =(event) =>{
    setFilter(event.target.value);
  }

  const handleDelete =(id,name) =>{
    const result = window.confirm(`Delete ${name}`);
    if(result){
      Phone_service.delete_person(id).then((response)=>{
        setPersons(persons.filter((person)=> person.id!=response.data.id));
        setMessage([`Deleted ${name}`,'resolved']);
      }).catch((err)=>{
        setMessage([`information of ${name} has already been removed from the server`,'rejected']);
      })
    }
   else{
    console.log("the user still likes this one");
   }
  }

  const addPerson = (event) =>{
    event.preventDefault();
    const new_person = {name: newName,number:newNumber};
    const check=persons.findIndex((person)=>person.name.toLowerCase()==newName.toLowerCase());
    if(check>=0){
      const result = window.confirm(`${newName} is already added to the phonebook, replace the oldnumber with a new one`);
      if(result){
          Phone_service.update_person(persons[check].id,new_person).then((response)=>{
            setPersons(persons.map(
              (person)=>
                person.id==persons[check].id?{...new_person,id:person.id}:person
            ));
            setMessage([`Updated ${newName}`,'resolved']);
          }).catch((err)=>{
            setMessage([`information of ${name} has already been removed from the server`,'rejected']);
          });
      }
      else{
        console.log("the user still likes this one");
      }
    }
    else{
      Phone_service.add_person(new_person).then((response)=>{
        setPersons(persons.concat(response.data));
        setMessage([`Added ${newName}`,'resolved']);
      })
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
       <Notification message={message} setMessage={setMessage}/>
       <Filter filter={filter} changefilter={changefilter}/>
      <h3>add a new</h3>
        <PersonForm addPerson={addPerson} newName={newName} changeName={changeName} newNumber={newNumber} changeNumber={changeNumber}/>
      <h3>Numbers</h3>
        <Numbers persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App