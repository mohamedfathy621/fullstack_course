const Numbers = ({persons,filter,handleDelete}) =>{
    const filterd_persons=filter.length>0?persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase())):persons;
    return(
      <>
      
      {filterd_persons.map((person)=>
        <p key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person.id,person.name)} >delete</button></p>
      )}
      </>
      
    )
  }
  export default Numbers;