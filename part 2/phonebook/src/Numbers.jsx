const Numbers = ({persons,filter}) =>{
    const filterd_persons=filter.length>0?persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase())):persons;
    return(
      <>
      
      {filterd_persons.map((person)=><p key={person.id}>{person.name} {person.number}</p>)}
      </>
      
    )
  }
  export default Numbers;